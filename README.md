# Sistema de Gestión de Solicitudes de Soporte TI

Proyecto desarrollado con NestJS para gestionar solicitudes de soporte TI.

La aplicación permite crear, consultar, buscar, actualizar y eliminar solicitudes, utilizando MySQL para guardar la información.

## Tecnologías utilizadas

- NestJS
- TypeScript
- MySQL
- TypeORM
- Class Validator
- Swagger
- Node.js

## Requisitos

Para ejecutar el proyecto se necesita tener instalado:

- Node.js
- npm
- MySQL
- Git

## Instalación

Primero clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
````

Entrar a la carpeta:

```bash
cd backend-solicitudes-ti
```

Instalar las dependencias:

```bash
npm install
```

## Configuración de la base de datos

Crear una base de datos MySQL llamada:

```text
solicitudes_ti
```

Luego crear un archivo `.env` en la carpeta principal del proyecto.

Ejemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=TU_CONTRASEÑA
DB_DATABASE=solicitudes_ti
```

La contraseña debe ser la de tu instalación local de MySQL.

## Ejecutar el proyecto

Para iniciar el servidor:

```bash
npm run start:dev
```

El servidor se ejecuta en:

```text
http://localhost:3000
```

## Swagger

La documentación de los endpoints se puede revisar desde:

```text
http://localhost:3000/api
```

## Endpoints

### Obtener todas las solicitudes

```http
GET /solicitudes
```

### Obtener una solicitud

```http
GET /solicitudes/:id
```

### Crear una solicitud

```http
POST /solicitudes
```

Ejemplo:

```json
{
  "titulo": "Problema con impresora",
  "descripcion": "La impresora no funciona correctamente",
  "cliente": "Pedro Perez",
  "categoria": "Hardware",
  "prioridad": "Alta",
  "fechaSolicitud": "2026-09-11"
}
```

El estado se asigna automáticamente como `Pendiente`.

### Actualizar una solicitud

```http
PUT /solicitudes/:id
```

### Eliminar una solicitud

```http
DELETE /solicitudes/:id
```

Solo se pueden eliminar solicitudes que estén en estado `Finalizada`.

### Buscar solicitudes

Por estado:

```http
GET /solicitudes/buscar?estado=Pendiente
```

Por prioridad:

```http
GET /solicitudes/buscar?prioridad=Alta
```

Por categoría:

```http
GET /solicitudes/buscar?categoria=Redes
```

También se pueden combinar filtros:

```http
GET /solicitudes/buscar?categoria=Redes&estado=Pendiente
```

## Reglas de negocio

* El título debe tener mínimo 5 caracteres.
* El cliente es obligatorio.
* La descripción debe tener mínimo 15 caracteres.
* Las categorías disponibles son Hardware, Software, Redes, Seguridad y Soporte Usuario.
* Las prioridades disponibles son Baja, Media, Alta y Crítica.
* Las solicitudes nuevas quedan automáticamente en estado `Pendiente`.
* La fecha de solicitud no puede ser posterior a la fecha actual.
* Una solicitud solo puede eliminarse cuando está `Finalizada`.
* Una solicitud `Finalizada` no puede volver a `Pendiente`.
* Si se busca, actualiza o elimina una solicitud que no existe, se devuelve un error.

## Etapas del proyecto

### Etapa 1

Creación de la estructura inicial del proyecto y los módulos principales.

### Etapa 2

Configuración de MySQL, TypeORM y las validaciones de las solicitudes.

### Etapa 3

Implementación del CRUD, búsquedas y reglas de negocio.

### Etapa 4

Pruebas mediante Swagger y revisión final del proyecto.

## Pruebas realizadas

Se probaron los principales endpoints utilizando Swagger y Thunder Client:

* Crear solicitudes.
* Consultar solicitudes.
* Buscar por estado.
* Buscar por prioridad.
* Buscar por categoría.
* Combinar filtros.
* Actualizar solicitudes.
* Eliminar solicitudes.
* Validar fechas.
* Validar datos obligatorios.
* Validar cambios de estado.
* Consultar IDs que no existen.

