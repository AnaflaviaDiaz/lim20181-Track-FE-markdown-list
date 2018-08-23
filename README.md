# Markdown Links

Esta librería te permite extraer los links de archivos Markdown, sacar estadísticas de links, hacer peticiones HTTP y ver el resultado de estas consultas.

Los archivos markdown son renderizados con Marked que los convierte en formato HTML. Para validar la respuesta HTTP de los links de archivos Markdown debes escribir en CLI la ruta de archivos o carpetas que deseas consultar. Por otra parte, para las estadísticas obtendrás la cantidad total de links que encontró en la ruta que escribiste en CLI y también el total de los links únicos. Asímismo, puedes sacar las estadísticas del total de los links rotos (respuesta HTTP fallida).

## Instalación

`npm i --save-dev @anaflaviadiazmartel/md-links`
`npm link`

## Versión

0.1.4

## Uso en CLI

`$ md-links <../../../route> <options>`
----------------------
`<route>` es la ruta del archivo o carpeta a evaluar de tu proyecto.

`<options>` debe tener los valores de:

`--stats` muestra cantidad de links en total y cantidad de links únicos.

`--validate` muestra ruta de archivo, texto de referencia, link, estado de link.

`--stats --validate` muestra cantidad de links en total, cantidad de links únicos y cantidad de links rotos.

## Ejemplos - Demo

Instalar la librería en el proyecto `npm i --save-dev @anaflaviadiazmartel/md-links` y `npm link`
[![npmi](https://imgur.com/vZsyeYX.png)](https://imgur.com/vZsyeYX.png)

La ruta por defecto es el de la librería, por lo que se debe concatenar antes de la ruta con (`../../../`), de esta manera sale de **node_modules** y recién va concatenado con la ruta relativa de la carpeta o archivo de tu proyecto para evaluar los links en archivos Markdown.

Cuando pongamos el comando `md-links <../../../ruta del archivo o carpeta>` obtendremos un arreglo de objetos que tendrán el link, el texto y la ruta del archivo markdown encontrado.

[![npmi](https://imgur.com/mqKCSPV.png)](https://imgur.com/mqKCSPV.png)

Para determinar cuántos links hay en total de la ruta escrita en CLI y los links únicos se escribe en CLI:
`md-links <../../../ruta del archivo o carpeta> --stats`

[![npmi](https://imgur.com/PV7XpUM.png)](https://imgur.com/PV7XpUM.png)

Para determinar cuántos links hay en total de la ruta escrita en CLI,los links únicos y el número de links que como respuesta a la consulta HTTP retornan una falla se escribe en CLI:
`md-links <../../../ruta del archivo o carpeta> --stats --validate`

[![npmi](https://imgur.com/PLosLnQ.png)](https://imgur.com/PLosLnQ.png)

Para hacer las consultas HTTP de nuestros links en los archivos markdown se escribe en CLI:
`md-links <../../../ruta del archivo o carpeta> --validate`

[![npmi](https://imgur.com/YN7LCry.png)](https://imgur.com/YN7LCry.png)*

El resultado de la consulta se muestra en la propiedad *status*.

## [Backlog de la implementación de la librería @anaflaviadiazmartel/md-links](https://github.com/AnaflaviaDiaz/lim20181-Track-FE-markdown-list/projects/1)
