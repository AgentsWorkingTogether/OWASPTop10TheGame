#!/bin/bash

echo "=== Generador de Cartas - OWASP TOP 10 THE GAME ==="
echo ""

# Verificar si XeLaTeX está disponible
if command -v xelatex &> /dev/null; then
    echo "✅ Usando XeLaTeX..."
    COMPILER="xelatex"
elif command -v pdflatex &> /dev/null; then
    echo "⚠️  XeLaTeX no encontrado, usando pdfLaTeX..."
    echo "   Nota: La fuente Roboto Slab puede no funcionar correctamente"
    COMPILER="pdflatex"
else
    echo "❌ Error: No se encontró XeLaTeX ni pdfLaTeX instalado."
    echo "   Instala LaTeX ejecutando: ./check_latex.sh"
    exit 1
fi

echo ""
echo "🔄 Compilando cartas (caras + traseras)..."

# Compilar el archivo
$COMPILER cards.tex

# Verificar si la compilación fue exitosa
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Compilación completada!"
    echo "📄 Archivo generado: cards.pdf"
    echo "📏 Tamaño: $(ls -lh cards.pdf | awk '{print $5}')"
    echo "📋 Páginas: 6 (3 hojas con caras y traseras)"
    echo ""
    echo "🎯 Estructura del PDF:"
    echo "   - Página 1: 9 cartas de personajes"
    echo "   - Página 2: 9 cartas traseras"
    echo "   - Página 3: 9 cartas de personajes (1 Incident Responder + 5 Attacked + 3 Protected)"
    echo "   - Página 4: 9 cartas traseras (1 normal + 8 action-card-back)"
    echo "   - Página 5: 7 cartas de personajes (2 Protected + 5 Access) - DUPLICADA"
    echo "   - Página 6: 7 cartas traseras (2 action-card-back + 5 access-card-back) - DUPLICADA"
    echo ""
    echo "🖨️  Para imprimir:"
    echo "   - Abrir cards.pdf"
    echo "   - Configurar impresión por ambas caras"
    echo "   - Imprimir todo el documento (6 páginas)"
    echo ""
    echo "💡 Consejo: Usa papel de 200-250g para mejor durabilidad"
else
    echo ""
    echo "❌ Error en la compilación"
    echo "   Revisa el archivo cards.log para más detalles"
    exit 1
fi

# Limpiar archivos temporales
rm -f cards.aux cards.log 