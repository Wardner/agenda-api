DROP DATABASE IF EXISTS agenda

CREATE DATABASE agenda
use agenda

CREATE TABLE contactos(
	id int primary key identity(1,1),
	nombre varchar(20) not null,
	apellido varchar(20) not null,
	telefono varchar(15) not null,
	correo varchar(30),
	fecha_nacimiento date
)

CREATE TABLE actividades(
	id int primary key identity(1,1),
	titulo varchar(40) not null,
	ubicacion varchar(25) not null,
	fecha date not null,
	descripcion varchar(60)
)
