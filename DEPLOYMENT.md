# 🚀 DEPLOYMENT A HOSTINGER - BROSPACE

## 📋 PASOS PARA DEPLOYMENT

### 1️⃣ Compilar el proyecto

Desde tu carpeta local de Brospace:

```powershell
npm run build
```

Esto creará la carpeta `dist/` con todos los archivos optimizados.

### 2️⃣ Inicializar la base de datos

1. Ve a tu navegador y abre:
   ```
   https://darksalmon-loris-457396.hostingersite.com/api/init-db.php
   ```

2. Deberías ver un mensaje de éxito que dice:
   ```json
   {
     "success": true,
     "message": "Database initialized successfully",
     "tables": [...]
   }
   ```

3. **¡Listo!** Las tablas están creadas.

### 3️⃣ Subir archivos a Hostinger

#### Opción A: Usando Git (RECOMENDADO)

1. **Conecta GitHub con Hostinger:**
   - En Hostinger panel → Git → Conectar repositorio
   - Selecciona tu repo: `Gabrielb-Webdev/brospace`
   - Branch: `main`
   - Ruta de destino: `/public_html/`

2. **Deploy automático:**
   - Cada vez que hagas `git push`, Hostinger actualiza automáticamente

3. **Primera vez:**
   ```powershell
   npm run build
   git add .
   git commit -m "Build para producción"
   git push
   ```

#### Opción B: Usando File Manager de Hostinger

1. **Sube la carpeta API:**
   - Entra a Hostinger File Manager
   - Ve a `/public_html/`
   - Sube toda la carpeta `api/`

2. **Sube el build del frontend:**
   - Sube todo el contenido de `dist/` a `/public_html/`
   - NO subas la carpeta `dist`, solo su contenido

### 4️⃣ Configurar el .htaccess principal

Crea o edita el archivo `.htaccess` en `/public_html/`:

```apache
RewriteEngine On

# API routes
RewriteCond %{REQUEST_URI} ^/api/
RewriteRule ^ - [L]

# Frontend - redirect all to index.html (SPA)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ /index.html [L]
```

### 5️⃣ Verificar que funciona

1. **Abre tu sitio:**
   ```
   https://darksalmon-loris-457396.hostingersite.com
   ```

2. **Haz login:**
   - Email: cualquier email
   - Password: cualquier contraseña
   - El sistema creará automáticamente el usuario

3. **Crea un proyecto:**
   - Click en "New Project"
   - Llena el formulario
   - ¡Debería guardarse en la base de datos!

---

## 🔧 ESTRUCTURA EN HOSTINGER

```
public_html/
├── api/
│   ├── config.php
│   ├── init-db.php
│   ├── auth.php
│   ├── projects.php
│   ├── .htaccess
│   └── README.md
│
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
│
├── index.html
├── logo.svg
├── vite.svg
└── .htaccess
```

---

## ⚙️ CONFIGURACIÓN DE LA BASE DE DATOS

Ya está configurada en `api/config.php`:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'u851317150_brospace');
define('DB_USER', 'u851317150_brospace');
define('DB_PASS', 'Lg030920.');
```

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### Error: "CORS blocked"
**Solución:** Verifica que `api/config.php` tiene:
```php
header('Access-Control-Allow-Origin: *');
```

### Error: "Database connection failed"
**Solución:** 
1. Verifica las credenciales en `api/config.php`
2. Asegúrate de que la base de datos existe en Hostinger

### Error: "404 Not Found" en API
**Solución:**
1. Verifica que `api/.htaccess` existe
2. Asegúrate de que mod_rewrite está habilitado en Hostinger

### Página en blanco
**Solución:**
1. Abre DevTools (F12) → Console
2. Mira los errores
3. Verifica que el `.htaccess` principal está configurado

### Los proyectos no se guardan
**Solución:**
1. Abre: `https://tu-dominio.com/api/init-db.php`
2. Verifica que las tablas se crearon
3. Revisa los errores en la consola del navegador

---

## 📝 COMANDOS ÚTILES

```powershell
# Build para producción
npm run build

# Preview del build localmente
npm run preview

# Commit y push a GitHub
git add .
git commit -m "Update deployment"
git push

# Ver lo que se subirá
git status
```

---

## 🔄 WORKFLOW DE DESARROLLO

1. **Desarrollo local:**
   ```powershell
   npm run dev
   ```

2. **Cuando estés listo para deployment:**
   ```powershell
   npm run build
   git add .
   git commit -m "Nuevas features"
   git push
   ```

3. **Hostinger auto-deploy:**
   - Si configuraste Git, Hostinger actualiza automáticamente
   - Si no, sube manualmente el contenido de `dist/`

---

## ✅ CHECKLIST DE DEPLOYMENT

- [ ] `npm run build` ejecutado sin errores
- [ ] Carpeta `api/` subida a Hostinger
- [ ] `https://tu-dominio.com/api/init-db.php` ejecutado exitosamente
- [ ] Contenido de `dist/` subido a `/public_html/`
- [ ] `.htaccess` principal configurado
- [ ] Sitio abre correctamente
- [ ] Login funciona
- [ ] Proyectos se crean y guardan
- [ ] Configuración de Git (opcional)

---

## 🎯 PRÓXIMOS PASOS

1. **Configurar dominio personalizado** (si lo tienes)
2. **Configurar SSL** (HTTPS) - Gratis en Hostinger
3. **Configurar email automáticos** para notificaciones
4. **Agregar Google Analytics**
5. **Configurar backups automáticos** de la base de datos

---

**¡Tu app está lista para producción! 🚀**
