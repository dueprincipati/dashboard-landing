#!/bin/bash

###############################################################################
# 🚀 OPEN DASHBOARD LANDING PAGE
# Script per aprire velocemente il progetto
###############################################################################

echo "🎯 Dashboard Landing Page - Quick Launcher"
echo "=========================================="
echo ""

# Colori per output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Controlla se siamo nella directory corretta
if [ ! -f "src/index.html" ]; then
    echo "${YELLOW}⚠️  Errore: file src/index.html non trovato${NC}"
    echo "Assicurati di essere nella directory dashboard-landing/"
    exit 1
fi

echo "${GREEN}✓${NC} File index.html trovato!"
echo ""

# Menu di scelta
echo "Scegli come aprire il progetto:"
echo ""
echo "1) ${BLUE}Browser${NC} - Apri direttamente nel browser"
echo "2) ${BLUE}npm dev${NC} - Avvia server di sviluppo (port 8080)"
echo "3) ${BLUE}Python${NC} - Server Python (port 8080)"
echo "4) ${BLUE}PHP${NC} - Server PHP (port 8080)"
echo ""
read -p "Scelta (1-4): " choice

case $choice in
    1)
        echo ""
        echo "${GREEN}➜${NC} Apertura nel browser..."
        if command -v xdg-open &> /dev/null; then
            xdg-open src/index.html
        elif command -v open &> /dev/null; then
            open src/index.html
        else
            echo "${YELLOW}⚠️  Apri manualmente: $(pwd)/src/index.html${NC}"
        fi
        ;;
    2)
        echo ""
        if ! command -v npm &> /dev/null; then
            echo "${YELLOW}⚠️  npm non trovato. Installa Node.js prima.${NC}"
            exit 1
        fi
        
        if [ ! -d "node_modules" ]; then
            echo "${GREEN}➜${NC} Installazione dipendenze..."
            npm install
        fi
        
        echo "${GREEN}➜${NC} Avvio server di sviluppo..."
        echo "${BLUE}🌐 URL: http://localhost:8080${NC}"
        npm run dev
        ;;
    3)
        echo ""
        if ! command -v python3 &> /dev/null; then
            echo "${YELLOW}⚠️  Python3 non trovato.${NC}"
            exit 1
        fi
        
        echo "${GREEN}➜${NC} Avvio server Python..."
        echo "${BLUE}🌐 URL: http://localhost:8080${NC}"
        echo ""
        cd src && python3 -m http.server 8080
        ;;
    4)
        echo ""
        if ! command -v php &> /dev/null; then
            echo "${YELLOW}⚠️  PHP non trovato.${NC}"
            exit 1
        fi
        
        echo "${GREEN}➜${NC} Avvio server PHP..."
        echo "${BLUE}🌐 URL: http://localhost:8080${NC}"
        echo ""
        cd src && php -S localhost:8080
        ;;
    *)
        echo "${YELLOW}⚠️  Scelta non valida${NC}"
        exit 1
        ;;
esac
