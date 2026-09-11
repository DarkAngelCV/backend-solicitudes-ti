# Sistema de Solicitudes de Soporte TI

Este proyecto consiste en una API para gestionar solicitudes de soporte TI. Permite crear, consultar, modificar y eliminar solicitudes, además de buscar solicitudes según su estado, prioridad o categoría.

## Tecnologías

El proyecto fue desarrollado utilizando NestJS, TypeScript, MySQL, TypeORM, Swagger y class-validator.

## Requisitos

Para ejecutar el proyecto se necesita tener instalado Node.js, npm y MySQL.

## Configuración

Primero se debe crear una base de datos llamada `solicitudes_ti`.

Luego se debe crear un archivo `.env` en la carpeta principal del proyecto con los datos de conexión a MySQL.


DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=TU_CONTRASEÑA
DB_DATABASE=solicitudes_ti


## Instalación

Después de clonar el proyecto, se deben instalar las dependencias con `npm install`.

Para iniciar el proyecto se puede utilizar `npm run start:dev`.

## Swagger

La documentación de la API está disponible en `http://localhost:3000/api`.

Desde Swagger se pueden probar los distintos endpoints del sistema.

## Endpoints

El sistema cuenta con endpoints para crear, consultar, modificar y eliminar solicitudes.

También existe una opción de búsqueda que permite filtrar las solicitudes por estado, prioridad y categoría.

## Reglas

Las solicitudes se crean inicialmente con estado Pendiente. La fecha de solicitud no puede ser posterior a la fecha actual.

Los estados disponibles son Pendiente, En Proceso y Finalizada. Las prioridades disponibles son Baja, Media, Alta y Crítica.

Una solicitud que ya está Finalizada no puede volver a Pendiente y solamente se pueden eliminar solicitudes que estén Finalizadas.

## Desarrollo

El proyecto se desarrolló en cuatro etapas. Primero se creó la estructura del proyecto y la conexión con MySQL. Después se implementó el CRUD de solicitudes.

En la tercera etapa se agregaron las validaciones y reglas de negocio. Finalmente se agregó la documentación mediante Swagger y se completó el README.
