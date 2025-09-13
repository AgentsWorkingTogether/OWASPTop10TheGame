# 🎴 OWASP TOP 10 THE GAME - Generador de Cartas

## 📋 Descripción

Sistema completo para generar cartas del juego **OWASP TOP 10 THE GAME** con caras y traseras en un solo PDF, optimizado para impresión por ambas caras. Incluye personajes, cartas de acción (attacked/protected), cartas de acceso y tokens del juego.

## 🎯 Características

- ✅ **Un solo archivo**: PDF con caras y traseras organizadas
- ✅ **Tamaño estándar**: 5.7cm x 8.6cm (formato juego)
- ✅ **Fuente moderna**: Roboto Slab
- ✅ **10 personajes**: Todos los personajes del juego
- ✅ **Cartas de acción**: Attacked, Protected y Access
- ✅ **Tokens del juego**: Leader, Trust Indicator, Team Blue, OWASP tokens
- ✅ **Impresión optimizada**: Organizado para doble cara
- ✅ **Imágenes ampliadas**: Personajes con mejor visibilidad

## 📁 Estructura del Proyecto

```
game/
├── cards.tex                    # Archivo LaTeX principal
├── cards.pdf                    # PDF final con todas las cartas
├── compile.sh                   # Script de compilación
├── check_latex.sh               # Verificación de LaTeX
├── images/
│   ├── characters/              # 10 personajes del juego
│   ├── backgrounds/             # Fondos de cartas
│   ├── actions/                 # Iconos de acciones
│   ├── access/                  # Iconos de acceso
│   ├── backs/                   # Fondos de cartas traseras
│   └── tokens/                  # Tokens del juego
└── README.md                    # Este archivo
```

## 🖨️ Instrucciones de Impresión

### Método Recomendado: Impresión Automática

1. **Abrir**: `cards.pdf`
2. **Configurar impresora**:
   - Papel: A4 (210 x 297 mm)
   - Calidad: Alta (300 DPI mínimo)
   - Impresión por ambas caras: ✅ Activado
   - Escalado: 100% (sin ajustar a página)
3. **Imprimir**: Todo el documento (8 páginas)

### Estructura del PDF

- **Página 1**: 9 cartas de personajes (fila 1: pentester, ciso, cloud_security | fila 2: script_kiddie, cracker, cyberterrorist | fila 3: threat_hunter, hacktivist, malware_analyst)
- **Página 2**: 9 cartas traseras (correspondientes a página 1)
- **Página 3**: 9 cartas mixtas (1 incident_responder + 5 attacked + 3 protected)
- **Página 4**: 9 cartas traseras mixtas (1 normal + 8 action-card-back)
- **Página 5**: 7 cartas de acción (2 protected + 5 access)
- **Página 6**: 7 cartas traseras (2 action-card-back + 5 access-card-back)
- **Página 7**: Tokens (1 Leader + 1 Trust Indicator + 5 Team Blue + 6 Green + 6 Red)
- **Página 8**: Tokens traseros (copia de página 7)

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

## 🃏 Tipos de Cartas

### Cartas de Personajes
- **Cara**: Imagen del personaje + nombre
- **Trasera**: Logo del juego

### Cartas de Acción
- **Attacked**: Personaje atacado
- **Protected**: Personaje protegido
- **Access**: Personaje con acceso

### Cartas Traseras
- **Action Card Back**: Trasera para cartas de acción
- **Access Card Back**: Trasera para cartas de acceso

### Tokens del Juego
- **Leader**: Token de líder (5.83cm x 5.83cm)
- **Trust Indicator**: Indicador de confianza (11.35cm x 6.81cm)
- **Team Blue**: 5 tokens de equipo azul (1.56cm x 1.56cm cada uno)
- **OWASP Green Token**: 6 tokens verdes (1.56cm x 1.56cm cada uno)
- **OWASP Red Token**: 6 tokens rojos (1.56cm x 1.56cm cada uno)

## 🛠️ Uso del Sistema

### Compilación Rápida

