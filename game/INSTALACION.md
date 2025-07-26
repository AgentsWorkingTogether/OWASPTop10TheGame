# Instalación de LaTeX

Para generar las cartas de personajes necesitas tener LaTeX instalado en tu sistema.

## macOS

### Opción 1: MacTeX (Recomendado)
```bash
# Instalar MacTeX completo
brew install --cask mactex

# O instalar BasicTeX (más ligero)
brew install --cask basictex
```

### Opción 2: TeX Live
```bash
# Instalar TeX Live
brew install texlive
```

## Ubuntu/Debian

```bash
# Instalar TeX Live completo
sudo apt-get update
sudo apt-get install texlive-full

# O instalar solo lo básico
sudo apt-get install texlive-latex-base texlive-latex-extra texlive-latex-recommended
```

## Windows

1. Descargar MiKTeX desde: https://miktex.org/download
2. Instalar siguiendo las instrucciones del instalador
3. O usar TeX Live: https://www.tug.org/texlive/

## Verificar la instalación

Después de instalar, verifica que funciona:

```bash
# Verificar si pdflatex está disponible
pdflatex --version

# Verificar si xelatex está disponible
xelatex --version
```

## Compilar las cartas

Una vez instalado LaTeX, puedes compilar las cartas:

```bash
cd game
./compile.sh
```

## Alternativa sin LaTeX

Si no quieres instalar LaTeX, puedes usar herramientas online como:
- Overleaf (https://www.overleaf.com)
- Copiar el contenido de `generate_cards.tex` a Overleaf
- Subir las imágenes a Overleaf
- Compilar online 