# Sistema de Solicitudes de Soporte TI

Este proyecto consiste en una API para gestionar solicitudes de soporte TI. Permite crear, consultar, modificar y eliminar solicitudes, además de realizar búsquedas por estado, prioridad y categoría.

## Requisitos

Para ejecutar el proyecto se necesita tener instalado: Node.js, npm, MySQL

## Configuración

Se debe crear una base de datos llamada `solicitudes_ti`.

También se debe crear un archivo `.env` en la carpeta principal del proyecto con la configuración de conexión a MySQL:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=....
DB_DATABASE=solicitudes_ti
```


## Instalación y ejecución

Primero se clona el repositorio y se entra a la carpeta del proyecto.

```bash
git clone https://github.com/DarkAngelCV/backend-solicitudes-ti.git
cd backend-solicitudes-ti
```

Después se instalan las dependencias:

```bash
npm install
```

Para iniciar el proyecto:

```bash
npm run start:dev
```

El servidor se ejecuta en `http://localhost:3000`.

## Endpoints

El proyecto cuenta con los siguientes endpoints:

`GET /solicitudes`

Permite obtener todas las solicitudes.

`GET /solicitudes/:id`

Permite obtener una solicitud específica mediante su ID.

`GET /solicitudes/buscar`

Permite buscar solicitudes utilizando filtros de estado, prioridad y categoría.

`POST /solicitudes`

Permite crear una nueva solicitud.

`PUT /solicitudes/:id`

Permite modificar una solicitud existente.

`DELETE /solicitudes/:id`

Permite eliminar una solicitud cuando cumple con las condiciones establecidas.

## Swagger

La documentación y las pruebas de los endpoints se pueden realizar desde:

`http://localhost:3000/api`

## Etapas de desarrollo

### Etapa 1 - Estructura inicial

Se creó la estructura inicial del proyecto con NestJS, se configuró la conexión con MySQL y se creó la entidad para las solicitudes.

Commit: `feat: estructura inicial del proyecto`

### Etapa 2 - Búsqueda y documentación

Se agregó la búsqueda de solicitudes mediante estado, prioridad y categoría. También se agregaron los parámetros correspondientes para poder probar los filtros desde Swagger.

Commit: `docs: mejorar parametros de busqueda en Swagger`

### Etapa 3 - Validaciones y reglas de negocio

Se agregaron validaciones para los datos ingresados y reglas para controlar los estados, fechas, prioridades, categorías y eliminación de solicitudes.

Commit: `feat: reforzar reglas de negocio y validaciones`

### Etapa 4 - Documentación final

Se completó la documentación del proyecto, incluyendo las instrucciones de instalación, configuración, endpoints y funcionamiento general.

Commit: `docs: completar documentacion final del proyecto`
