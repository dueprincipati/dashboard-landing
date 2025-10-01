# Dashboard Landing Page

## Overview
This project aims to create a modern and visually appealing landing page that serves as a central hub for accessing various existing dashboards. The landing page is designed to enhance user experience while maintaining stylistic consistency with the existing dashboards.

## Project Structure
The project is organized as follows:

# 🎯 Dashboard Landing Page INPS Pesaro e Urbino

## 📋 Panoramica

Landing page moderna e visivamente accattivante che funge da **hub centrale** per accedere alle diverse dashboard statistiche INPS della Provincia di Pesaro e Urbino. Il progetto mantiene coerenza stilistica con le dashboard esistenti ed eleva l'esperienza utente con elementi visivi d'impatto.

## ✨ Caratteristiche Principali

- **🎨 Design Moderno**: Interfaccia pulita e professionale con effetti glassmorphism e gradients
- **📱 Responsive**: Ottimizzato per desktop, tablet e smartphone
- **⚡ Performance**: Caricamento veloce e animazioni fluide
- **🎭 Animazioni**: Micro-interazioni, hover effects e transizioni smooth
- **🧭 Navigazione Intuitiva**: Accesso facile alle 10 dashboard tematiche
- **🎯 Accessibile**: Design inclusivo e user-friendly

## 🏗️ Struttura del Progetto

```
dashboard-landing/
├── src/
│   ├── index.html                      # Landing page principale
│   ├── styles/
│   │   ├── variables.css               # Variabili CSS (colori, spacing, font)
│   │   ├── main.css                    # Stili base e layout
│   │   ├── animations.css              # Animazioni e keyframes
│   │   └── components/
│   │       ├── hero.css                # Hero section con orb animations
│   │       ├── dashboard-grid.css      # Griglia dashboard cards
│   │       ├── features.css            # Sezione funzionalità
│   │       └── footer.css              # Footer multi-colonna
│   ├── scripts/
│   │   ├── main.js                     # Logica principale e setup
│   │   ├── router.js                   # Gestione navigazione
│   │   └── animations.js               # Controller animazioni scroll
│   ├── assets/
│   │   ├── icons/                      # Icone SVG custom
│   │   └── illustrations/              # Illustrazioni decorative
│   └── dashboards/                     # Link alle dashboard esistenti
├── package.json                        # Configurazione npm
└── README.md                           # Documentazione
```

## 📊 Dashboard Integrate

1. **Prestazioni Pensionistiche** - Pensioni liquidate e gestione previdenziale
2. **Mercato del Lavoro** - Assunzioni, cessazioni e contratti
3. **Relazioni con l'Utenza** - Canali di contatto e servizi
4. **Ammortizzatori Sociali** - CIG, NASpI e sostegno al reddito
5. **Prestazioni Assistenziali** - Invalidità e welfare sociale
6. **Contenzioso** - Ricorsi e controversie legali
7. **Entrate Contributive** - Flussi finanziari e contributi
8. **Organizzazione** - Struttura e risorse umane
9. **Panorama Socio-Demografico** - Analisi territoriale
10. **Patrimonio** - Gestione asset immobiliari

## 🚀 Setup e Installazione

### Prerequisiti
- Node.js >= 14.0.0
- npm >= 6.0.0

### Installazione

```bash
# 1. Clona il repository
git clone [repository-url]

# 2. Naviga nella cartella del progetto
cd dashboard-landing

# 3. Installa le dipendenze
npm install

# 4. Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:8080`

### Comandi Disponibili

```bash
npm run dev        # Avvia server di sviluppo (porta 8080)
npm start          # Alias per npm run dev
npm run preview    # Preview produzione (porta 3000)
npm run validate   # Valida HTML e CSS
```

## 🎨 Design System

### Palette Colori

