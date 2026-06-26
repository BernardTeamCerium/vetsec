# Site photos

Drop the real Vet-Sec photos here using these **exact filenames**. The pages
reference them via CSS, so once a file exists at the right name it appears
automatically — no markup changes needed. Until then, each slot shows a styled
navy panel (no broken images).

Recommended: landscape JPGs, ~1600×1000px, optimized (< ~300 KB each).

| Filename | Used on | Suggested photo |
|---|---|---|
| `patrol-officers.jpg` | Home hero · Locations hero · Contact hero · Why Vet-Sec band | Two officers with the marked Vet-Sec patrol car |
| `dispatch-center.jpg` | Home "National Dispatch Center" figure · Why Vet-Sec hero | Dispatchers at the monitor wall |
| `officer-outdoor.jpg`  | Careers hero · About "on post" band | Uniformed officer outdoors |
| `officer-suit.jpg`     | About hero | Officer in suit jacket (lobby) |
| `camera-tech.jpg`      | Services hero | Security camera / surveillance tech |

## How to add them

1. Save the five files into this folder with the names above.
2. Commit and push to the branch — the deploy workflow publishes them and the
   photos appear across the site.

To use different filenames or add more photos, update the `--img` / `--hero-img`
values in the corresponding HTML (search for `assets/img/photos/`).
