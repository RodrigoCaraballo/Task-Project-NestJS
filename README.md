
# Reactive REST API - Task Management Project

#### Full Stack Project - Front-End ([https://github.com/RodrigoCaraballo/Task-Project-Angular](https://github.com/RodrigoCaraballo/Task-Project-Angular))

### API Objective

This API was created with the goal of improving my personal programming skills with the NestJS Framework, and as an extra objective, to use it in the development of a functional web application to practice Full Stack skills. This API allows for the management of a user's tasks to handle tasks to be done, creation and editing. It also has a login system with JWT. The API is designed to be used with Firebase as a reference for user registration and login. Therefore, in the User entity, you can see the value "uid".

### API Requirements

#### Node.js

**ES - [https://www.youtube.com/watch?v=czFj5zoI5uc](https://www.youtube.com/watch?v=czFj5zoI5uc)** **EN - [https://www.youtube.com/watch?v=__7eOCxJyow](https://www.youtube.com/watch?v=__7eOCxJyow)**

#### PostgreSQL installation is required

**ES - [https://www.youtube.com/watch?v=cHGaDfzJyY4](https://www.youtube.com/watch?v=cHGaDfzJyY4)** **EN - [https://www.youtube.com/watch?v=0n41UTkOBb0&t=1s](https://www.youtube.com/watch?v=0n41UTkOBb0&t=1s)**

Once installed, proceed with these steps:

-   Open the GIT terminal (if you don't have it, download it from GIT and proceed with a normal installation)
-   Clone the project to the preferred directory using the following command: `git clone https://github.com/RodrigoCaraballo/Task-Project-NestJS.git`
-   Open the project folder and run the command `npm i` or `npm install`
-   Open the project in your preferred code editor
-   Create a .env file and define the following variables according to your PostgreSQL database: DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, SECRET_KEY
-   Run the command `npm run start:dev`
-   Ready to use.

### Using the API

It is recommended to use POSTMAN for API use, although you can use software of your choice.

#### Security Controller

**Sign Up**

-   URL ([http://localhost:3000/security/sign-up](http://localhost:3000/security/sign-up))
-   Body: uid(string) and username(string)
-   If the operation is successful, it will return a JWT, otherwise an error is thrown.

**Sign In**

-   URL ([http://localhost:3000/security/sign-in](http://localhost:3000/security/sign-in))
-   Body: uid(string) - _This value must be real, meaning it has been previously entered in the Sign Up method_
-   If the operation is successful, it will return a JWT, otherwise an error is thrown.

#### Task Controller

**Add Task**

-   URL ([http://localhost:3000/task/add-task](http://localhost:3000/task/add-task))
-   Body:
    -   title(string)
    -   description(string)
    -   deadline(Date, e.g.: "2023-05-01")
    -   completed(boolean)
    -   user(user id) - _This is randomly generated by the API and is visible from the database_
-   If the operation is successful, it will return an object of the Task class, otherwise it will indicate an error.

**Get Tasks By User**

-   URL ([http://localhost:3000/task/get-task/](http://localhost:3000/task/get-task/)<user-id>)
-   If the operation is successful, it will return a list of Task class objects associated with that user, otherwise it will indicate an error.


**Update Task**

-   URL ([http://localhost:3000/task/update-task/](http://localhost:3000/task/update-task/)<task-id>)
-   Body:
    -   title (string)
    -   description (string)
    -   deadline (Date, e.g. "2023-05-01")
    -   completed (boolean)
-   If the operation is successful, it will return a list of objects of the Task class associated with that user, otherwise it will indicate an error.

**Delete Task By Id**

-   URL ([http://localhost:3000/task/delete-task/](http://localhost:3000/task/delete-task/)<task-id>)
-   If the operation is successful, it will return true, otherwise it will indicate an error or return false.

**To use the API, it is recommended to use the Swagger documentation available at localhost:3000/swagger** _The documentation on Swagger is not yet complete. If you want to use the API, please refer to the controller files for the required format and use it with POSTMAN or your preferred software. Apologies._

_I am open to any suggestions that can improve the application and my personal development, thank you very much._

### Contact

#### [](https://github.com/RodrigoCaraballo#linkedin-httpswwwlinkedincominrodrigo-caraballo-1)LinkedIn ([https://www.linkedin.com/in/rodrigo-caraballo/](https://www.linkedin.com/in/rodrigo-caraballo/))

#### [](https://github.com/RodrigoCaraballo#correo-rodrigomcaraballo8gmailcom)Email ([rodrigomcaraballo8@gmail.com](mailto:rodrigomcaraballo8@gmail.com))
	
# API REST Reactiva - Proyecto de gestión de Tareas
#### Proyecto Full Stacj - Front-End (https://github.com/RodrigoCaraballo/Task-Project-Angular)
	
### Objetivo de la API
La creación de esta API se hizo con el objetivo de mejorar mis habilidades personales de programación con el Framework NestJS y con el objetivo extra de utilizarla en el desarrollo de un Web funcional para poner en practica habilidades de un Full Stack. Esta API permite la gestión de tareas de un usuario para gestionar tareas a realizar, creación y logrando editar las mismas. Además cuenta con un sistema de login con JWT, la API esta pensada para ser usada tomando a Firebase como referencia para el registro y inicio de sesión por eso se puede observar en la entidad Usuario que contiene el valor "uid".
### Requisitos para el uso de la API
#### Node.js 
**ES - https://www.youtube.com/watch?v=czFj5zoI5uc** 
**EN - https://www.youtube.com/watch?v=__7eOCxJyow**

#### Requiere instalación de PostgreSQL
**ES - https://www.youtube.com/watch?v=cHGaDfzJyY4** 
**EN - https://www.youtube.com/watch?v=0n41UTkOBb0&t=1s**

Una vez instalado proceder con estos otros pasos:
 - Abrir la terminal de GIT (En caso de no tener la terminal se debe descargar desde GIT y proceder con una instalación normal)
 - Clonar con el siguiente comando el proyecto en la ruta de su preferencia: ``git clone https://github.com/RodrigoCaraballo/Task-Project-NestJS.git``
 - Abrir la carpeta del proyecto y ejecutar el comando ``npm i`` o ``npm install``
 - Abrir el proyecto en el editor de código de su preferencia
 - Crear un archivo .env y definir las siguientes variables de acuerdo a su base de datos Postgres: DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, SECRET_KEY
 - Ejecutar el comando ``npm run start:dev``
 - Listo para usar.

### Uso de la API
Para el uso de la API se recomienda el uso de POSTMAN aunque puede utilizar el software de su preferencia

#### Security Controller
**Sign Up**
 - URL (http://localhost:3000/security/sign-up)
 - Body: uid(string) y username(string)
 - Si la operación fue correcta retornara un JWT de lo contrario lanza un error.
**Sign In**
 - URL (http://localhost:3000/security/sign-in)
 - Body: uid(string) - *Este valor debe ser un real, es decir uno ya ingresado previamente en el metodo Sign Up*
 - Si la operación fue correcta retornara un JWT de lo contrario lanza un error.
 #### Task Controller
**Add Task**
 - URL (http://localhost:3000/task/add-task)
 - Body: 
	-	title(string)
	-	description(string)
	-	deadline(Date, ej: ""2023-05-01")
	-	completed(boolean)
	-	user(id del usuario) - *Esta es generada de forma aleatoria por la API y es visible desde la BD*
 - Si la operación fue correcta retornara un objeto de la clase Tarea, de lo contrario indicara un error

**Get Tasks By User**
- URL (http://localhost:3000/task/get-task/<indicar-id-usuario>)
 - Si la operación fue correcta retornara un listado de objetos de la clase Tarea asociados a ese usuario, de lo contrario indicara un error

**Update Task**
 - URL (http://localhost:3000/task/update-task/<indicar-id-tarea>)
 -  - Body: 
	-	title(string)
	-	description(string)
	-	deadline(Date, ej: ""2023-05-01")
	-	completed(boolean)
 - Si la operación fue correcta retornara un listado de objetos de la clase Tarea asociados a ese usuario, de lo contrario indicara un error

**Delete Task By Id**
- URL (http://localhost:3000/task/delete-task/<indicar-id-tarea>)
 - Si la operación fue correcta retornara un true , de lo contrario indicara un error o retornara false

 **Para el uso de la API es recomendado utilizar la documentación de swagger entranado en localhost:3000/swagger**
 *La documentación en swagger aun no esta terminada por favor de querer utilizar la API entrar a los archivos del controlador para ver el formato necesario y utilizarla mediante POSTMAN o el software de su preferencia, disculpas*

*Estoy abierto a cualquier sugerencias que pueda mejorar la aplicación y mi desarrollo personal, muchas gracias.*
    
### Contacto

#### [](https://github.com/RodrigoCaraballo#linkedin-httpswwwlinkedincominrodrigo-caraballo-1)LinkedIn ([https://www.linkedin.com/in/rodrigo-caraballo/](https://www.linkedin.com/in/rodrigo-caraballo/))

#### [](https://github.com/RodrigoCaraballo#correo-rodrigomcaraballo8gmailcom)Correo ([rodrigomcaraballo8@gmail.com](mailto:rodrigomcaraballo8@gmail.com))
