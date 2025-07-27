#!/bin/bash

echo "=== Generador de Cartas - TEAM BUILDING EXTENSION ==="
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
echo "🔄 Compilando cartas de team-building (caras + traseras)..."

# Compilar el archivo
$COMPILER team_building_cards.tex

# Verificar si la compilación fue exitosa
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Compilación completada!"
    echo "📄 Archivo generado: team_building_cards.pdf"
    echo "📏 Tamaño: $(ls -lh team_building_cards.pdf | awk '{print $5}')"
                    echo "📋 Páginas: 2 (1 hoja con caras y traseras)"
                echo ""
                echo "🎯 Estructura del PDF:"
                echo "   - Página 1: 9 cartas de roles de equipo (3x3 grid)"
                echo "   - Página 2: 9 cartas traseras de roles de equipo (3x3 grid)"
    echo ""
    echo "👥 Roles de equipo incluidos:"
    echo "   - Team Leader: Lidera el equipo y toma decisiones estratégicas"
    echo "   - Team Member: Miembro activo que contribuye al trabajo del equipo"
    echo "   - Facilitator: Facilita la comunicación y resuelve conflictos"
    echo "   - Observer: Observa y proporciona retroalimentación constructiva"
    echo "   - Coordinator: Coordina actividades y recursos del equipo"
    echo "   - Communicator: Mejora la comunicación interna y externa"
    echo "   - Problem Solver: Identifica y resuelve problemas del equipo"
    echo "   - Innovator: Propone nuevas ideas y soluciones creativas"
    echo "   - Mentor: Guía y desarrolla las habilidades del equipo"
    echo ""
    echo "🤝 Tipos de cartas:"
    echo "   - Cartas de roles: Definen el papel de cada jugador en el equipo"
    echo ""
    echo "🖨️  Para imprimir:"
    echo "   - Abrir team_building_cards.pdf"
    echo "   - Configurar impresión por ambas caras"
    echo "   - Imprimir todo el documento (2 páginas)"
    echo ""
    echo "💡 Consejo: Usa papel de 200-250g para mejor durabilidad"
    echo "🎯 Uso: Esta extensión se puede usar junto con el juego principal"
    echo "        para fomentar el trabajo en equipo y la colaboración"
    echo ""
    echo "📁 Imágenes necesarias:"
    echo "   - images/backgrounds/team_role_background.png"
    echo "   - images/cards/ (10 imágenes para los roles)"
    echo "   - images/backs/back_team_building.png"
else
    echo ""
    echo "❌ Error en la compilación"
    echo "   Revisa el archivo cards.log para más detalles"
    exit 1
fi

# Limpiar archivos temporales
rm -f team_building_cards.aux team_building_cards.log 