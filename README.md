# Markdown Links

Esta librería te permite extraer los links de archivos Markdown, sacar estadísticas de links, hacer peticiones HTTP y ver el resultado de estas consultas. Puedes mandar la ruta de un archivo o carpeta de manera relativa (../markdown/README.md) o absoluta (C:\Users\Anaflavia\Desktop\proy_lab\markdown\README.md).

Los archivos markdown son renderizados con Marked que los convierte en formato HTML. Para validar la respuesta HTTP de los links de archivos Markdown debes escribir en CLI la ruta de archivos o carpetas que deseas consultar. Por otra parte, para las estadísticas obtendrás la cantidad de total links que encontró en la ruta que escribiste en CLI y también el total de los links únicos. Asímismo, puedes sacar las estadísticas del total de los links rotos (respuesta HTTP fallida).

## Instalación

`npm i --save-dev @anaflaviadiazmartel/md-links`

## Versión

0.1.4

## Uso en CLI

`$ md-links <route> <options>`
----------------------
`<route>` es la ruta del archivo o carpeta a evaluar.

`<options>` debe tener los valores de:

`--stats` muestra cantidad de links en total y cantidad de links únicos.

`--validate` muestra ruta de archivo, texto de referencia, link, estado de link.

`--stats --validate` muestra cantidad de links en total, cantidad de links únicos y cantidad de links rotos.

## Ejemplos - Demo

vvvvvv

## [Backlog de la implementación de la librería @anaflaviadiazmartel/md-links](https://github.com/AnaflaviaDiaz/lim20181-Track-FE-markdown-list/projects/1)

## Hacker edition

- Puedes agregar más estadísticas.
- Integración continua con Travis o Circle CI.
