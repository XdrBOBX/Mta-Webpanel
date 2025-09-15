# MTA:SA Webpanel (Classic, 2008–2025)

Ein simples, einzelfiliges Webpanel für **MTA:SA** – Dark UI (schwarz/blau) mit **weißen Buttons**, 
inkl. Demo-Daten (localStorage) und optionaler Anbindung per HTTP-API.

- Tabs: **Übersicht** • **Fahrzeuge** (Kennzeichen) • **Finanzen** (Einnahmen/Ausgaben) • **Einstellungen**
- Demo-Modus: läuft komplett im Browser
- API-Modus: konfigurierbare Base URL + Owner/Spieler-ID

> © **2008–2025 THCBOB**  
> Open Source • Kostenlos für die Community

## Schnellstart
1. `index.html` herunterladen und lokal im Browser öffnen (Demo-Modus).
2. Für API-Modus in **Einstellungen**:
   - Modus: **API (HTTP)**
   - **API Base URL** setzen (z. B. `https://panel.dein-server.tld`)
   - **Owner/Spieler-ID** setzen (z. B. `steam:110000...`)

### Erwartete Endpoints (Beispiel)
- `GET  /api/ping` → `{ ok: true }`
- `GET  /api/overview?ownerId=<id>` → `{ playerName, cash, bank, assets, liabilities }`
- `GET  /api/vehicles?ownerId=<id>` → `[ { id, plate, model, color } ]`
- `POST /api/vehicles` (JSON) → `{ plate, model, color, ownerId }`
- `GET  /api/transactions?ownerId=<id>` → `[ { id, type, amount, category, note, ts } ]`
- `POST /api/transactions` (JSON) → `{ type, amount, category, note, ownerId }`

> **CORS:** Erlaubt die Origin der Webpanel-Domain am Server.

## Beispiel-Server
Unter `server-example/server.js` liegt ein kleines Node/Express-Beispiel (Dev-用途).  
Start: `npm i express cors && node server-example/server.js`

## Lizenz
MIT – siehe [LICENSE](./LICENSE).