```css
/* Background */
--bg-primary:   #0f172a  /* Slate 900 */
--bg-secondary: #1e293b  /* Slate 800 */
--bg-tertiary:  #334155  /* Slate 700 */

/* Text */
--text-primary:    #f8fafc  /* Slate 50 */
--text-secondary:  #cbd5e1  /* Slate 300 */
--text-tertiary:   #94a3b8  /* Slate 400 */

/* Accent Colors */
--accent-teal:   #2dd4bf  /* Teal 400 */
--accent-blue:   #3b82f6  /* Blue 500 */
--accent-green:  #10b981  /* Emerald 500 */
--accent-orange: #f59e0b  /* Amber 500 */
--accent-pink:   #ec4899  /* Pink 500 */
--accent-purple: #8b5cf6  /* Violet 500 */
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Sizes**: Sistema modulare da 12px a 60px
- **Font Weights**: 400 (Regular) → 900 (Black)

## 🎭 Animazioni e Interazioni

### Effetti Implementati

- **Hero Orbs**: Animazioni floating con gradients radiali
- **Card Hover**: Lift effect con glow e scale transforms
- **Scroll Animations**: Fade-in-up progressivo per sezioni
- **Ripple Effect**: Click feedback sulle card
- **Parallax**: Movimento parallasse sugli elementi decorativi
- **Number Counter**: Animazione conteggio per statistiche

### Performance

- **Intersection Observer API**: Animazioni scroll ottimizzate
- **RequestAnimationFrame**: Smooth 60fps animations
- **CSS Transforms**: Hardware-accelerated animations
- **Debounced Handlers**: Gestione eventi ottimizzata

## 🌐 Compatibilità Browser

- Chrome/Edge >= 90
- Firefox >= 88
- Safari >= 14
- Opera >= 76

## 📱 Responsive Breakpoints

```css
/* Mobile Small */
@media (max-width: 480px)

/* Mobile */
@media (max-width: 768px)

/* Tablet */
@media (max-width: 1024px)

/* Desktop */
@media (min-width: 1025px)
```

## 🔮 Roadmap Futura

### Fase 2 - Espansione
- [ ] Sezione "About" istituzionale
- [ ] Area documentazione tecnica
- [ ] Blog/News con aggiornamenti
- [ ] Sistema di ricerca integrato

### Fase 3 - Funzionalità Avanzate
- [ ] Area utente con login
- [ ] Dashboard personalizzate
- [ ] Esportazione dati (PDF, Excel)
- [ ] Notifiche real-time

### Fase 4 - Ottimizzazioni
- [ ] PWA (Progressive Web App)
- [ ] Dark/Light mode toggle
- [ ] Internazionalizzazione (i18n)
- [ ] Analytics e tracking

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura semantica
- **CSS3**: Styling moderno (Grid, Flexbox, Custom Properties)
- **JavaScript ES6+**: Logica applicativa
- **Inter Font**: Typography professionale
- **SVG Icons**: Icone vettoriali scalabili

## 📄 Licenza

MIT License - Vedi file LICENSE per dettagli

## 👥 Credits

- **Design & Development**: INPS Pesaro e Urbino
- **Font**: Inter by Rasmus Andersson
- **Icons**: Custom SVG icons
- **Data Source**: INPS Statistical Database

## 📧 Contatti

Per domande, suggerimenti o supporto:
- **Email**: info@inps.it
- **Website**: https://www.inps.it
- **Documentazione**: https://www.inps.it/it/it/inps-comunica/open-data.html

---

**Versione**: 1.0.0  
**Ultimo Aggiornamento**: Ottobre 2024  
**Stato**: ✅ Production Ready

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Open `src/index.html` in your web browser to view the landing page.

## Features
- A responsive design that adapts to various screen sizes.
- Smooth animations and micro-interactions for an enhanced user experience.
- Clear navigation to access existing dashboards.
- A visually appealing hero section and feature highlights.

## Future Enhancements
The project is designed to evolve into a complete website with additional sections such as:
- About
- Documentation
- Blog/News
- User area/login

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.