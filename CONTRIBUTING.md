# Beitragen zu Fire Dispatcher

Vielen Dank für Ihr Interesse, zu Fire Dispatcher beizutragen! Diese Richtlinien helfen uns, das Projekt zu verbessern.

## Code of Conduct

Bitte behandeln Sie alle mit Respekt und Höflichkeit.

## Wie kann ich beitragen?

### Bugs melden

1. Überprüfen Sie zunächst, ob der Bug bereits gemeldet wurde
2. Erstellen Sie ein Issue mit einem aussagekräftigen Titel
3. Beschreiben Sie das Problem detailliert:
   - Schritte zur Reproduktion
   - Erwartetes Verhalten
   - Tatsächliches Verhalten
   - Ihre Umgebung (Browser, OS, etc.)

### Feature-Vorschläge

1. Erstellen Sie ein Issue mit dem Label `enhancement`
2. Beschreiben Sie die gewünschte Funktion
3. Erklären Sie, warum diese Funktion nützlich wäre
4. Zeigen Sie ggf. Mockups oder Beispiele

### Pull Requests

1. **Fork** das Repository
2. Erstellen Sie einen **Feature-Branch**:
   ```bash
   git checkout -b feature/deine-feature
   # oder
   git checkout -b fix/dein-fix
   ```
3. **Commiten** Sie Ihre Änderungen mit aussagekräftigen Messages:
   ```bash
   git commit -m "Add feature: Beschreibung"
   ```
4. **Push** zum Repository:
   ```bash
   git push origin feature/deine-feature
   ```
5. Öffnen Sie einen **Pull Request** mit:
   - Klarer Beschreibung der Änderungen
   - Referenz zu verwandten Issues
   - Screenshots für UI-Änderungen

## Richtlinien für die Entwicklung

### Code-Stil

- Verwenden Sie **2 Leerzeichen** zur Einrückung
- Verwenden Sie **aussagekräftige Variablennamen** in Englisch
- Kommentieren Sie komplexe Logik
- Verwenden Sie `const` statt `let` oder `var` (wenn möglich)

### HTML

```html
<!-- Verwenden Sie semantische HTML-Tags -->
<header>
  <nav>Navigation</nav>
</header>
<main>
  <article>Inhalt</article>
</main>
```

### CSS

- Verwenden Sie CSS-Variablen für Farben und Größen
- Ordnen Sie Eigenschaften nach logischen Gruppen
- Verwenden Sie aussagekräftige Klassennamen

```css
.button {
  /* Layout */
  display: inline-block;
  padding: 0.75rem 1.5rem;
  
  /* Styling */
  background: var(--accent);
  color: white;
  border-radius: var(--radius-md);
  
  /* Interaktion */
  transition: all 200ms ease;
}
```

### JavaScript

```javascript
// Verwenden Sie Module
import { function } from "./module.js";

// Verwenden Sie Konstanten für Konfigurationen
const CONFIG = {
  timeout: 5000,
  retries: 3
};

// Schreiben Sie aussagekräftige Funktionsnamen
function handleUserLogin(email, password) {
  // Implementierung
}

// Verwenden Sie async/await statt Callbacks
async function fetchData() {
  try {
    const data = await fetch("/api/data");
    return await data.json();
  } catch (error) {
    console.error("Fehler beim Abrufen:", error);
  }
}
```

## Testing

Testen Sie Ihre Änderungen gründlich:

1. **Lokal testen**: Starten Sie einen lokalen Server
2. **Verschiedene Browser** testen (Chrome, Firefox, Safari, Edge)
3. **Responsive Design** überprüfen (Mobile, Tablet, Desktop)
4. **Verschiedene Rollen** testen (HOST, ADMIN, etc.)

## Dokumentation

- Aktualisieren Sie die **README.md**, wenn Sie neue Features hinzufügen
- Dokumentieren Sie komplexe Funktionen mit JSDoc-Kommentaren
- Aktualisieren Sie diese Datei (CONTRIBUTING.md), wenn nötig

## Git-Richtlinien

### Commit-Messages

Verwenden Sie aussagekräftige Commit-Messages:

```
git commit -m "Add: Neue Funktion beschreiben"
git commit -m "Fix: Bug beschreiben"
git commit -m "Docs: Dokumentation aktualisieren"
git commit -m "Style: Code-Formatierung"
git commit -m "Refactor: Code verbessern"
```

### Branch-Naming

- `feature/feature-name` - Neue Features
- `fix/bug-name` - Bug-Fixes
- `docs/description` - Dokumentation
- `style/description` - Style-Änderungen

## Review-Prozess

1. Ein Maintainer überprüft Ihren Pull Request
2. Feedback wird bereitgestellt
3. Nehmen Sie die Änderungen vor
4. Der PR wird gmerged

## Sicherheit

- **Niemals** Firebase-Credentials committen
- Verwenden Sie `.gitignore` für sensible Dateien
- Überprüfen Sie Ihre Commits vor dem Push

## Fragen?

Erstellen Sie ein Issue oder kontaktieren Sie uns über:
- GitHub Issues
- GitHub Discussions

Vielen Dank für Ihren Beitrag! 🔥
