# 🚀 CONFIGURAR AUTO-DEPLOY EN HOSTINGER

## ✅ Archivos subidos a GitHub

Los archivos ya están en tu repositorio:
```
https://github.com/Gabrielb-Webdev/brospace
```

Incluyendo la carpeta `dist/` con:
- `index.html` (sin `type="module"`, con versión `?v=0.2`)
- `assets/index-CPxw8QOb.js?v=0.2`
- `assets/react-vendor-BjyzLYM9.js?v=0.2`
- `assets/index-DkVSKL2B.css?v=0.2`

---

## 📋 CONFIGURAR HOSTINGER (HAZLO UNA SOLA VEZ)

### PASO 1: Conectar GitHub con Hostinger

1. **Ve al panel de Hostinger**
2. **Busca la sección "Git"** o "GitHub"
3. **Click en "Connect to GitHub"** o "Create"
4. **Autoriza Hostinger** en GitHub
5. **Selecciona el repositorio:** `Gabrielb-Webdev/brospace`
6. **Branch:** `main`
7. **Ruta de destino:** `/public_html`

### PASO 2: Configurar qué archivos se suben

En la configuración de Git en Hostinger:

**Carpetas a incluir:**
- ✅ `dist/` (todo el contenido)
- ✅ `api/` (todo el contenido)
- ✅ `.htaccess` (archivo raíz)

**Carpetas a EXCLUIR:**
- ❌ `node_modules/`
- ❌ `src/`
- ❌ Todo lo demás (archivos de desarrollo)

### PASO 3: Configurar estructura de deployment

Hostinger debe copiar los archivos así:

```
GitHub                          →    Hostinger
---------------------------------------------------------
dist/index.html                 →    /public_html/index.html
dist/assets/*                   →    /public_html/assets/*
dist/logo.svg                   →    /public_html/logo.svg
dist/vite.svg                   →    /public_html/vite.svg
api/*                           →    /public_html/api/*
.htaccess                       →    /public_html/.htaccess
```

**IMPORTANTE:** El contenido de `dist/` debe ir a la raíz de `/public_html/`, NO a `/public_html/dist/`

---

## 🔄 DESPUÉS DE CONFIGURAR

Cada vez que hagas cambios:

```powershell
# 1. Compila el proyecto
npm run build

# 2. Actualiza el index.html con nueva versión
# (edita manualmente dist/index.html y cambia ?v=0.2 a ?v=0.3)

# 3. Sube a GitHub
git add -A
git commit -m "Build v0.3 - Nueva funcionalidad"
git push
```

**Hostinger automáticamente:**
- Detecta el push
- Descarga los cambios
- Actualiza `/public_html/`
- ¡Listo! ✅

---

## 📝 ALTERNATIVA: SCRIPT DE BUILD AUTOMÁTICO

Si quieres automatizar el cambio de versión, puedo crear un script que:
1. Compile el proyecto
2. Actualice automáticamente la versión en `index.html`
3. Haga commit y push

---

## 🎯 AHORA MISMO

1. **Configura el Git en Hostinger** (pasos arriba)
2. **Haz un deploy manual** o espera a que Hostinger sincronice
3. **Verifica:** https://darksalmon-loris-457396.hostingersite.com
4. **Debería funcionar** con `?v=0.2` en los archivos

---

## 🐛 SI SIGUE CON ERROR

Limpia caché:
```
Ctrl + Shift + Delete → Borrar todo
```

O prueba en ventana incógnito.

El query parameter `?v=0.2` fuerza al navegador a descargar los archivos nuevos.

---

## ✅ RESUMEN

- ✅ `dist/` eliminado de `.gitignore`
- ✅ Build compilado con archivos optimizados
- ✅ `index.html` sin `type="module"`
- ✅ Versión `?v=0.2` agregada a todos los archivos
- ✅ Todo subido a GitHub
- ⏳ Pendiente: Configurar auto-deploy en Hostinger

**¡Casi terminamos!** 🎉
