# Fire Dispatcher

Eine moderne Webanwendung zur Verwaltung von Feuerwehr-Einsätzen mit Echtzeit-Status-Tracking und rollenbasiertem Zugriff.

## Features

- 🚒 **Einsatzverwaltung**: Erstellen und verwalten Sie Einsätze mit detaillierten Informationen
- 👥 **Rollenbasierte Zugriffskontrolle**: HOST, ADMIN, WEHRLEITER, DISPONENT, EINSATZKRAFT, ALARM DISPLAY
- 📊 **Dashboard**: Echtzeit-Übersicht aller aktiven Einsätze und Fahrzeugstatus
- 🚗 **Fahrzeugverwaltung**: Verwalten Sie Fahrzeuge und deren Einsatzstatus
- 📱 **Responsive Design**: Funktioniert auf Desktop, Tablet und Smartphone
- 🔐 **Firebase-Integration**: Sichere Authentifizierung und Datenspeicherung

## Voraussetzungen

- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Firebase-Projekt (kostenlos unter https://firebase.google.com)
- Git (zum Klonen des Repositories)

## Installation

### 1. Repository klonen

```bash
git clone https://github.com/jaemy/fire-dispatcher.git
cd fire-dispatcher
```

### 2. Firebase-Projekt erstellen

1. Gehen Sie zu [Firebase Console](https://console.firebase.google.com)
2. Klicken Sie auf "Projekt erstellen" und folgen Sie den Anweisungen
3. Benennen Sie das Projekt (z.B. "Fire Dispatcher")

### 3. Firebase konfigurieren

#### Authentifizierung aktivieren

1. Gehen Sie zu **Build** → **Authentication**
2. Klicken Sie auf **Authentifizierungsmethode erstellen**
3. Wählen Sie **Email/Passwort** und aktivieren Sie es

#### Firestore-Datenbank erstellen

1. Gehen Sie zu **Build** → **Firestore Database**
2. Klicken Sie auf **Datenbank erstellen**
3. Wählen Sie:
   - Standort: Deutschland (oder Ihren bevorzugten Standort)
   - Modus: **Test-Modus** (zum Entwickeln)
4. Klicken Sie auf **Erstellen**

#### Sicherheitsregeln (Test-Modus)

Die Test-Mode-Regeln sind:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2026, 12, 31);
    }
  }
}
```

⚠️ **Wichtig**: Test-Modus sollte nur für Entwicklung verwendet werden. Für die Produktion erstellen Sie geeignete Sicherheitsregeln.

### 4. Firebase-Konfiguration hinzufügen

1. Gehen Sie in der Firebase Console zu **Projekteinstellungen** (Zahnrad-Symbol)
2. Scrollen Sie zu "Web-Apps"
3. Klicken Sie auf die Web-App und kopieren Sie die Konfiguration
4. Ersetzen Sie die Credentials in `firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "1:YOUR_APP_ID:web:YOUR_WEB_ID"
};
```

### 5. Benutzer in Firebase erstellen

1. Gehen Sie zu **Build** → **Authentication**
2. Klicken Sie auf den Tab **Nutzer**
3. Klicken Sie auf **Nutzer erstellen**
4. Geben Sie ein:
   - Email: `username@example.com`
   - Passwort: Ein sicheres Passwort
5. Wiederholen Sie dies für alle Benutzer

### 6. Benutzerrollen in Firestore hinzufügen

1. Gehen Sie zu **Firestore Database**
2. Erstellen Sie eine Collection namens `users`
3. Erstellen Sie für jeden Benutzer ein Dokument:
   - **Document ID**: Kopieren Sie die UID des Benutzers aus dem Authentication-Tab
   - **Felder**:
     ```
     role: "DISPONENT"  (oder andere Rolle: HOST, ADMIN, WEHRLEITER, EINSATZKRAFT, ALARM DISPLAY)
     stationId: "station-1"
     ```

### 7. Lokal testen

Verwenden Sie einen lokalen Server (z.B. mit VS Code Live Server Extension oder Python):

```bash
# Mit Python 3
python -m http.server 8000

