# 🚀 Guía de Instalación - Brospace

## ⚠️ IMPORTANTE: Primero instala Node.js

### Paso 1: Instalar Node.js

1. **Descarga Node.js:**
   - Ve a: https://nodejs.org/
   - Descarga la versión **LTS** (Long Term Support) - recomendada
   - Versión actual: v20.x o superior

2. **Instala Node.js:**
   - Ejecuta el instalador descargado
   - Sigue el asistente de instalación
   - ✅ Marca la opción "Automatically install necessary tools" si aparece
   - Acepta todos los valores por defecto
   - Click en "Install"

3. **Reinicia tu computadora** después de la instalación

4. **Verifica la instalación:**
   Abre PowerShell y ejecuta:
   ```powershell
   node --version
   npm --version
   ```
   Deberías ver algo como:
   ```
   v20.10.0
   10.2.3
   ```

---

## Paso 2: Instalar dependencias del proyecto

Abre PowerShell y ejecuta los siguientes comandos:

```powershell
# Navega al directorio del proyecto
cd "f:\Users\gabri\Documentos\Gabriel Dev\brospace"

# Instala todas las dependencias
npm install
```

**Nota:** La instalación puede tardar 2-5 minutos dependiendo de tu conexión a internet.

---

## Paso 3: Iniciar el servidor de desarrollo

```powershell
npm run dev
```

**¡Listo!** La aplicación se abrirá automáticamente en tu navegador en:
`http://localhost:3000`

---

## 🎯 Comandos Útiles

```powershell
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación de producción
npm run preview

# Verificar errores de código
npm run lint
```

---

## 🔐 Login de Prueba

Para la demo, puedes iniciar sesión con **cualquier email y contraseña**.

Ejemplo:
- Email: `admin@brodevlab.com`
- Password: `123456`

---

## 📱 Características Implementadas

### ✅ Ya Funcional:
1. **Sistema de Autenticación**
   - Login con demo (acepta cualquier credencial)
   - Gestión de sesiones con Zustand

2. **Dashboard Principal**
   - Estadísticas de proyectos activos
   - Tareas en progreso
   - Métricas de equipo
   - Horas rastreadas

3. **Gestión de Proyectos**
   - Crear nuevos proyectos desde formularios
   - Ver lista de proyectos con filtros
   - Estados: Lead, Active, Paused, Completed, Cancelled
   - Búsqueda en tiempo real
   - Asignación a miembros del equipo

4. **Links Compartibles para Clientes**
   - Cada proyecto tiene un token único
   - Vista de solo lectura para clientes
   - Sección de comentarios

5. **Diseño Responsive**
   - Optimizado para desktop
   - Sidebar colapsable
   - Dark mode por defecto
   - Animaciones suaves

### 🚧 Próximas Características:

1. **Sistema de Tareas Completo**
   - Crear, editar, eliminar tareas
   - Asignar prioridades (Urgente, Alta, Normal, Baja)
   - Agregar subtareas
   - Campos personalizados dinámicos

2. **Time Tracking**
   - Timer integrado en cada tarea
   - Historial de tiempo trabajado
   - Reportes de tiempo por proyecto/usuario

3. **Gestión de Equipo**
   - Invitar miembros al equipo
   - Roles: Admin, Member, Client
   - Permisos personalizados

4. **Campos Personalizados**
   - Crear campos custom para proyectos/tareas
   - Tipos: Texto, Número, Fecha, Select, Multi-select, URL, Email

5. **Resúmenes Automáticos**
   - Generación diaria/semanal/mensual de reportes
   - Actividad del día
   - Tareas completadas
   - Tiempo total trabajado

6. **Integración con Firebase**
   - Base de datos en tiempo real
   - Autenticación real
   - Storage para archivos
   - Hosting

---

## 🎨 Personalización del Tema

Los colores principales están en `tailwind.config.js`:

```javascript
colors: {
  primary: '#6366f1',  // Color principal (Indigo)
  dark: '#020617',     // Fondo oscuro
}
```

Puedes ajustarlos para que coincidan exactamente con la identidad de BrodevLab.

---

## 📁 Estructura del Código

```
src/
├── components/        # Componentes reutilizables
│   ├── modals/        # Modales (CreateProject, etc)
│   └── ProjectCard.tsx
├── layouts/           # Layouts de página
├── pages/             # Páginas principales
├── store/             # Estado global (Zustand)
├── types/             # Tipos de TypeScript
└── constants/         # Constantes de la app
```

---

## 🐛 Solución de Problemas

### Error: "npm no se reconoce como comando"
**Solución:** Node.js no está instalado o no está en el PATH. Reinstala Node.js y reinicia la computadora.

### Error: "Cannot find module"
**Solución:** 
```powershell
rm -r node_modules
rm package-lock.json
npm install
```

### La aplicación no carga
**Solución:** Verifica que el puerto 3000 no esté en uso. Si lo está, el servidor usará el siguiente puerto disponible.

---

## 📞 Soporte

Si tienes problemas, revisa:
1. Que Node.js esté instalado correctamente
2. Que estés en el directorio correcto del proyecto
3. Que todas las dependencias se hayan instalado sin errores

---

## 🚀 Próximos Pasos Recomendados

1. **Instalar Node.js** (si no lo has hecho)
2. **Ejecutar `npm install`** en el directorio del proyecto
3. **Ejecutar `npm run dev`** para iniciar la app
4. **Explorar el código** y familiarizarte con la estructura
5. **Personalizar los colores** según tu marca
6. **Agregar tu logo** en los assets
7. **Configurar Firebase** para base de datos real (opcional)

---

**¡Listo para empezar! 🎉**
