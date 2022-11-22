Requiere de PHP, mySQL y NodeJS

Crud-con-PHP: Carpeta contenendora del backend de la aplicación y la base de datos SQL
front_crud_php: Carpeta contenedora de los recursos y codificación utilizados para el frontend de la aplicación
La base de datos se tiene que llamar weird_database.
Montaje de la aplicación:
-Mover la carpeta Crud-con-PHP a la carpeta htdocs en apache Server o XAMPP
-Insertar la base de datos, creando una base de datos llamada "weird_database"
-Correr el frontend desde VSCode y ejecutar "npm start" en la terminal

En caso de alguna variación en el directorio del backend, configurar el siguiente archivo:
\front_crud_php\src\config.js

En caso de variación en los parámetros del servidor de base de datos, configurar el siguiente archivo:
\Crud-con-PHP\utils\connection\config

Usuario para probar:
Benitito
root1234