# Sistema de Solicitudes de Soporte TI

Este proyecto lo hice para crear una API que permita registrar y administrar solicitudes de soporte TI. La API permite crear solicitudes, verlas, modificarlas, eliminarlas y también buscarlas usando algunos filtros.

## Requisitos

Para poder ejecutar el proyecto se necesita tener instalado: Node.js, npm y MySQL

## Configuración

Primero se debe crear una base de datos llamada solicitudes_ti.

Después, en la carpeta principal del proyecto se debe crear un archivo .env con la configuración de MySQL:


DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=.....
DB_DATABASE=solicitudes_ti


La contraseña real se mantiene solamente en el archivo .env y no se sube al repositorio.

## Instalación y ejecución

Primero se clona el repositorio:

git clone https://github.com/DarkAngelCV/backend-solicitudes-ti.git
cd backend-solicitudes-ti


Después instalé las dependencias necesarias con:

npm install


Para ejecutar el proyecto uso:

npm run start:dev


El servidor queda funcionando en http://localhost:3000.

## Endpoints

Implementé los siguientes endpoints:

GET /solicitudes
Lo utilicé para obtener todas las solicitudes registradas.

GET /solicitudes/:id
Permite buscar una solicitud específica usando su ID.

GET /solicitudes/buscar
Lo implementé para poder buscar solicitudes usando estado, prioridad y categoría. También se pueden combinar estos filtros.

POST /solicitudes
Permite registrar una nueva solicitud. Al crearla, queda inicialmente con estado Pendiente.

PUT /solicitudes/:id
Permite modificar los datos de una solicitud existente.

DELETE /solicitudes/:id
Permite eliminar una solicitud cuando cumple con las condiciones establecidas.

También agregué Swagger para poder revisar y probar los endpoints desde http://localhost:3000/api.

## Etapas de desarrollo

### Etapa 1

En esta primera etapa armé la estructura del proyecto con NestJS. También configuré la conexión con MySQL, creé la entidad Solicitud y dejé funcionando la estructura inicial del CRUD.

Commit: feat: estructura inicial del proyecto

### Etapa 2

En esta etapa agregué la búsqueda de solicitudes. Se puede buscar por estado, prioridad y categoría. También agregué los parámetros para poder probar estas búsquedas desde Swagger.

Commit: docs: mejorar parametros de busqueda en Swagger

### Etapa 3

Después agregué las validaciones y reglas de negocio. Validé los datos que recibe la API y agregué reglas para los estados, prioridades, categorías y fechas. También hice que una solicitud finalizada no pueda volver a Pendiente y que solo se puedan eliminar solicitudes finalizadas.

Commit: feat: reforzar reglas de negocio y validaciones

### Etapa 4

En la última etapa completé la documentación del proyecto y agregué el README con los requisitos, configuración, endpoints, instalación y las etapas que fui realizando.

Commit: docs: completar documentacion final del proyecto
