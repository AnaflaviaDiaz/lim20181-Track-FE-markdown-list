# Markdown Links

Esta librería te permite extraer los links de archivos Markdown, sacar estadísticas de links, hacer peticiones HTTP y ver el resultado de estas consultas.

Los archivos markdown son renderizados con Marked que los convierte en formato HTML. Para validar la respuesta HTTP de los links de archivos Markdown debes escribir en CLI la ruta de archivos o carpetas que deseas consultar. Por otra parte, para las estadísticas obtendrás la cantidad total de links que encontró en la ruta que escribiste en CLI y también el total de los links únicos. Asímismo, puedes sacar las estadísticas del total de los links rotos (respuesta HTTP fallida).

## Instalación

`npm i --save-dev @anaflaviadiazmartel/md-links`

## Versión

0.1.5

## Uso en CLI

`$ md-links <route> <options>`
----------------------
`<route>` es la ruta del archivo o carpeta a evaluar de tu proyecto.

`<options>` debe tener los valores de:

`--stats` muestra cantidad de links en total y cantidad de links únicos.

`--validate` muestra ruta de archivo, texto de referencia, link, estado de link.

`--stats --validate` muestra cantidad de links en total, cantidad de links únicos y cantidad de links rotos.

## Ejemplos - Demo

Instalar la librería en el proyecto `npm i --save-dev @anaflaviadiazmartel/md-links`
[![npmi](https://imgur.com/VG3t7JN.png)](https://imgur.com/VG3t7JN.png)
[![files](https://imgur.com/IiyvZsA.png)](https://imgur.com/IiyvZsA.png)

Escribe en CLI el comando `md-links <ruta del archivo o carpeta de tu proyecto>`, en consola mostrará un arreglo de objetos que tendrán el link, el texto y la ruta del archivo markdown encontrado.

[![route file](https://imgur.com/GgvaLVT.png)](https://imgur.com/GgvaLVT.png)

Para determinar cuántos links hay en total de la ruta escrita en CLI y los links únicos se escribe en CLI:
`md-links <ruta del archivo o carpeta> --stats`

[![stats](https://imgur.com/kTatZYH.png)](https://imgur.com/kTatZYH.png)

Para determinar cuántos links hay en total de la ruta escrita en CLI, los links únicos y el número de links que como respuesta a la consulta HTTP retornan una falla se escribe en CLI:
`md-links <ruta del archivo o carpeta> --stats --validate`

[![statsvalidate](https://imgur.com/VTCxP5o.png)](https://imgur.com/VTCxP5o.png)

Para hacer las consultas HTTP de nuestros links en los archivos markdown se escribe en CLI:
`md-links <ruta del archivo o carpeta> --validate`

[![npmi](https://imgur.com/AbUiaVg.png)](https://imgur.com/AbUiaVg.png)

El resultado de la consulta HTTP se muestra en la propiedad *status*.

## [Backlog de la implementación de la librería @anaflaviadiazmartel/md-links](https://github.com/AnaflaviaDiaz/lim20181-Track-FE-markdown-list/projects/1)
