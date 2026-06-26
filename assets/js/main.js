/* =========================================================================
   VetSec — site interactions
   - Mobile nav toggle
   - Scroll reveal
   - Operational forms: validation + submission
     Submission strategy (progressive enhancement):
       1. If the <form> has a real action URL in data-endpoint (e.g. a
          Formspree/Netlify/your-own endpoint), it POSTs there via fetch.
       2. Otherwise it falls back to a pre-filled mailto: to the address in
          data-mailto, so the form is functional out of the box with zero infra.
     A honeypot field blocks basic spam bots. All states are announced for a11y.
   ========================================================================= */
(function () {
  'use strict';

  /* ---- Mobile navigation ------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Scroll reveal ----------------------------------------------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });
    // Safety net: never let content stay hidden if the observer misses (some
    // browsers/headless contexts don't fire it reliably).
    setTimeout(function () { reveals.forEach(function (el) { el.classList.add('in'); }); }, 2200);
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Forms ------------------------------------------------------------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setStatus(form, type, msg) {
    var box = form.querySelector('.form-status');
    if (!box) return;
    box.className = 'form-status show ' + type;
    box.textContent = msg;
    box.setAttribute('role', type === 'err' ? 'alert' : 'status');
  }

  function validate(form) {
    var ok = true;
    form.querySelectorAll('[required]').forEach(function (el) {
      var wrap = el.closest('.field');
      var valid = el.value.trim() !== '';
      if (valid && el.type === 'email') valid = EMAIL_RE.test(el.value.trim());
      if (el.type === 'checkbox') valid = el.checked;
      if (wrap) wrap.classList.toggle('invalid', !valid);
      if (!valid && ok) { ok = true; }
      if (!valid) ok = false;
    });
    return ok;
  }

  function buildMailto(form, to) {
    var subjectField = form.querySelector('[name="subject"]');
    var subject = (subjectField && subjectField.value.trim()) ||
                  form.getAttribute('data-subject') || 'Website enquiry';
    var lines = [];
    form.querySelectorAll('input, select, textarea').forEach(function (el) {
      if (!el.name || el.type === 'checkbox' && !el.checked) return;
      if (el.type === 'hidden' || el.classList.contains('hp-field')) return;
      if (el.type === 'checkbox') { lines.push(labelFor(el) + ': Yes'); return; }
      if (el.value.trim() === '') return;
      lines.push(labelFor(el) + ': ' + el.value.trim());
    });
    return 'mailto:' + to +
      '?subject=' + encodeURIComponent('[VetSec] ' + subject) +
      '&body=' + encodeURIComponent(lines.join('\n'));
  }

  function labelFor(el) {
    var wrap = el.closest('.field');
    var lab = wrap && wrap.querySelector('label');
    return lab ? lab.textContent.replace('*', '').trim() : (el.name || 'Field');
  }

  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.setAttribute('novalidate', '');
    // clear invalid state as the user fixes fields
    form.addEventListener('input', function (e) {
      var wrap = e.target.closest && e.target.closest('.field');
      if (wrap && wrap.classList.contains('invalid')) wrap.classList.remove('invalid');
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot — if filled, silently "succeed" without doing anything.
      var hp = form.querySelector('.hp-field');
      if (hp && hp.value.trim() !== '') {
        setStatus(form, 'ok', 'Thank you — your message has been received.');
        form.reset();
        return;
      }

      if (!validate(form)) {
        setStatus(form, 'err', 'Please complete the highlighted fields before submitting.');
        var firstBad = form.querySelector('.field.invalid input, .field.invalid textarea, .field.invalid select');
        if (firstBad) firstBad.focus();
        return;
      }

      var endpoint = form.getAttribute('data-endpoint');
      var isNetlify = form.hasAttribute('data-netlify');
      var mailto = form.getAttribute('data-mailto') || 'info@vetsec.org';
      var btn = form.querySelector('button[type="submit"]');

      function busy(on) {
        if (!btn) return;
        if (on) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = 'Sending…'; }
        else { btn.disabled = false; if (btn.dataset.label) btn.textContent = btn.dataset.label; }
      }
      function succeed() {
        setStatus(form, 'ok', 'Thank you — your message has been sent. We’ll be in touch soon.');
        form.reset();
      }
      function fallbackToEmail() {
        window.location.href = buildMailto(form, mailto);
        setStatus(form, 'ok', 'Opening your email app to finish sending. If nothing happens, email us at ' + mailto + '.');
      }

      // Path 1: Netlify Forms — AJAX POST (url-encoded) to the form's action.
      // On Netlify this is captured natively with zero configuration; on any
      // other host the POST fails and we fall back to email.
      if (isNetlify) {
        busy(true);
        setStatus(form, 'ok', 'Sending…');
        var body = new URLSearchParams(new FormData(form)).toString();
        fetch(form.getAttribute('action') || '/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body
        }).then(function (res) {
          if (res.ok) { succeed(); } else { throw new Error('Bad status ' + res.status); }
        }).catch(fallbackToEmail).finally(function () { busy(false); });
        return;
      }

      // Path 2: explicit endpoint (Formspree / Getform / your own) -> POST via fetch.
      if (endpoint && /^https?:\/\//.test(endpoint)) {
        busy(true);
        setStatus(form, 'ok', 'Sending…');
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        }).then(function (res) {
          if (res.ok) { succeed(); } else { throw new Error('Bad status ' + res.status); }
        }).catch(fallbackToEmail).finally(function () { busy(false); });
        return;
      }

      // Path 3: nothing configured -> mailto fallback (works with zero setup).
      fallbackToEmail();
    });
  });

  /* ---- Footer year ------------------------------------------------------- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
