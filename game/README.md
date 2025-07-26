# 🎴 OWASP TOP 10 THE GAME - Generador de Cartas

## 📋 Descripción

Sistema completo para generar cartas de personajes del juego OWASP TOP 10 THE GAME con caras y traseras en un solo PDF, optimizado para impresión por ambas caras.

## 🎯 Características

- ✅ **Un solo archivo**: PDF con caras y traseras
- ✅ **Tamaño estándar**: 6.3cm x 8.8cm (naipes españoles)
- ✅ **Fuente moderna**: Roboto Slab
- ✅ **10 personajes**: Todos los personajes del juego
- ✅ **Logo del juego**: En las cartas traseras
- ✅ **Impresión optimizada**: Organizado para doble cara

## 📁 Estructura del Proyecto

```
game/
├── cards.tex                    # Archivo LaTeX principal
├── cards.pdf                    # PDF final con todas las cartas
├── compile.sh                   # Script de compilación
├── check_latex.sh               # Verificación de LaTeX
├── images/
│   ├── characters/              # 10 personajes del juego
│   └── backs/                   # Logo del juego
└── README_COMPLETO.md           # Este archivo
```

## 🖨️ Instrucciones de Impresión

### Método Recomendado: Impresión Automática

1. **Abrir**: `cards.pdf`
2. **Configurar impresora**:
   - Papel: A4 (210 x 297 mm)
   - Calidad: Alta (300 DPI mínimo)
   - Impresión por ambas caras: ✅ Activado
3. **Imprimir**: Todo el documento (4 páginas)

### Estructura del PDF

- **Página 1**: 9 cartas de personajes
- **Página 2**: 9 cartas traseras
- **Página 3**: 1 carta de personaje
- **Página 4**: 1 carta trasera

### Alineación Automática

El PDF está diseñado para que al imprimir por ambas caras:
- La cara del personaje 1 se alinee con su trasera
- La cara del personaje 2 se alinee con su trasera
- Y así sucesivamente...

## 🎮 Personajes Incluidos

1. **PENTESTER** - Especialista en pruebas de penetración
2. **CISO** - Chief Information Security Officer
3. **CLOUD SECURITY** - Especialista en seguridad de la nube
4. **SCRIPT KIDDIE** - Atacante inexperto
5. **CRACKER** - Hacker malicioso
6. **CYBERTERRORIST** - Atacante ciberterrorista
7. **THREAT HUNTER** - Cazador de amenazas
8. **HACKTIVIST** - Activista hacker
9. **MALWARE ANALYST** - Analista de malware
10. **INCIDENT RESPONDER** - Respondedor de incidentes

## 🛠️ Uso del Sistema

### Compilación Rápida

```bash
./compile.sh
```

### Compilación Manual

```bash
xelatex cards.tex
```

### Requisitos

- **LaTeX**: XeLaTeX o pdfLaTeX
- **Fuente**: Roboto Slab (se instala automáticamente)
- **Imágenes**: Todas incluidas en `images/`

## 💡 Recomendaciones de Impresión

### Papel
- **Grosor**: 200-250g/m² para durabilidad
- **Tipo**: Papel couché o fotográfico
- **Acabado**: Mate o semimate

### Impresora
- **Tecnología**: Láser o inyección de tinta de alta calidad
- **Resolución**: Mínimo 300 DPI
- **Color**: Color completo

### Post-Impresión
1. **Corte**: Usar guillotina o tijeras precisas
2. **Redondeo**: Opcional - redondear esquinas
3. **Fundas**: Recomendado usar fundas de cartas estándar (63x88mm)

## 🔧 Solución de Problemas

### Error de compilación
```bash
./check_latex.sh  # Verificar instalación de LaTeX
```

### Fuente no encontrada
```bash
brew install --cask font-roboto-slab  # Instalar fuente
```

### Cartas no alineadas
- Verificar configuración de impresora
- Asegurar que no hay escalado automático
- Comprobar que los márgenes son 0.5cm

## 📊 Especificaciones Técnicas

- **Tamaño de cartas**: 6.3cm x 8.8cm
- **Distribución**: 9 cartas por página (3x3)
- **Total de cartas**: 10 personajes
- **Páginas**: 4 (2 hojas)
- **Tamaño del PDF**: ~2.4MB
- **Fuente**: Roboto Slab 14pt

## 🎉 Resultado Final

Al final del proceso tendrás:
- ✅ 10 cartas de personajes con sus respectivas traseras
- ✅ Tamaño estándar de naipes españoles
- ✅ Diseño profesional y legible
- ✅ Listo para jugar OWASP TOP 10 THE GAME

¡Disfruta del juego! 🎮 