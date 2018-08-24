#!/usr/bin/env node

'use strict';

const path = require('path');
const [, , ...args] = process.argv;
const result = [];
const mdLinks = require('./index.js');
const resolvePath = require('./filedirectory.js');
let route;
const usage = () => {
	console.log(`\n Uso: \n\n$ md-links <route> <options> \n\n<route> es la ruta del archivo o carpeta a evaluar \n<options> tendrán los valores de:
--stats, muestra cantidad de links y cantidad de links únicos \n--validate, muestra ruta de archivo, texto de referencia, link, estado de link \n--stats --validate, muestra cantidad de links, cantidad de links únicos y cantidad de links rotos`);
};

if (args[0] !== undefined) {
	if (!path.isAbsolute(args[0])) {
		route = path.join(process.cwd(), args[0]);
	} else {
		route = args[0];
	}
}

const options = {
	validate: false,
	stats: false
};

if (args[1] === undefined && route) {
	resolvePath(route, result).then(response => console.log(response));
} else if (args[1] === '--stats' && args[2] === '--validate' && route) {
	options.stats = true;
	options.validate = true;
	mdLinks(route, options).then(response => console.log(response));
} else if (args[1] === '--stats' && args[2] === undefined && route) {
	options.stats = true;
	mdLinks(route, options).then(response => console.log(response));
} else if (args[1] === '--validate' && args[2] === undefined && route) {
	options.validate = true;
	mdLinks(route, options).then(response => console.log(response));
} else if (args[1] !== '--stats' || args[1] !== '--validate' || args[2] !== '--validate' || args[0] !== undefined) usage();
