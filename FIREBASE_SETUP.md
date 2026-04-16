# Firebase Setup Checkliste für Fire Dispatcher

**Projekt**: fire-dispatcher-7aaba  
**Status**: 🟡 Teilweise eingerichtet (nur Config)

---

## 📋 Schritt-für-Schritt Anleitung

### 1️⃣ Authentication einrichten

**Gehen Sie zu**: [Firebase Console](https://console.firebase.google.com) → Wählen Sie `fire-dispatcher-7aaba`

1. Klicken Sie auf **Build** (linke Seite)
2. Wählen Sie **Authentication**
3. Klicken Sie auf **Get Started** oder **Authentifizierungsmethode erstellen**
4. Aktivieren Sie: **Email/Passwort**
   - ☑️ Klicken Sie auf "Email/Passwort"
   - ☑️ Aktivieren Sie beide Optionen:
     - "Email/Passwort"
     - "Email Link (Passwortlos anmelden)"
   - ☑️ Klicken Sie **Speichern**

✅ **Fertig**: Authentication ist aktiv

---

### 2️⃣ Firestore Database einrichten

1. Gehen Sie zu **Build** → **Firestore Database**
2. Klicken Sie **Database erstellen**
3. Wählen Sie:
   - **Standort**: `europe-west1` (Frankfurt, Deutschland)
   - **Modus**: `Im Test-Modus starten`
4. Klicken Sie **Erstellen**

⏳ *Warten Sie 1-2 Minuten...*

✅ **Fertig**: Firestore ist aktiv

---

### 3️⃣ Firestore-Sicherheitsregeln einstellen

⚠️ **WICHTIG**: Standard Test-Modus läuft nur 30 Tage!

1. In der Firestore Console klicken Sie auf den **Rules**-Tab
2. Ersetzen Sie ALLES mit diesen Regeln:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Allow users to read/write their own data
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow write: if request.auth.uid == userId;
    }
    
    // Allow all authenticated users to read/write alarms
    match /alarms/{alarmId} {
      allow read, write: if request.auth != null;
    }
    
    // Allow all authenticated users to read/write vehicles
    match /vehicles/{vehicleId} {
      allow read, write: if request.auth != null;
    }
    
    // Allow all authenticated users to read/write groups
    match /groups/{groupId} {
      allow read, write: if request.auth != null;
    }
    
    // Allow all authenticated users to read news
    match /news/{newsId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    
    // Allow all authenticated users to read/write status history
    match /statusHistory/{entryId} {
      allow read, write: if request.auth != null;
    }
    
    // Allow all authenticated users to read/write stations
    match /stations/{stationId} {
      allow read, write: if request.auth != null;
    }
    
    // Allow all authenticated users to read/write accounts
    match /accounts/{accountId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. Klicken Sie **Veröffentlichen**

✅ **Fertig**: Regeln sind aktiv

---

### 4️⃣ Erste Benutzer erstellen

1. Gehen Sie zu **Build** → **Authentication**
2. Klicken Sie auf den **Users**-Tab
3. Klicken Sie **Nutzer erstellen**

**Erstellen Sie diese Test-Benutzer**:

#### Benutzer 1: HOST (Admin)
- **Email**: `admin@fire-dispatcher.local`
- **Passwort**: `Admin123!@#`
- Kopieren Sie die **UID** (erscheint nach Erstellen)

#### Benutzer 2: DISPONENT
- **Email**: `disponent@fire-dispatcher.local`
- **Passwort**: `Disp123!@#`
- UID kopieren

#### Benutzer 3: EINSATZKRAFT
- **Email**: `fahrzeug@fire-dispatcher.local`
- **Passwort**: `Fz123!@#`
- UID kopieren

✅ **Fertig**: Test-Benutzer erstellt

---

### 5️⃣ Benutzer-Rollen in Firestore hinzufügen

1. Gehen Sie zu **Firestore Database** → **Daten**
2. Erstellen Sie eine neue **Collection**: `users`
3. Klicken Sie **Dokument hinzufügen**

**Für den HOST-Benutzer**:
- **Document ID**: `<PASTE_UID_VON_ADMIN_BENUTZER>`
- Felder:
  ```
  role: "HOST"
  stationId: null
  name: "Admin"
  email: "admin@fire-dispatcher.local"
  createdAt: (set server timestamp)
  ```

**Für den DISPONENT-Benutzer**:
- **Document ID**: `<PASTE_UID_VON_DISPONENT_BENUTZER>`
- Felder:
  ```
  role: "DISPONENT"
  stationId: "station-1"
  name: "Disponent"
  email: "disponent@fire-dispatcher.local"
  createdAt: (set server timestamp)
  ```

**Für den EINSATZKRAFT-Benutzer**:
- **Document ID**: `<PASTE_UID_VON_FAHRZEUG_BENUTZER>`
- Felder:
  ```
  role: "EINSATZKRAFT"
  stationId: "station-1"
  name: "Fahrzeug"
  email: "fahrzeug@fire-dispatcher.local"
  createdAt: (set server timestamp)
  ```

✅ **Fertig**: Rollen-Zuordnung eingerichtet

---

### 6️⃣ Initiale Daten hinzufügen (Optional aber empfohlen)

1. Gehen Sie zu **Firestore Database** → **Daten**
2. Erstellen Sie diese Collections (leer ist OK):
   - `stations` (Feuerwehr-Stationen)
   - `vehicles` (Fahrzeuge)
   - `alarms` (Einsätze)
   - `groups` (Gruppen)
   - `news` (Nachrichten)
   - `statusHistory` (Status-Verlauf)
   - `accounts` (Benutzerkonten)

**Beispiel: Station hinzufügen**
- Collection: `stations`
- Document ID: `station-1`
- Felder:
  ```
  id: "station-1"
  name: "Feuerwehr Erfurt-Mitte"
  code: "FF-ERF-MITTE"
  members: 0
  vehicleCount: 0
  logoDataUrl: ""
  alarmAutoClearSeconds: 300
  ownerAdminId: null
  createdAt: (server timestamp)
  ```

✅ **Optional aber empfohlen**: Initiale Daten erstellt

---

### 7️⃣ Realtime Database (optional)

Das Projekt hat auch eine **Realtime Database** aktiviert.

Falls Sie diese nutzen möchten, legen Sie diese Regeln fest:

1. Gehen Sie zu **Build** → **Realtime Database**
2. Klicken Sie auf **Rules**
3. Ersetzen Sie mit:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

Klicken Sie **Veröffentlichen**

✅ **Optional**: Realtime Database aktiv

---

## ✅ Komplette Checkliste

- [ ] **Authentication** aktiviert (Email/Passwort)
- [ ] **Firestore Database** erstellt (europe-west1)
- [ ] **Firestore Rules** eingestellt
- [ ] **3 Test-Benutzer** in Authentication erstellt
- [ ] **users Collection** in Firestore mit Rollen erstellt
- [ ] **3 Benutzer-Dokumente** mit Rollen hinzugefügt
- [ ] **Weitere Collections** erstellt (stations, vehicles, etc.)
- [ ] **Realtime Database Rules** eingestellt (optional)

---

## 🧪 Test der Einrichtung

### 1. Lokal testen:

```bash
# Terminal in Fire Dispatcher Ordner
python -m http.server 8000
```

Öffnen Sie dann: `http://localhost:8000`

### 2. Mit Test-Benutzer anmelden:

- **Email**: `admin@fire-dispatcher.local`
- **Passwort**: `Admin123!@#`

### 3. Falls Login fehlschlägt:

**Fehler "Login fehlgeschlagen"**
- ✓ Überprüfen Sie, dass Benutzer in Authentication existiert
- ✓ Überprüfen Sie Email/Passwort
- ✓ Öffnen Sie Browser-Konsole (F12) → Console → Fehler anschauen

**Fehler "Keine Rollen vorhanden"**
- ✓ Überprüfen Sie, dass `users` Collection in Firestore existiert
- ✓ Überprüfen Sie, dass Benutzer-Document mit korrekter UID existiert
- ✓ Überprüfen Sie, dass `role` Feld gesetzt ist

**Fehler "Permission denied"**
- ✓ Überprüfen Sie Firestore Rules
- ✓ Rules müssen `allow read, write: if request.auth != null;` haben

---

## 🔐 Für Produktion (später!)

Wenn alles funktioniert und Sie produktiv gehen:

1. **Firestore Rules** verschärfen:
   - Nur notwendige Daten freigeben
   - Rollen-basierte Zugriffe implementieren
   - Siehe SECURITY.md für detaillierte Regeln

2. **Test-Modus deaktivieren**:
   - Rules von `30 Tage Test` zu permanenten Regeln ändern

3. **Email-Verifikation** aktivieren:
   - Authentication → Settings → Email Verification

4. **2FA** für Admin-Konten aktivieren

5. **Backups** einrichten

---

## 📞 Falls Fehler auftreten:

### "Project not found"
- ✓ Aktualisieren Sie die Seite
- ✓ Überprüfen Sie, dass Projekt-ID korrekt ist

### "Firebase is not initialized"
- ✓ Überprüfen Sie, dass `firebase.js` vollständig ist
- ✓ Prüfen Sie Browser-Konsole auf Fehler
- ✓ Starten Sie den Server neu

### "PERMISSION_DENIED"
- ✓ Firestore Rules erlauben nicht den Zugriff
- ✓ Überprüfen Sie die Sicherheitsregeln oben
- ✓ Stellen Sie sicher `request.auth != null` in Regeln

---

## 📚 Nützliche Links

- [Firebase Console](https://console.firebase.google.com/)
- [Firestore Dokumentation](https://firebase.google.com/docs/firestore)
- [Authentication Dokumentation](https://firebase.google.com/docs/auth)
- [Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

---

## 🎯 Zusammenfassung

Nach dieser Checkliste können Sie:
- ✅ Mit Email/Passwort anmelden
- ✅ Benutzer-Rollen zuordnen
- ✅ Einsätze, Fahrzeuge und Status verwalten
- ✅ Alle Features der Anwendung nutzen

**Geschätzte Zeit**: 20-30 Minuten

---

**Status**: 🟢 Fertig (nach Abschluss aller Schritte)  
**Zuletzt aktualisiert**: 2026-04-16
