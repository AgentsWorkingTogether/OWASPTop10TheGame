#!/bin/bash

echo "Verificando instalación de LaTeX..."

# Verificar si pdflatex está disponible
if command -v pdflatex &> /dev/null; then
    echo "✅ pdfLaTeX está instalado"
    PDFLATEX_AVAILABLE=true
else
    echo "❌ pdfLaTeX no está instalado"
    PDFLATEX_AVAILABLE=false
fi

# Verificar si xelatex está disponible
if command -v xelatex &> /dev/null; then
    echo "✅ XeLaTeX está instalado"
    XELATEX_AVAILABLE=true
else
    echo "❌ XeLaTeX no está instalado"
    XELATEX_AVAILABLE=false
fi

echo ""

if [ "$PDFLATEX_AVAILABLE" = true ] || [ "$XELATEX_AVAILABLE" = true ]; then
    echo "🎉 ¡LaTeX está listo para usar!"
    echo "Puedes compilar las cartas ejecutando: ./compile.sh"
else
    echo "⚠️  LaTeX no está instalado en tu sistema."
    echo ""
    echo "Para instalar LaTeX:"
    echo ""
    
    # Detectar el sistema operativo
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "En macOS:"
        echo "  brew install --cask mactex"
        echo "  o"
        echo "  brew install --cask basictex"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "En Ubuntu/Debian:"
        echo "  sudo apt-get install texlive-full"
    else
        echo "Consulta el archivo INSTALACION.md para instrucciones específicas."
    fi
    
    echo ""
    echo "Alternativa: Usa Overleaf (https://www.overleaf.com) para compilar online."
fi 