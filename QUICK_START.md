# 🎬 INICIO RÁPIDO - 5 MINUTOS

## ⚡ Pasos para empezar AHORA

### 1️⃣ Verifica si Node.js está instalado

Abre **PowerShell** y ejecuta:
```powershell
node --version
```

**¿Muestra un número de versión?** 
- ✅ SÍ → Ve al paso 3
- ❌ NO → Continúa al paso 2

---

### 2️⃣ Instala Node.js (solo si es necesario)

1. Ve a: **https://nodejs.org/**
2. Click en el botón verde **"Download Node.js (LTS)"**
3. Ejecuta el instalador
4. Click en **"Next"** → **"Next"** → **"Install"**
5. **REINICIA tu computadora**
6. Vuelve al paso 1 para verificar

---

### 3️⃣ Instala las dependencias

Abre **PowerShell** y ejecuta:
```powershell
cd "f:\Users\gabri\Documentos\Gabriel Dev\brospace"
npm install
```

⏱️ **Esto tomará 2-5 minutos**. Verás muchas líneas de texto, es normal.

---

### 4️⃣ Inicia la aplicación

```powershell
npm run dev
```

🎉 **¡Listo!** Tu navegador se abrirá automáticamente en `http://localhost:3000`

---

## 🔐 Para probar la app

**Página de login:**
- Email: `admin@brodevlab.com` (o cualquier email)
- Password: `12345` (o cualquier contraseña)
- Click en **"Sign In"**

---

## 🎯 ¿Qué hacer después de iniciar sesión?

### Crear tu primer proyecto:

1. En el Dashboard, click en **"New Project"**
2. Llena el formulario:
   - **Nombre:** "Página web para cliente X"
   - **Cliente:** "Juan Pérez"
   - **Email:** "juan@ejemplo.com"
   - **Estado:** "Lead" o "Active"
3. Click en **"Create Project"**
4. ¡Listo! Verás tu proyecto en la lista

### Ver todos los proyectos:
- Click en **"Projects"** en el sidebar izquierdo

### Compartir con un cliente:
- El proyecto tiene un token único
- URL: `http://localhost:3000/client/[TOKEN]`
- ⚠️ **Nota:** El sistema de tokens funciona pero necesitas copiar manualmente el URL por ahora

---

## 🎨 Personalizar para BrodevLab

### Cambiar colores:

1. Abre `tailwind.config.js`
2. Busca la sección `colors`
3. Cambia los valores hexadecimales:
```javascript
primary: {
  600: '#TU_COLOR_AQUI',
  // ...
}
```

### Agregar tu logo:

1. Guarda tu logo en `public/logo.svg` o `public/logo.png`
2. Abre `src/layouts/DashboardLayout.tsx`
3. Reemplaza el texto "Brospace" con:
```tsx
<img src="/logo.svg" alt="BrodevLab" className="h-8" />
```

---

## 🛑 Si algo sale mal

### Error: "npm no se reconoce"
- **Solución:** Instala Node.js (paso 2)

### Error: "Cannot find module"
- **Solución:** 
```powershell
cd "f:\Users\gabri\Documentos\Gabriel Dev\brospace"
npm install
```

### Error: "Port 3000 is already in use"
- **Solución:** Vite usará automáticamente otro puerto (3001, 3002, etc.)

### La aplicación no carga
- **Solución:** 
  1. Detén el servidor (Ctrl + C)
  2. Ejecuta `npm run dev` de nuevo

---

## 📁 Archivos Importantes

```
brospace/
├── 📄 GETTING_STARTED.md    ← Guía completa
├── 📄 PROJECT_SUMMARY.md    ← Resumen detallado del proyecto
├── 📄 README.md             ← Documentación técnica
│
├── src/
│   ├── pages/
│   │   ├── Dashboard.tsx     ← Página principal
│   │   └── Projects.tsx      ← Lista de proyectos
│   │
│   ├── components/
│   │   └── modals/
│   │       └── CreateProjectModal.tsx  ← Formulario de proyectos
│   │
│   └── store/
│       └── appStore.ts       ← Estado global de la app
│
└── package.json             ← Dependencias
```

---

## 🚀 Comandos Útiles

```powershell
# Iniciar servidor de desarrollo
npm run dev

# Detener servidor
Ctrl + C (en PowerShell)

# Limpiar y reinstalar dependencias
rm -r node_modules
npm install

# Compilar para producción
npm run build
```

---

## ✅ Checklist de Inicio

- [ ] Node.js instalado
- [ ] PowerShell abierto
- [ ] Navegado al directorio del proyecto
- [ ] `npm install` ejecutado sin errores
- [ ] `npm run dev` corriendo
- [ ] Navegador abrió en localhost:3000
- [ ] Login exitoso
- [ ] Primer proyecto creado

---

## 🎓 Próximos Pasos Recomendados

1. **Explora la interfaz** - Familiarízate con el dashboard
2. **Crea varios proyectos** - Prueba diferentes estados
3. **Lee PROJECT_SUMMARY.md** - Entiende qué está implementado
4. **Personaliza los colores** - Aplica tu branding
5. **Agrega tu logo** - Reemplaza el placeholder
6. **Lee el código** - Entiende cómo funciona
7. **Planea la Fase 2** - Sistema de tareas completo

---

## 📞 ¿Necesitas ayuda?

1. **Revisa GETTING_STARTED.md** - Guía detallada
2. **Revisa PROJECT_SUMMARY.md** - Características completas
3. **Lee el código** - Está bien comentado
4. **Busca en Google** - Errores comunes de Node.js/React

---

**¡Ya estás listo para crear tu plataforma de gestión de proyectos! 🎉**

**Tiempo estimado total:** 5-10 minutos  
**Dificultad:** Fácil  
**Próximo milestone:** Fase 2 - Sistema de tareas
