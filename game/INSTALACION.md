# 📦 Instalación de LaTeX para OWASP TOP 10 THE GAME

Este documento te guía para instalar LaTeX y generar las cartas del juego OWASP TOP 10 THE GAME.

## 🎯 Requisitos Previos

- **Sistema operativo**: macOS, Linux o Windows
- **Espacio en disco**: 2-4 GB (dependiendo de la instalación)
- **Conexión a internet**: Para descargar paquetes

## 🍎 macOS

### Opción 1: MacTeX (Recomendado - Completo)
```bash
# Instalar MacTeX completo (4GB)
brew install --cask mactex

# Verificar instalación
xelatex --version
```

### Opción 2: BasicTeX (Ligero - 100MB)
```bash
# Instalar BasicTeX (más rápido)
brew install --cask basictex

# Instalar paquetes adicionales necesarios
sudo tlmgr update --self
sudo tlmgr install fontspec xcolor tikz geometry babel enumitem etoolbox
```

### Opción 3: TeX Live via Homebrew
```bash
# Instalar TeX Live
brew install texlive

# Agregar al PATH si es necesario
echo 'export PATH="/opt/homebrew/texlive/2023/bin/universal-darwin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

## 🐧 Ubuntu/Debian Linux

### Opción 1: TeX Live Completo
```bash
# Actualizar repositorios
sudo apt-get update

# Instalar TeX Live completo (4GB)
sudo apt-get install texlive-full

# Verificar instalación
xelatex --version
```

### Opción 2: TeX Live Básico (Recomendado)
```bash
# Instalar paquetes básicos necesarios
sudo apt-get install texlive-latex-base \
                     texlive-latex-extra \
                     texlive-latex-recommended \
                     texlive-fonts-recommended \
                     texlive-fonts-extra \
                     texlive-lang-spanish \
                     texlive-xetex

# Verificar instalación
xelatex --version
```

### Opción 3: Instalación Manual
```bash
# Descargar e instalar TeX Live manualmente
wget https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
tar -xzf install-tl-unx.tar.gz
cd install-tl-*
sudo ./install-tl --profile=texlive.profile
```

## 🪟 Windows

### Opción 1: MiKTeX (Recomendado)
1. **Descargar**: https://miktex.org/download
2. **Instalar**: Ejecutar el instalador como administrador
3. **Configurar**: Seguir las instrucciones del asistente
4. **Verificar**: Abrir cmd y ejecutar `xelatex --version`

### Opción 2: TeX Live
1. **Descargar**: https://www.tug.org/texlive/
2. **Instalar**: Ejecutar `install-tl-windows.bat`
3. **Agregar al PATH**: `C:\texlive\2023\bin\win32`
4. **Verificar**: Abrir cmd y ejecutar `xelatex --version`

### Opción 3: Chocolatey
```cmd
# Instalar via Chocolatey
choco install miktex

# O instalar TeX Live
choco install texlive
```

## 🔍 Verificar la Instalación

### Comandos de Verificación
```bash
# Verificar XeLaTeX (recomendado)
xelatex --version

# Verificar pdfLaTeX (alternativo)
pdflatex --version

# Verificar LaTeX
latex --version

# Verificar gestor de paquetes
tlmgr --version
```

### Script de Verificación Automática
```bash
# Usar el script incluido en el proyecto
cd game
./check_latex.sh
```

## 🚀 Compilar las Cartas

### Compilación Automática
```bash
# Navegar al directorio del proyecto
cd game

# Compilar con el script automático
./compile.sh
```

### Compilación Manual
```bash
# Compilar directamente con XeLaTeX
xelatex cards.tex

# O con pdfLaTeX (si no tienes XeLaTeX)
pdflatex cards.tex
```

## 🔧 Solución de Problemas

### Error: "xelatex: command not found"
```bash
# macOS - Verificar PATH
echo $PATH | grep texlive

# Linux - Instalar XeLaTeX
sudo apt-get install texlive-xetex

# Windows - Verificar instalación
where xelatex
```

### Error: "Font not found"
```bash
# Instalar fuentes Roboto Slab
# macOS
brew install --cask font-roboto-slab

# Ubuntu/Debian
sudo apt-get install fonts-roboto-slab

# Windows
# Descargar desde Google Fonts
```

### Error: "Package not found"
```bash
# Actualizar gestor de paquetes
sudo tlmgr update --self

# Instalar paquetes faltantes
sudo tlmgr install [nombre-del-paquete]
```

### Error de Permisos
```bash
# macOS/Linux
sudo chmod +x compile.sh
sudo chmod +x check_latex.sh

# Windows
# Ejecutar como administrador
```

## 📋 Checklist de Instalación

- [ ] LaTeX instalado correctamente
- [ ] XeLaTeX disponible (`xelatex --version`)
- [ ] Fuentes Roboto Slab instaladas
- [ ] Scripts ejecutables (`chmod +x *.sh`)
- [ ] Compilación exitosa (`./compile.sh`)
- [ ] PDF generado sin errores

## 📞 Soporte

Si encuentras problemas:

1. **Ejecutar**: `./check_latex.sh`
2. **Revisar**: Logs de compilación
3. **Verificar**: Versión de LaTeX instalada
4. **Consultar**: Documentación oficial de TeX Live

### Enlaces Útiles
- [TeX Live Documentation](https://www.tug.org/texlive/)
- [MiKTeX Documentation](https://miktex.org/docs)
- [Overleaf Documentation](https://www.overleaf.com/learn)

¡Listo para generar las cartas! 🎴 