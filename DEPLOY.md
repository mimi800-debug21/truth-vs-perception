# 🚀 Deployment-Anleitung

## Schnellstart auf GitHub Pages

### 1. GitHub Repository erstellen

Gehe zu https://github.com/new und erstelle ein neues Repository:
- **Name:** `truth-vs-perception`
- **Beschreibung:** "Truth vs. Perception – Interaktive Schätz-Challenge"
- **Sichtbarkeit:** Public (für kostenlose GitHub Pages)
- **NICHT** initialisieren mit README, .gitignore oder Lizenz (wir haben schon Code!)

### 2. Code zu GitHub pushen

Führe diese Befehle im Terminal aus:

```bash
cd /home/openclaw/.openclaw/workspace/truth-vs-perception

# GitHub-Repository als Remote hinzufügen (ersetze DEIN-USERNAME)
git remote add origin https://github.com/DEIN-USERNAME/truth-vs-perception.git

# Code pushen
git push -u origin main
```

### 3. GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** → **Pages**
3. Unter **Build and deployment**:
   - **Source:** GitHub Actions
4. Der Deploy-Workflow startet automatisch

### 4. Warten bis es live ist

- Der Workflow dauert ca. 2-3 Minuten
- Du siehst den Fortschritt unter **Actions**
- Wenn fertig: Deine Seite ist live unter:
  ```
  https://DEIN-USERNAME.github.io/truth-vs-perception
  ```

## 🔧 Alternative: Manuelles Build & Deploy

Wenn du nicht GitHub Actions nutzen möchtest:

```bash
# Build erstellen
npm run build

# Die fertigen Dateien sind im ./out Ordner
# Diese kannst du auf jeden Webserver hochladen
```

## 📱 Testing Local

```bash
# Development Server
npm run dev

# Dann öffne http://localhost:3000
```

## ❓ Probleme?

### Build-Fehler
```bash
npm install
npm run build
```

### GitHub Pages zeigt 404
- Warte 2-3 Minuten nach dem Deploy
- Stelle sicher, dass der Workflow erfolgreich war (grüner Haken in Actions)

### Custom Domain gewünscht?
- In Settings → Pages → Custom domain deine Domain eingeben
- DNS-Einträge bei deinem Domain-Provider setzen

---

**Viel Erfolg!** 🎉
