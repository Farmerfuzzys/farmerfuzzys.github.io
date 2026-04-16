# Deployment Guide | Fire Dispatcher

Dieses Dokument erklärt, wie Sie Fire Dispatcher auf verschiedenen Plattformen bereitstellen.

## Table of Contents

- [Firebase Hosting](#firebase-hosting)
- [GitHub Pages](#github-pages)
- [Vercel](#vercel)
- [Netlify](#netlify)
- [Selbstgehosteter Server](#selbstgehosteter-server)
- [Docker](#docker)

---

## Firebase Hosting

**Empfohlen**: Firebase Hosting ist die beste Option, wenn Sie auch Firebase für Ihre Anwendung verwenden.

### Setup

1. **Firebase CLI installieren**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Mit Firebase anmelden**:
   ```bash
   firebase login
   ```

3. **Projekt initialisieren**:
   ```bash
   firebase init hosting
   ```

4. **Konfiguration anpassen** (`firebase.json`):
   ```json
   {
     "hosting": {
       "public": ".",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**",
         ".gitignore"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

5. **Deployen**:
   ```bash
   firebase deploy
   ```

Ihre Anwendung ist dann unter `https://ihr-projekt.firebaseapp.com` verfügbar.

---

## GitHub Pages

**Kostenlos**: Ideal für öffentliche Repositories.

### Setup

1. **Repository auf GitHub erstellen**
2. **Settings → Pages**
3. Wählen Sie `main` branch als Quelle
4. Warten Sie, bis der Deployment abgeschlossen ist

Ihre Anwendung ist dann unter `https://ihr-username.github.io/fire-dispatcher` verfügbar.

### Mit Custom Domain

1. Gehen Sie zu **Settings → Pages**
2. Geben Sie Ihren Domain-Namen ein
3. Erstellen Sie einen CNAME-Record bei Ihrem Domain-Provider

---

## Vercel

**Schnell und einfach**: Perfekt für statische Websites.

### Setup

1. **Vercel CLI installieren**:
   ```bash
   npm install -g vercel
   ```

2. **Einloggen**:
   ```bash
   vercel login
   ```

3. **Deployen**:
   ```bash
   vercel
   ```

4. Beantworten Sie die Fragen während des Setups
5. Fertig! Vercel gibt Ihnen eine URL

### Mit Git Integration

1. Verknüpfen Sie Ihr GitHub/GitLab Repository mit Vercel
2. Änderungen werden automatisch bereitgestellt

---

## Netlify

**Benutzerfreundlich**: Einfache GUI und automatische Deployments.

### Setup

1. **GitHub-Repo mit Netlify verbinden**:
   - Besuchen Sie https://app.netlify.com
   - Klicken Sie auf "New site from Git"
   - Wählen Sie Ihr Repository

2. **Build-Einstellungen**:
   - Build command: (leer lassen)
   - Publish directory: `.` (oder root)

3. **Deployen**: Netlify führt den Deployment automatisch aus

4. Die Site ist dann unter `your-site.netlify.app` verfügbar

---

## Selbstgehosteter Server

Für Unternehmen oder Custom-Lösungen.

### mit Apache

1. **Dateien in das Web-Root-Verzeichnis kopieren**:
   ```bash
   sudo cp -r * /var/www/html/fire-dispatcher/
   ```

2. **.htaccess für URL-Rewriting** (falls nicht vorhanden):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /fire-dispatcher/
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /fire-dispatcher/index.html [L]
   </IfModule>
   ```

3. **Neustarten**:
   ```bash
   sudo systemctl restart apache2
   ```

### mit Nginx

1. **Dateien in das Web-Root-Verzeichnis kopieren**:
   ```bash
   sudo cp -r * /var/www/fire-dispatcher/
   ```

2. **Nginx-Konfiguration** (`/etc/nginx/sites-available/fire-dispatcher`):
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;
     root /var/www/fire-dispatcher;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
     
     # Cache-Einstellungen
     location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
       expires 7d;
       add_header Cache-Control "public, immutable";
     }
   }
   ```

3. **Aktivieren**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/fire-dispatcher /etc/nginx/sites-enabled/
   sudo systemctl restart nginx
   ```

### mit Node.js/Express

```bash
npm install express
```

```javascript
// server.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
```

Starten Sie mit: `node server.js`

---

## Docker

Für containerisierte Deployments.

### Dockerfile erstellen

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "-p", "8080", "--gzip"]
```

### Docker-Image bauen und ausführen

```bash
# Image bauen
docker build -t fire-dispatcher .

# Container starten
docker run -p 8080:8080 fire-dispatcher
```

Die Anwendung ist dann unter `http://localhost:8080` verfügbar.

### Mit Docker Compose

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:8080"
    environment:
      - NODE_ENV=production
```

```bash
docker-compose up
```

---

## HTTPS konfigurieren

Wichtig für Produktion!

### mit Let's Encrypt (kostenlos)

1. **Certbot installieren**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Zertifikat erstellen**:
   ```bash
   sudo certbot certonly --nginx -d your-domain.com
   ```

3. **Nginx konfigurieren**:
   ```nginx
   server {
     listen 443 ssl http2;
     server_name your-domain.com;
     
     ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
     
     # ... rest der Konfiguration
   }
   
   # HTTP zu HTTPS weiterleiten
   server {
     listen 80;
     server_name your-domain.com;
     return 301 https://$server_name$request_uri;
   }
   ```

---

## Performance-Optimierung

### 1. Caching aktivieren

Stellen Sie sicher, dass statische Dateien gecacht werden:

```nginx
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
  expires 30d;
  add_header Cache-Control "public, immutable";
}
```

### 2. GZIP-Kompression

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1024;
```

### 3. CDN verwenden

- CloudFlare (kostenlos)
- AWS CloudFront
- Fastly

---

## Monitoring & Logging

### Google Analytics

Fügen Sie zu `index.html` hinzu:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry (Error Tracking)

```html
<script src="https://browser.sentry-cdn.com/6.x.x/bundle.min.js"></script>
<script>
  Sentry.init({ dsn: 'YOUR_SENTRY_DSN' });
</script>
```

---

## Sicherheit-Checkliste

- [ ] HTTPS aktivieren
- [ ] CORS richtig konfigurieren
- [ ] Firebase-Sicherheitsregeln überprüfen
- [ ] Sensible Daten nicht in Git committen
- [ ] Regelmäßige Backups erstellen
- [ ] Monitoring einrichten

---

## Troubleshooting

### "404 Not Found" auf Subpages

**Grund**: Router-Umleitungen nicht konfiguriert

**Lösung**: 
- Alle Requests auf `index.html` umleiten
- Siehe oben für Nginx/Apache/Firebase-Konfigurationen

### "CORS-Fehler"

**Grund**: Firebase CORS nicht konfiguriert

**Lösung**:
- Überprüfen Sie Firebase-Sicherheitsregeln
- Stellen Sie sicher, dass Ihre Domain autorisiert ist

### "Langsame Ladezeiten"

**Grund**: Fehlende Optimierungen

**Lösung**:
- Caching aktivieren
- CDN verwenden
- GZIP-Kompression aktivieren

---

## Support

Bei Fragen oder Problemen erstellen Sie bitte ein [Issue](https://github.com/jaemy/fire-dispatcher/issues).

---

**Zuletzt aktualisiert**: 2026-04-16
