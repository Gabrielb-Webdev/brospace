# Brospace API

Backend API para Brospace conectado a MySQL en Hostinger.

## Endpoints

### Autenticación
- `POST /api/auth.php?action=login` - Login
- `POST /api/auth.php?action=register` - Registro
- `GET /api/auth.php?id={userId}` - Obtener usuario

### Proyectos
- `GET /api/projects.php` - Listar todos los proyectos
- `GET /api/projects.php/{id}` - Obtener un proyecto
- `POST /api/projects.php` - Crear proyecto
- `PUT /api/projects.php/{id}` - Actualizar proyecto
- `DELETE /api/projects.php/{id}` - Eliminar proyecto

### Inicialización
- `GET /api/init-db.php` - Crear tablas en la base de datos

## Configuración

La base de datos se configura en `config.php`:
- Host: localhost
- Database: u851317150_brospace
- User: u851317150_brospace
- Password: Lg030920.

## Uso

1. Sube la carpeta `api/` a Hostinger
2. Accede a `https://tu-dominio.com/api/init-db.php` para crear las tablas
3. La API estará lista para usar
