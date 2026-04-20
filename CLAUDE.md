# Portfolio – Bilal Acil

## Kommunikation
- Immer auf **Deutsch** antworten
- Kurze, direkte Antworten

## Projektstruktur
```
Portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── images/
│   │   ├── Bilal_Acil.png          # Profilfoto
│   │   ├── Bilal_Logo.png          # Logo (Hero)
│   │   ├── Bilal_Logo_3.png        # Logo (Navbar)
│   │   ├── Bilal_Acil_Titel.png    # Favicon
│   │   └── BG shape.png            # Hintergrundform (Hero)
│   ├── icons/
│   │   ├── Rectangle 185.png       # E-Mail Icon Hintergrund
│   │   ├── Vector 32.png           # E-Mail Icon Pfeil
│   │   ├── Github button.png       # GitHub Icon (mask-image)
│   │   ├── Linkedin button.png     # LinkedIn Icon (mask-image)
│   │   ├── Ellipse 24.png          # Hintergrund aktiver Lang-Button
│   │   └── Arrow down.png          # Scroll-Indicator
│   └── fonts/
│       ├── Anta-Regular.ttf        # Hauptfont (Name, Logo-Text)
│       ├── JosefinSans-Regular.ttf # Untertitel & Nav-Links
│       └── (weitere Fonts)
```

## Design
- **Hintergrundfarbe:** `#262e34`
- **Blau (Akzent):** `#89bcd9` → `var(--blue)`
- **Weiß:** `#ffffff` → `var(--white)`
- **Nav-Hintergrund:** `var(--blue)` (hellblau)
- **Fonts:**
  - `Anta` → Name, Logo-Label
  - `JosefinSans` → Titel, Nav-Links
  - `Orbitron`, `Rajdhani` → Google Fonts (geladen per CDN)

## Fertige Sektionen
- **Hero** (vollständig):
  - Profilfoto mit BG-Shape (rotiert -15° + dunkler beim Hover)
  - Logo mit rotateY(180°) Flip-Effekt beim Hover über `.logo-label`
  - Text "B.Acil" → "Developer" (Flip-Effekt, 0.4s Delay nach Logo)
  - Social Icons (E-Mail, GitHub, LinkedIn) mit mask-image & Hover-Effekten
  - Scroll-Indicator mit Bounce-Animation
- **Navbar** (unten, fixiert):
  - Logo (klick → scroll to top)
  - Nav-Links: Why me, Skills, Projects, Contact
  - Sprachumschalter DE/EN mit Ellipse-Hintergrund auf aktivem Button

## Ausstehende Sektionen
- Why me
- Skills
- Projects
- Contact

## Sprachumschalter (script.js)
- Elemente mit `data-de="..."` und `data-en="..."` werden übersetzt
- `translate="no"` → wird nicht übersetzt (z.B. `.label-back`)
- Sprache wird in `localStorage` gespeichert

## Technisches
- Navbar ist **unten fixiert** (`position: fixed; bottom: 0`)
- Hero-Höhe: `calc(100vh - 104px)` (Platz für Navbar)
- Responsiv: `clamp()` für Schriftgrößen, `max-width: 1440px`
- Icons werden per `mask-image` eingefärbt (GitHub, LinkedIn)