# Oder mit Python 2
python -m SimpleHTTPServer 8000
```

Öffnen Sie dann `http://localhost:8000` in Ihrem Browser.

## Benutzerrollen

| Rolle | Berechtigung |
|-------|-------------|
| **HOST** | Globale Systemadministration, verwaltet alle Admins |
| **ADMIN** | Verwaltet Wehren und deren Disponentenstellen |
| **WEHRLEITER** | Verwaltet Fahrzeuge und Personal seiner Wehr |
| **DISPONENT** | Erstellt Einsätze und verwaltet Fahrzeugstatus |
| **EINSATZKRAFT** | Sieht nur Einsatzbefehle und Echtzeit-Informationen |
| **ALARM DISPLAY** | Zeigt nur Alarme und aktive Einsätze an |

## Projektstruktur

```
fire-dispatcher/
├── index.html           # Login-Seite
├── dashboard.html       # Hauptdashboard
├── leitstelle.html      # Einsatzleitung
├── verwaltung.html      # Verwaltungspanel
├── app.js               # Hauptanwendungslogik
├── firebase.js          # Firebase-Konfiguration
├── style.css            # Styling
├── .gitignore           # Git-Ignore-Datei
└── README.md            # Diese Datei
```

## Seiten

- **index.html**: Login-Authentifizierung
- **dashboard.html**: Echtzeit-Übersicht und Status-Dashboard
- **leitstelle.html**: Einsatzmanagement und Fahrzeugverwaltung
- **display.html**: Alarmanzeige für Leitstelle
- **status.html**: Fahrzeug-Statushistorie
- **verwaltung.html**: Benutzer- und Stationsverwaltung
- **settings.html**: Benutzereinstellungen

## Deployment

### Mit Firebase Hosting

```bash
# Firebase CLI installieren
npm install -g firebase-tools

# Mit Firebase einloggen
firebase login

# Projekt initialisieren
firebase init hosting

# Deployen
firebase deploy
```

### Mit anderen Hosting-Diensten

- GitHub Pages
- Vercel
- Netlify
- Heroku

## Entwicklung

### Lokale Änderungen testen

1. Starten Sie einen lokalen Server (siehe Abschnitt "Lokal testen")
2. Öffnen Sie die Anwendung im Browser
3. Testen Sie die Funktionalität
4. Committen Sie Ihre Änderungen

### Sicherheit

- **Niemals** commiten Sie `firebase.js` mit echten Credentials
- Verwenden Sie nur die Konfiguration des Entwicklungs-Projekts
- Implementieren Sie Sicherheitsregeln in Firestore für Produktion
- Aktivieren Sie 2FA für Ihre Firebase-Projekte

## Fehlerbehandlung

### "Login fehlgeschlagen"

- Überprüfen Sie, dass der Benutzer in Firebase erstellt wurde
- Verifizieren Sie Email und Passwort
- Prüfen Sie die Browser-Konsole auf Fehler (F12)

### "Keine Rollen vorhanden"

- Stellen Sie sicher, dass das Benutzer-Dokument in Firestore existiert
- Überprüfen Sie die Korrektheit der User-UID

### Fehler beim Laden von Daten

- Überprüfen Sie die Firestore-Sicherheitsregeln
- Stellen Sie sicher, dass die Authentifizierung funktioniert
- Prüfen Sie die Netzwerk-Registerkarte in den Entwickler-Tools (F12)

## Support & Kontakt

Für Fragen oder Probleme erstellen Sie bitte ein [Issue](https://github.com/jaemy/fire-dispatcher/issues) im Repository.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen finden Sie in der [LICENSE](LICENSE)-Datei.

## Beitragen

Beiträge sind willkommen! Bitte:

1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen Sie zum Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

## Änderungsprotokoll

### Version 1.0.0 (2026-04-16)

- ✅ Initiale Veröffentlichung
- ✅ Demo-Modi entfernt
- ✅ Sichere Firebase-Integration
- ✅ Rollensystem implementiert
- ✅ Responsive UI
- ✅ Echtzeit-Synchronisation

---

**Zuletzt aktualisiert**: 2026-04-16
