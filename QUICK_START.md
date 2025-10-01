# 🚀 Guida Rapida - Dashboard Landing Page

## Come Aprire il Progetto

### Opzione 1: Apertura Diretta (Senza Server)
```bash
# Apri il file direttamente nel browser
open src/index.html
# oppure
xdg-open src/index.html  # Linux
```

⚠️ **Nota**: Alcune funzionalità potrebbero non funzionare correttamente senza un server web locale.

### Opzione 2: Server Live (Raccomandato)

#### Con npm
```bash
# Installa le dipendenze (solo la prima volta)
npm install

# Avvia il server di sviluppo
npm run dev

# Il browser si aprirà automaticamente su http://localhost:8080
```

#### Con Python (se npm non è disponibile)
```bash
# Python 3
cd src
python -m http.server 8080

# Python 2
cd src
python -m SimpleHTTPServer 8080

# Apri manualmente: http://localhost:8080
```

#### Con PHP
```bash
cd src
php -S localhost:8080

# Apri: http://localhost:8080
```

#### Con VS Code
1. Installa l'estensione "Live Server"
2. Click destro su `src/index.html`
3. Seleziona "Open with Live Server"

## 📂 Struttura File

```
src/
├── index.html          ← APRI QUESTO FILE
├── styles/             ← Tutti i CSS
├── scripts/            ← JavaScript
└── assets/             ← Risorse
```

## ✅ Checklist Verifica

- [ ] Il file `src/index.html` esiste
- [ ] I file CSS in `src/styles/` sono presenti
- [ ] I file JS in `src/scripts/` sono presenti
- [ ] Le dashboard esistenti sono nella cartella superiore
- [ ] Il browser supporta CSS Grid e Flexbox

## 🔗 Link Dashboard Esistenti

I link alle dashboard sono relativi e puntano a:
```
../pensioni.html
../mercato_del_lavoro.html
../utenza.html
../ammortizzatori.html
... etc
```

Assicurati che questi file esistano nella directory padre.

## 🐛 Troubleshooting

### Le dashboard non si aprono
- Verifica che i file HTML delle dashboard esistano nella directory padre
- Controlla i percorsi relativi nei link

### Le animazioni non funzionano
- Verifica che JavaScript sia abilitato nel browser
- Controlla la console del browser per eventuali errori

### Gli stili non vengono applicati
- Controlla che tutti i file CSS siano caricati
- Verifica il percorso dei file nel tag `<link>` di index.html
- Apri Developer Tools (F12) per vedere eventuali errori di caricamento

### I font non caricano
- Verifica la connessione internet (i font vengono da Google Fonts)
- Controlla che il firewall non blocchi fonts.googleapis.com

## 📱 Test Responsive

Per testare su diverse dimensioni:
1. Apri Developer Tools (F12)
2. Click sull'icona del dispositivo mobile
3. Seleziona diverse dimensioni dal menu

## 🎨 Personalizzazione

### Modificare Colori
Edita `src/styles/variables.css` - sezione `/* Colors */`

### Modificare Font
Edita il link Google Fonts in `src/index.html` e aggiorna `--font-family` in `variables.css`

### Aggiungere Dashboard
1. Aggiungi una nuova `<article class="dashboard-card">` in `index.html`
2. Personalizza icona, titolo, descrizione e link
3. Scegli un `data-category` per il colore dell'icona

## 📧 Supporto

Per assistenza tecnica:
- Consulta il README.md principale
- Verifica la documentazione INPS
- Contatta il team di sviluppo

---

**Buon lavoro! 🎉**