```bash
./compile.sh
```

### Compilación Manual

```bash
xelatex cards.tex
```

### Verificación del Sistema

```bash
./check_latex.sh
```

### Requisitos

- **LaTeX**: XeLaTeX (recomendado) o pdfLaTeX
- **Fuente**: Roboto Slab (se instala automáticamente)
- **Imágenes**: Todas incluidas en `images/`
- **Sistema**: macOS, Linux o Windows con TeX Live

## 💡 Recomendaciones de Impresión

### Papel
- **Grosor**: 200-250g/m² para durabilidad
- **Tipo**: Papel couché o fotográfico
- **Acabado**: Mate o semimate
- **Tamaño**: A4 estándar

### Impresora
- **Tecnología**: Láser o inyección de tinta de alta calidad
- **Resolución**: Mínimo 300 DPI
- **Color**: Color completo
- **Configuración**: Sin escalado automático

### Post-Impresión
1. **Corte**: Usar guillotina o tijeras precisas
2. **Redondeo**: Opcional - redondear esquinas
3. **Fundas**: Recomendado usar fundas de cartas estándar (57x86mm)

## 🔧 Solución de Problemas

### Error de compilación
```bash
./check_latex.sh  # Verificar instalación de LaTeX
```

### Fuente no encontrada
```bash
# macOS
brew install --cask font-roboto-slab

# Ubuntu/Debian
sudo apt-get install fonts-roboto-slab

# Windows
# Descargar desde Google Fonts
```

### Cartas no alineadas
- Verificar configuración de impresora
- Asegurar que no hay escalado automático
- Comprobar que los márgenes son 0.5cm
- Usar configuración "Imprimir como imagen"

### Overfull hbox warnings
- Son advertencias menores de LaTeX
- No afectan la calidad del PDF final
- Se pueden ignorar de forma segura

## 📊 Especificaciones Técnicas

- **Tamaño de cartas**: 5.7cm x 8.6cm
- **Distribución**: 9 cartas por página (3x3)
- **Total de cartas**: 25 cartas (10 personajes + 15 de acción)
- **Total de tokens**: 19 tokens (1 Leader + 1 Trust Indicator + 5 Team Blue + 6 Green + 6 Red)
- **Páginas**: 8 (4 hojas con doble cara + 2 hojas de tokens)
- **Tamaño del PDF**: ~17MB
- **Fuente**: Roboto Slab 16pt
- **Imágenes**: 6.2cm x 6.6cm (personajes ampliados)

## 🎯 Cambios Recientes

### Versión Actual
- ✅ **Imágenes ampliadas**: Personajes con tamaño 6.2cm x 6.6cm (+7%)
- ✅ **Reorganización**: Cartas 1 y 3 intercambiadas en páginas 4 y 6
- ✅ **Posicionamiento**: Carta 7 movida a posición 9 en página 6
- ✅ **Optimización**: Mejor distribución visual
- ✅ **Tokens añadidos**: Páginas 7 y 8 con todos los tokens del juego
- ✅ **Dimensiones específicas**: Cada token con su tamaño optimizado

## 🎉 Resultado Final

Al final del proceso tendrás:
- ✅ 10 cartas de personajes con sus respectivas traseras
- ✅ 10 cartas de acción (attacked, protected)
- ✅ 6 cartas de acceso
- ✅ 19 tokens del juego (Leader, Trust Indicator, Team Blue, OWASP tokens)
- ✅ Tamaño optimizado para el juego
- ✅ Diseño profesional y legible
- ✅ Imágenes de personajes ampliadas y visibles
- ✅ Tokens con dimensiones específicas para cada tipo
- ✅ Listo para jugar OWASP TOP 10 THE GAME

## 📞 Soporte

Si encuentras algún problema:
1. Ejecuta `./check_latex.sh` para verificar la instalación
2. Revisa los logs de compilación
3. Asegúrate de tener XeLaTeX instalado
4. Verifica que todas las imágenes estén presentes

¡Disfruta del juego! 🎮 