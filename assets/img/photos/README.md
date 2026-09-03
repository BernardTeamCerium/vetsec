# Site photos

Drop the real Vet-Sec photos here using these **exact filenames**. Pages
reference them via CSS, so once a file exists at the right name it appears
automatically — no markup changes needed. Until then, each slot shows a styled
navy panel (no broken images).

Recommended: optimized JPGs (< ~300 KB). Landscape ≈ 1600×1000 for bands/heroes;
square ≈ 800×800 for team portraits.

## Site / scene photos — `assets/img/photos/`

| Filename | Used on | Suggested photo |
|---|---|---|
| `patrol-officers.jpg` | Home hero · Locations hero · Contact hero · Why Vet-Sec band | Two officers with the marked patrol car |
| `patrol-car.jpg` | (spare / future service pages) | Clean shot of the Vet-Sec patrol car |
| `dispatch-center.jpg` | Home dispatch figure · Why Vet-Sec hero | Dispatchers at the monitor wall |
| `officer-outdoor.jpg` | Careers hero · About "on post" band | Uniformed officer outdoors |
| `officer-suit.jpg` | About hero | Officer in suit jacket (lobby) |
| `officer-female.jpg` | (spare / Careers, Officers) | Female officer in gray polo |
| `lobby-duo.jpg` | (spare / About, Why Vet-Sec) | Suit + uniformed officer at the front desk |
| `camera-tech.jpg` | Services hero | Security camera / surveillance tech |
| `camera-towers.jpg` | (Camera Towers service) | The mobile camera/light towers |
| `security-tech.jpg` | (Access Control service) | Fingerprint / biometric graphic |
| `team-founders.jpg` | Team hero | The three founders (flag backdrop) |
| `founder-mp.jpg` | Team "our roots" figure | Vintage Army Military Police photo |

## Team portraits — `assets/img/photos/team/`

Square headshots. Filenames match the names on `team.html`:

`chad-benham.jpg`, `william-brandon.jpg`, `ennio-canziani.jpg`,
`john-brandon.jpg`, `adam-rufenacht.jpg`, `jeremy-henemyer.jpg`,
`sam-fullam.jpg`, `amy-naccari.jpg`, `breanna-chandler.jpg`,
`jessica-palato.jpg`, `thuy-meola.jpg`

> I can't tell which headshot belongs to which person, so please match each
> photo to the right filename (and confirm names/titles).

## How to add them

Save the files here (and in `team/`) with the names above, then commit and push —
the deploy publishes them and the photos appear site-wide. To use different
filenames, update the `--img` / `--hero-img` values in the HTML (search for
`assets/img/photos/`).
