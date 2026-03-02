# 🚀 Truth vs. Perception

Eine interaktive Challenge-Webseite, die User*innen dazu bringt, ihre eigenen Erwartungen zu hinterfragen.

## 🎯 Konzept

Menschen überschätzen oder unterschätzen Dinge systematisch – diese Webseite visualisiert das in einer interaktiven, „springenden" UI. Jede Frage ist ein kleiner Aha-Moment.

## ✨ Features

- **5 psychologisch interessante Fragen** mit echten Daten
- **Interaktive Eingaben** (Slider und Zahleneingaben)
- **Animierte Feedback-Balken** (rot = daneben, grün = nah dran)
- **Framer Motion Animationen** für flüssige Übergänge
- **Dark Theme** mit knalligen Feedback-Farben
- **Share-Funktion** für virale Verbreitung
- **Responsive Design** für alle Geräte

## 📊 Fragen & Daten

| Frage | Antwort | Quelle |
|-------|---------|--------|
| Dark Mode Nutzung | 41% | Statista 2023 |
| Lesegeschwindigkeit (A4-Seite) | 50 Sekunden | University of Michigan, 2019 |
| Big Mac Kalorien | 563 kcal | McDonald's Nährwertangaben |
| Wasserverbrauch pro Tag | 3000 Liter | Water Footprint Network |
| Social Media pro Woche | 20 Stunden | Global Web Index 2023 |

## 🛠️ Tech Stack

- **Next.js 16** mit TypeScript
- **Tailwind CSS** für Styling
- **Framer Motion** für Animationen
- **GitHub Pages** für Deployment

## 🚀 Deployment auf GitHub Pages

1. Repository auf GitHub erstellen
2. Code pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/DEIN-USERNAME/truth-vs-perception.git
   git push -u origin main
   ```

3. GitHub Pages aktivieren:
   - Gehe zu Settings → Pages
   - Source: GitHub Actions
   - Warte bis der Deploy-Workflow durchläuft

4. Deine Seite ist live unter: `https://DEIN-USERNAME.github.io/truth-vs-perception`

## 🏃‍♂️ Local Development

```bash
# Installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Server starten
npm start
```

## 📁 Projektstruktur

```
truth-vs-perception/
├── src/
│   ├── app/
│   │   ├── challenge/
│   │   │   └── page.tsx      # Challenge-Seite
│   │   ├── globals.css       # Globale Styles
│   │   ├── layout.tsx        # Root Layout
│   │   └── page.tsx          # Landing Page
│   └── data/
│       └── questions.ts      # Fragen-Daten
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions Deploy
├── next.config.ts            # Next.js Konfiguration
└── package.json
```

## 🎨 Design-Prinzipien

- **Dunkle Hintergründe** + knallige Feedback-Farben (rot/grün)
- **Große Typografie** für bessere Lesbarkeit
- **Minimalistische UI** mit Fokus auf die Fragen
- **Micro-Animationen** für Spannung und Überraschung

## 📄 Lizenz

MIT License – frei nutzbar und modifizierbar.

---

**Viel Spaß beim Hinterfragen deiner Intuition!** 🧠✨
