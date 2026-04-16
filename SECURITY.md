# Sicherheit | Fire Dispatcher

Dieses Dokument beschreibt die Sicherheitsaspekte der Fire Dispatcher Anwendung und Best Practices.

## Übersicht

Fire Dispatcher ist eine Web-Anwendung mit folgenden Sicherheitsfeatures:

- ✅ Firebase-Authentifizierung (Email/Passwort)
- ✅ Rollenbasierte Zugriffskontrolle (RBAC)
- ✅ HTTPS-Verschlüsselung
- ✅ Firestore-Sicherheitsregeln
- ✅ Sichere API-Integration

## Authentifizierung

### Firebase Authentication

Die Anwendung verwendet Firebase Authentication für sichere Benutzer-Verwaltung:

```javascript
// Sicher: Firebase verwaltet Passwort-Hashing
await signInWithEmailAndPassword(auth, email, password);
```

### Best Practices

1. **Starke Passwörter**: Mindestens 8 Zeichen, Groß-/Kleinschreibung, Zahlen, Sonderzeichen
2. **2FA**: Aktivieren Sie 2-Faktor-Authentifizierung für Admin-Konten
3. **Passwort-Reset**: Regelmäßiges Ändern von Passwörtern empfohlen
4. **Session-Timeout**: Automatischer Logout nach Inaktivität (zu implementieren)

## Sicherheitsregeln (Firestore)

### Test-Modus (NICHT für Produktion!)

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

⚠️ **Warnung**: Test-Modus erlaubt allen unbegrenzten Zugriff!

### Produktions-Regeln

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users Collection - Benutzer können nur ihre eigenen Daten lesen
    match /users/{userId} {
      allow read: if request.auth.uid == userId;
      allow write: if request.auth.uid == userId && 
                      request.resource.data.role in ['HOST', 'ADMIN', 'WEHRLEITER', 'DISPONENT', 'EINSATZKRAFT', 'ALARM DISPLAY'];
    }
    
    // Alarms Collection - Basierend auf Station/Rolle
    match /alarms/{alarmId} {
      allow read: if request.auth != null;
      allow write: if hasRole(['HOST', 'ADMIN', 'WEHRLEITER', 'DISPONENT']);
    }
    
    // Vehicles Collection
    match /vehicles/{vehicleId} {
      allow read: if request.auth != null;
      allow write: if hasRole(['HOST', 'ADMIN', 'WEHRLEITER']);
    }
    
    // Helper-Funktion
    function hasRole(roles) {
      let user = get(/databases/$(database)/documents/users/$(request.auth.uid));
      return user.data.role in roles;
    }
  }
}
```

## Umgebungsvariablen & Secrets

### Firebase Config

**NIEMALS** committen Sie Firebase-Konfiguration mit echten Keys!

```javascript
// ❌ FALSCH - in Git:
const firebaseConfig = {
  apiKey: "AIzaSyDiYOJWP4XMQRJ6b-RfJp6Aqxis7E-uA30", // Sichtbar!
  ...
};

// ✅ RICHTIG - in .gitignore:
// firebase-config.js ist in .gitignore
// Users müssen ihre eigene config hinzufügen
```

### .gitignore

Stellen Sie sicher, dass diese Dateien ignoriert werden:

```
firebase-config.js
.env
.env.local
.env.*.local
secrets/
```

## Datenschutz

### GDPR/DSGVO-Compliance

1. **Datenschutzerklärung**: Veröffentlichen Sie eine Datenschutzerklärung
2. **Nutzerrechte**: Implementieren Sie Export/Lösch-Funktionen
3. **Cookies**: Informieren Sie über Verwendung von Cookies
4. **Firebase-Bedingungen**: Akzeptieren Sie Google Firebase Terms

### Datenverschlüsselung

- **In Transit**: HTTPS/TLS 1.2+ (automatisch mit Firebase Hosting)
- **At Rest**: Firebase verschlüsselt Daten standardmäßig

## API-Sicherheit

### CORS-Konfiguration

Firebase verwaltet CORS automatisch. Für Custom-APIs:

```javascript
// ✅ RICHTIG - nur vertraute Domains
const allowedOrigins = [
  'https://fire-dispatcher.example.com',
  'https://admin.fire-dispatcher.example.com'
];

app.use((req, res, next) => {
  if (allowedOrigins.includes(req.headers.origin)) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  }
  next();
});
```

### Content Security Policy

Fügen Sie zu `index.html` hinzu:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' https://www.gstatic.com/firebasejs/; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data:; 
               font-src 'self' data:">
```

## Deployment-Sicherheit

### Production Checklist

- [ ] HTTPS aktiviert
- [ ] Firebase-Sicherheitsregeln konfiguriert
- [ ] Secrets aus Code entfernt
- [ ] 2FA für Admin-Konten aktiviert
- [ ] Monitoring & Logging eingerichtet
- [ ] Regelmäßige Backups erstellt
- [ ] Security Headers konfiguriert
- [ ] CORS richtig eingestellt

