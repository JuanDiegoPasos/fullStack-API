# Proyecto Full Stack - Gestión de Usuarios

[![REGISTRARSE.png](https://i.postimg.cc/kXjjfPzP/REGISTRARSE.png)](https://postimg.cc/GHyJmVbX)

## Descripción

Esta es una aplicación web full stack para la gestión de usuarios. Permite registrar nuevos usuarios, iniciar sesión, y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los usuarios existentes. La aplicación incluye autenticación JWT para proteger las rutas privadas y hashing de contraseñas.

## Arquitectura

### Backend
El backend sigue una arquitectura RESTful con patrón MVC (Modelo-Vista-Controlador). Utiliza Express.js para manejar las rutas y middleware, con autenticación JWT para proteger las rutas privadas. La lógica de negocio se separa en controladores, mientras que los modelos manejan las interacciones con la base de datos MySQL. Se enfoca en la seguridad con hashing de contraseñas y validación de tokens.

### Frontend
El frontend adopta una arquitectura basada en componentes con React, utilizando Vite para un desarrollo rápido. Emplea React Router para la navegación entre páginas y Axios para las llamadas a la API. Se centra en una interfaz de usuario responsiva y moderna con Tailwind CSS, separando la lógica en componentes reutilizables y features organizadas por funcionalidad.

## Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- MySQL
- JWT (JSON Web Tokens)
- bcrypt para hashing de contraseñas
- CORS

### Frontend
- React
- Vite
- Tailwind CSS
- Axios para llamadas HTTP
- React Router para navegación
- React Icons

### Base de Datos
- MySQL

## Instalación

### Prerrequisitos
- Node.js instalado
- MySQL instalado y corriendo
- npm o yarn

### Pasos de Instalación

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   cd proyecto-full
   ```

2. Configura la base de datos:
   - Crea una base de datos MySQL.
   - Ejecuta el script SQL en `database/Database-clients.sql` para crear la tabla `users`.

3. Configura el backend:
   - Ve al directorio `backend`:
     ```
     cd backend
     ```
   - Instala las dependencias:
     ```
     npm install
     ```
   - Crea un archivo `.env` en la raíz del backend con las siguientes variables:
     ```
     DB_HOST=localhost
     DB_USER=tu_usuario_mysql
     DB_PASSWORD=tu_contraseña_mysql
     DB_NAME=Db_crud_clients
     JWT_SECRET=tu_secreto_jwt
     PORT=4000
     ```
   - Inicia el servidor:
     ```
     npm run dev
     ```

4. Configura el frontend:
   - Ve al directorio `frontend`:
     ```
     cd ../frontend
     ```
   - Instala las dependencias:
     ```
     npm install
     ```
   - Inicia la aplicación:
     ```
     npm run dev
     ```

## Uso

- Accede a la aplicación en `http://localhost:5173` (frontend).
- El backend corre en `http://localhost:4000`.
- En la página de inicio, puedes registrarte o iniciar sesión.
- Después de iniciar sesión, serás redirigido al dashboard donde puedes ver, actualizar y eliminar usuarios.

## API Endpoints

### Públicas
- `POST /api/users/register`: Registrar un nuevo usuario.
- `POST /api/users/login`: Iniciar sesión.

### Privadas (requieren token JWT)
- `GET /api/users`: Obtener todos los usuarios.
- `PATCH /api/users/:id`: Actualizar un usuario por ID.
- `DELETE /api/users/:id`: Eliminar un usuario por ID.


## Capturas

[![LOGIN.png](https://i.postimg.cc/RVNMP4hr/LOGIN.png)](https://postimg.cc/HV1DnGb3)


[![Dashboard.png](https://i.postimg.cc/J7Kn6pqC/Dashboard.png)](https://postimg.cc/QV9hVkwf)


[![Actualizar.png](https://i.postimg.cc/PrpjWyVY/Actualizar.png)](https://postimg.cc/0bsFxYsy)


## Estructura del Proyecto

```
proyecto-full/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── userController.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   └── userModel.js
│   │   └── routes/
│   │       └── userRoutes.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosConfig.js
│   │   ├── components/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── users/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── LandingPage.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── ...
├── database/
│   └── Database-clients.sql
└── README.md
```

