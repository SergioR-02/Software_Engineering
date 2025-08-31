# Objetos Perdidos UNAL - Sistema de Gestión de Objetos Perdidos y Encontrados

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.21.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://mysql.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-6.4.4-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![Sass](https://img.shields.io/badge/Sass-1.83.4-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.3-FF6B35?style=for-the-badge&logo=zustand&logoColor=white)](https://zustand-demo.pmnd.rs/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## Descripción del Proyecto

**Objetos Perdidos UNAL** es una plataforma digital diseñada para gestionar de manera eficiente la pérdida y recuperación de objetos dentro de los campus de la Universidad Nacional de Colombia. El sistema utiliza una **arquitectura MVC** en el backend con **Express/TypeScript** y **Atomic Design** en el frontend con **React**.

### **Características Principales:**

#### 🏗️ **Arquitectura & Features**
![MVC Architecture](https://img.shields.io/badge/Backend-MVC_Architecture-FF6B6B?style=flat-square&logo=typescript&logoColor=white)
![Atomic Design](https://img.shields.io/badge/Frontend-Atomic_Design-4ECDC4?style=flat-square&logo=react&logoColor=white)
![Responsive](https://img.shields.io/badge/Design-Responsive-96CEB4?style=flat-square&logo=css3&logoColor=white)
![Type Safety](https://img.shields.io/badge/Type-Safe-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Authentication](https://img.shields.io/badge/Auth-JWT_Tokens-FFA726?style=flat-square&logo=jsonwebtokens&logoColor=white)

---

## 🏛️ **ARQUITECTURA DEL SISTEMA**

## 📁 **ESTRUCTURA DE ARCHIVOS**

```
Proyecto/
├── backend/                 # API REST con Express + TypeScript
│   ├── src/
│   │   ├── controllers/     # Controladores MVC
│   │   ├── models/         # Modelos de datos
│   │   ├── routes/         # Rutas de API
│   │   ├── middlewares/    # Middleware personalizado
│   │   ├── database/       # Conexión a MySQL
│   │   ├── schemas/        # Validación con Zod
│   │   └── uploads/        # Archivos subidos
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                # React App con Atomic Design
│   ├── src/
│   │   ├── atoms/          # Componentes básicos
│   │   ├── molecules/      # Grupos de átomos
│   │   ├── organisms/      # Secciones complejas
│   │   ├── templates/      # Páginas completas
│   │   ├── store/          # Estado global (Zustand)
│   │   ├── utilities/      # Funciones helper
│   │   ├── hooks/          # Custom hooks
│   │   └── __test__/       # Tests unitarios
│   ├── package.json
│   └── vite.config.js
│
└── README.md               # Este archivo
```

### 📊 **Arquitectura Backend - Patrón MVC**

![MVC Pattern](https://img.shields.io/badge/Pattern-Model_View_Controller-blue?style=flat-square&logo=typescript&logoColor=white)

#### **🔄 Flujo MVC:**
1. **Routes** → Reciben las peticiones HTTP y las dirigen al controlador apropiado
2. **Controllers** → Procesan la lógica de negocio y validaciones
3. **Models** → Interactúan con la base de datos MySQL
4. **Middlewares** → Manejan autenticación, CORS y subida de archivos

---

### 🎨 **Arquitectura Frontend - Atomic Design**

![Atomic Design](https://img.shields.io/badge/Design_System-Atomic_Design-FF6B6B?style=flat-square&logo=react&logoColor=white)


#### **🔄 Flujo Atomic Design:**
1. **Atoms** → Componentes básicos reutilizables (botones, inputs)
2. **Molecules** → Combinaciones de átomos (formularios, tarjetas)
3. **Organisms** → Secciones complejas (header, footer, tarjetas completas)
4. **Templates** → Layouts de páginas completas
5. **Store** → Gestión de estado global con Zustand

---

## 🛠️ **STACK TECNOLÓGICO**

### 🚀 **Backend Technologies**
![Backend Stack](https://img.shields.io/badge/Stack-Backend-darkgreen?style=flat-square)

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Node.js** | 22.x | Entorno de ejecución |
| **TypeScript** | 5.7.3 | Lenguaje principal |
| **Express** | 4.21.2 | Framework web |
| **MySQL** | 8.0+ | Base de datos relacional |
| **JWT** | 9.0.2 | Autenticación |
| **Bcrypt** | 5.1.1 | Encriptación de contraseñas |
| **Multer** | 1.4.5 | Subida de archivos |
| **Zod** | 3.24.1 | Validación de esquemas |
| **CORS** | 2.8.5 | Cross-Origin Resource Sharing |

### 🎨 **Frontend Technologies**
![Frontend Stack](https://img.shields.io/badge/Stack-Frontend-blue?style=flat-square)

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.3.1 | Biblioteca de UI |
| **JavaScript** | ES2022 | Lenguaje principal |
| **Vite** | 6.0.5 | Build tool y dev server |
| **Material-UI** | 6.4.4 | Componentes UI |
| **Sass** | 1.83.4 | Preprocesador CSS |
| **React Router** | 7.1.5 | Enrutamiento |
| **Zustand** | 5.0.3 | Gestión de estado |
| **Axios** | 1.7.9 | Cliente HTTP |
| **Day.js** | 1.11.13 | Manipulación de fechas |
| **Sonner** | 2.0.1 | Notificaciones toast |

### 🧪 **Testing & Development**
![Testing Stack](https://img.shields.io/badge/Stack-Testing-purple?style=flat-square)

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Jest** | 29.7.0 | Framework de testing |
| **Testing Library** | 16.2.0 | Testing utilities |
| **ESLint** | 9.20.0 | Linting de código |
| **Prettier** | 3.5.1 | Formateo de código |
| **Nodemon** | 3.1.9 | Auto-restart del servidor |

---

## 🚀 **GUÍA DE DESPLIEGUE**

### 📋 **Prerrequisitos**
- **Node.js** 20.x hasta 22.x LTS
- **MySQL** 8.0 o superior
- **npm** 6.x o superior  
- **Git** para clonar el repositorio

### 📦 **1. Instalación Inicial**

![Clone](https://img.shields.io/badge/Step_1-Clone_Repository-blue?style=flat-square&logo=git&logoColor=white)
![Install](https://img.shields.io/badge/Step_2-Install_Dependencies-green?style=flat-square&logo=npm&logoColor=white)

```bash
# Clonar repositorio
git clone https://github.com/SergioR-02/Software_Engineering.git
cd Software_Engineering/Proyecto

# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend  
cd ../frontend
npm install
```

### ⚙️ **2. Configuración de Base de Datos**

![Database](https://img.shields.io/badge/Config-MySQL_Database-orange?style=flat-square&logo=mysql&logoColor=white)

#### 🗄️ **Configurar MySQL**
```sql
-- Crear base de datos
CREATE DATABASE objetos_perdidos_unal;

-- Crear usuario (opcional)
CREATE USER 'objetos_user'@'localhost' IDENTIFIED BY 'tu_password';
GRANT ALL PRIVILEGES ON objetos_perdidos_unal.* TO 'objetos_user'@'localhost';
FLUSH PRIVILEGES;
```

### 🔧 **3. Variables de Entorno**

![Environment](https://img.shields.io/badge/Config-Environment_Variables-yellow?style=flat-square&logo=dotenv&logoColor=white)

#### 🔧 **Backend (.env)**
```bash
cd backend
# Crear archivo .env
echo "PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASS=tu_password_mysql
DB_NAME=objetos_perdidos_unal
DB_PORT=3306
JWT_SECRET=tu_jwt_secret_super_seguro
JWT_REFRESH_SECRET=tu_refresh_secret_super_seguro" > .env
```

#### 🎨 **Frontend (.env.local)**
```bash
cd ../frontend
# Crear archivo .env.local
echo "VITE_API_BASE_URL=http://localhost:3000" > .env.local
```

### 🏃 **4. Ejecución en Desarrollo**

![Development](https://img.shields.io/badge/Mode-Development-brightgreen?style=flat-square&logo=webpack&logoColor=white)

#### 🔹 **Paso 1: Iniciar Backend**
```bash
cd backend
npm run dev
```
- ✅ Backend se ejecuta en `http://localhost:3000`
- ✅ API REST disponible en `http://localhost:3000/auth` y `http://localhost:3000/user`

#### 🔹 **Paso 2: Iniciar Frontend**
```bash
cd ../frontend
npm run dev
```
- ✅ React app en `http://localhost:5173`
- ✅ Hot-reload automático

---

## 🧪 **TESTING**

![Testing](https://img.shields.io/badge/Testing-Jest_+_Testing_Library-red?style=flat-square&logo=jest&logoColor=white)

### **Ejecutar Tests Frontend**
```bash
cd frontend
npm test              # Ejecutar tests una vez
npm run test:watch    # Ejecutar tests en modo watch
```

### **Tests Incluidos**
- ✅ **Login.test.jsx** - Pruebas del formulario de login
- ✅ **Register.test.jsx** - Pruebas del formulario de registro
- ✅ **Home.test.jsx** - Pruebas de la página principal
- ✅ **ObjectDetails.test.jsx** - Pruebas de detalles de objetos

---



## 👥 **EQUIPO DE DESARROLLO**

| Desarrollador | Email | Rol |
|---------------|-------|-----|
| **Cristian Medina** | crmedinab@unal.edu.co | Full Stack Developer |
| **Cristian Montañez** | cmontanez@unal.edu.co | Full Stack Developer |
| **Justin Rodriguez** | jusrodriguez@unal.edu.co | Full Stack Developer |
| **Sergio Ruiz** | seruizh@unal.edu.co | Full Stack Developer |

---

## 📝 **FUNCIONALIDADES PRINCIPALES**

### 🔐 **Sistema de Autenticación**
- ✅ Registro con validación de email universitario
- ✅ Login seguro con JWT tokens
- ✅ Refresh tokens para sesiones persistentes
- ✅ Middleware de autenticación en rutas protegidas

### 📄 **Gestión de Reportes**
- ✅ Crear reportes de objetos perdidos/encontrados
- ✅ Subida de imágenes con Multer
- ✅ Editar y eliminar reportes propios
- ✅ Categorización por tipo de objeto

### 🔍 **Sistema de Búsqueda**
- ✅ Búsqueda por categoría, ubicación y fecha
- ✅ Filtros avanzados con palabras clave
- ✅ Resultados en tiempo real

### 👤 **Perfil de Usuario**
- ✅ Información personal editable
- ✅ Historial de reportes
- ✅ Gestión de objetos reportados

---

## 🔮 **FUTURAS MEJORAS**

![Roadmap](https://img.shields.io/badge/Status-Roadmap-lightblue?style=flat-square)

### 🚀 **Próximas Funcionalidades**
- [ ] **Notificaciones en tiempo real** con WebSockets
- [ ] **Sistema de chat** entre usuarios
- [ ] **Geolocalización** para reportes
- [ ] **App móvil** con React Native
- [ ] **Panel de administración** avanzado
- [ ] **API de estadísticas** y analytics
- [ ] **Integración con redes sociales**
- [ ] **Sistema de reputación** de usuarios

### 🛠️ **Mejoras Técnicas**
- [ ] **Dockerización** completa del proyecto
- [ ] **CI/CD pipeline** con GitHub Actions
- [ ] **Testing end-to-end** con Cypress
- [ ] **Monitoreo** con Sentry
- [ ] **Documentación API** con Swagger
- [ ] **Cache** con Redis
- [ ] **CDN** para imágenes

---

## 📄 **LICENCIA**

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🤝 **CONTRIBUCIONES**

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 **SOPORTE**

Si tienes preguntas o necesitas ayuda:

- 📧 Email: [seruizh@unal.edu.co](mailto:seruizh@unal.edu.co)
- 🐛 Issues: [GitHub Issues](https://github.com/SergioR-02/Software_Engineering/issues)
- 📖 Documentación: [Wiki del Proyecto](https://github.com/SergioR-02/Software_Engineering/wiki)

---

[![Universidad Nacional](https://img.shields.io/badge/Universidad-Nacional_de_Colombia-green?style=for-the-badge&logo=university&logoColor=white)](https://unal.edu.co/)
[![Ingeniería de Software](https://img.shields.io/badge/Materia-Ingeniería_de_Software-blue?style=for-the-badge)](https://ingenieria.bogota.unal.edu.co/)

---

*Desarrollado con ❤️ por el equipo de Ingeniería de Software - Universidad Nacional de Colombia*
