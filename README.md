# Staryzanovy — Akadémia bývania

Statický web pre **staryzanovy.sk** — edukačná stránka o bývaní pre realitného makléra. Žiadna databáza, žiadny e-shop. Iba obsah, dôvera a konzultácia.

## O projekte

Webstránka pre realitného makléra, ktorá pomáha klientom **vymeniť starý byt za nový** — vedome, informovane a bez tlaku. Učí pochopiť pôdorys, materiály, hodnotu a charakter bývania, a vedie k osobnej konzultácii.

## Štruktúra

```
staryzanovy/
├── index.html        # hlavná stránka
├── styles.css        # kompletný dizajn
├── script.js         # interakcie (kurzor, scroll-reveal, anatómia, parallax)
├── 404.html          # vlastná chybová stránka
├── CNAME             # custom doména pre GitHub Pages
├── .nojekyll         # vypnutie Jekyll spracovania
└── README.md
```

## Sekcie stránky

1. **Hero** — bold úvod „Staré priestory, nové príbehy"
2. **Manifest** — krátky text o tom, prečo stránka existuje
3. **Vedomosti** — 6 vzdelávacích kategórií (Architektúra, Materiály, Svetlo/zvuk, Hodnota, Energetika, História)
4. **Z tohto čísla** — 6 článkov v editoriálnom rozložení
5. **Anatómia bytu** — interaktívna SVG schéma s 5 hotspotmi
6. **Aktuálne projekty** — zoznam 7 realít s lokalitou, typom, stavom
7. **Filozofia** — 4 princípy redakcie
8. **Konzultácia** — kontaktný formulár (statický — odošle sa cez mailto alebo cez budúce napojenie)
9. **Footer** — navigácia, kontakt, masívne brand-logo

## Spustenie lokálne

Otvor `index.html` v prehliadači. Žiadny build, žiadne závislosti.

Alebo pre lokálny server:

```bash
cd staryzanovy
python3 -m http.server 8080
# otvor http://localhost:8080
```

## Nasadenie na GitHub Pages

1. Vytvor repo `staryzanovy` na GitHube
2. Pushni tieto súbory do `main` vetvy
3. V **Settings → Pages** vyber zdroj: `Deploy from a branch` → `main` / `/ (root)`
4. Pre custom doménu **staryzanovy.sk**:
   - V DNS u registrátora pridaj `A` záznamy na GitHub Pages IP-čky:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - A `CNAME` pre `www` → `<username>.github.io`
   - Súbor `CNAME` v koreni už obsahuje `staryzanovy.sk`
5. Zaškrtni **Enforce HTTPS** keď je certifikát hotový (5–15 min)

## Dizajn

- **Estetika:** editoriálny architektonický časopis
- **Fonty:** Fraunces (display serif, variabilný) + Geist (sans) + JetBrains Mono (technické popisky) — všetky z Google Fonts
- **Paleta:** teplý papier (#EDE6D6) × hlboký atrament × terakota × šalviová
- **Detaily:** modrotlačová mriežka, paper-noise overlay, technické anotácie, čísla sekcií ako v časopise

## Čo doplniť pred ostrým spustením

1. **Skutočné fotky projektov** — sloty v `.article__visual` a `.project` sú pripravené, treba pridať `<img>` alebo `background-image`
2. **Reálne kontakty** — e-mail, telefón v sekcii Konzultácia
3. **Odoslanie formulára** — buď cez Formspree / Netlify Forms / Web3Forms (jedna riadok HTML), alebo `mailto:`
4. **Obsah článkov** — vytvoriť šablónu `clanok.html` a duplikovať pre každý článok
5. **Open Graph obrázok** — `og-image.jpg` (1200×630) pre náhľady na sociálnych sieťach
6. **Google Analytics / Plausible** — pre meranie pred spustením Google Ads
7. **Sitemap.xml a robots.txt** — pre SEO

## Google Ads pripravenosť

- Sémantické HTML s `<h1>`, `<h2>`, jasná hierarchia
- Meta description a OG tagy v `<head>`
- Konverzný cieľ: odoslanie konzultačného formulára alebo klik na `mailto:`
- Pripraviť landing pages pre jednotlivé kampane (napr. `/byty-bratislava.html`) — duplikovaním `index.html` a úpravou textov pre konkrétny intent

## Licencia

© 2026 Staryzanovy. Všetky práva vyhradené.