### Security Headers

```nginx
# Nginx Example
add_header X-Content-Type-Options "nosniff";
add_header X-Frame-Options "SAMEORIGIN";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

## Monitoring & Incident Response

### Firebase Console Monitoring

1. **Authentication**: Überwachen Sie verdächtige Login-Versuche
2. **Firestore**: Prüfen Sie Quota und Performance
3. **Hosting**: Überprüfen Sie Zugriffslogs

### Logging-Setup

```javascript
// Beispiel: Verdächtige Aktivitäten loggen
function logSecurityEvent(eventType, details) {
  console.log(`[SECURITY] ${eventType}:`, details);
  // Senden Sie zu Firebase Cloud Logging oder externem Service
}
```

## Häufige Sicherheitsprobleme

### 1. Hardcoded Secrets

❌ **Falsch**:
```javascript
const API_KEY = "sk_live_abc123..."; // Sichtbar im Code
```

✅ **Richtig**:
```javascript
const API_KEY = process.env.API_KEY; // Aus Umgebung
```

### 2. Cross-Site Scripting (XSS)

❌ **Unsicher**:
```javascript
document.innerHTML = userInput; // XSS-Anfälligkeit!
```

✅ **Sicher**:
```javascript
const el = document.createElement('div');
el.textContent = userInput; // Automatisch escaped
```

### 3. Cross-Site Request Forgery (CSRF)

Firebase verwaltet dies automatisch mit Sessions.

### 4. Insufficient Access Control

❌ **Unsicher**:
```firestore
match /alarms/{alarmId} {
  allow read, write: if true; // Alle können lesen/schreiben!
}
```

✅ **Sicher**:
```firestore
match /alarms/{alarmId} {
  allow read: if hasValidRole();
  allow write: if isAdmin() && hasValidRole();
}
```

## Penetrations-Testing

### Tools & Best Practices

1. **OWASP ZAP**: Automatisierte Sicherheits-Scans
2. **Burp Suite**: Manuelle Penetrations-Tests
3. **Regular Audits**: Mindestens jährlich

### Testing-Checkliste

- [ ] XSS-Anfälligkeit getestet
- [ ] SQL-Injection getestet (nicht relevant für Firebase, aber Custom-APIs)
- [ ] Authentication Bypass getestet
- [ ] Privilege Escalation getestet
- [ ] Sensitive Data Exposure getestet

## Third-Party Abhängigkeiten

### Firebase-Sicherheit

Firebase ist Google-getrieben und erfüllt:
- ✅ ISO 27001
- ✅ SOC 2 Type II
- ✅ GDPR-konform

### Regelmäßige Updates

Überprüfen Sie regelmäßig auf Firebase SDK Updates:

```bash
# Überprüfen Sie Browser-Konsole auf Warnungen
# Firebase SDK Updates sind transparent
```

## Incident Response Plan

### Sicherheitsverletzung

1. **Sofort**: Betroffene Benutzer benachrichtigen
2. **Innerhalb 1h**: Problemursache identifizieren
3. **Innerhalb 24h**: Behördliche Benachrichtigung (falls erforderlich)
4. **Fortlaufend**: Logging und Monitoring erhöhen

### Breached Credentials

```javascript
// 1. Passwort erzwingen zurückzusetzen
await admin.auth().updateUser(uid, { password: null });

// 2. Sessions invalidieren
// 3. Verdächtige Aktivitäten überprüfen
```

## Compliance

### Relevante Standards

- **GDPR**: Datenschutz-Grundverordnung (EU)
- **CCPA**: California Consumer Privacy Act (USA)
- **HIPAA**: Health Insurance Portability (falls Gesundheitsdaten)
- **PCI DSS**: Zahlungskartenindustrie-Standard (falls Zahlungen)

### Auditing

Führen Sie regelmäßige Sicherheits-Audits durch:

```bash
# Überprüfen Sie Git-History auf Secrets
git log --all --oneline -- "*.js" | grep -i secret

# Überprüfen Sie .gitignore
cat .gitignore | grep -v "^#"
```

## Support & Meldung von Sicherheitsproblemen

### Sicherheitslücken berichten

⚠️ **NICHT** als öffentliches Issue melden!

Kontaktieren Sie stattdessen privat:
- GitHub Security Advisory
- Email an [security@example.com]

## Ressourcen

- [Firebase Security Best Practices](https://firebase.google.com/docs/auth/common-problems)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Google Cloud Security Best Practices](https://cloud.google.com/security/best-practices)

---

**Version**: 1.0  
**Zuletzt aktualisiert**: 2026-04-16

⚠️ Sicherheit ist ein fortlaufender Prozess. Überprüfen Sie regelmäßig auf Updates und Verbesserungen.
