#!/usr/bin/env node

'use strict';

const fs = require('fs'),
	[, , ...args] = process.argv /* interpreta comandos en cli*/,
	toAbsolutePath = require('to-absolute-path');

// diferenciación de carpeta y archivo
const directoryFile = () => {
	// convierte ruta relativa en absoluta
	const route = toAbsolutePath(args[0]);

	fs.stat(route, (err, stats) => {
		if (stats.isDirectory()) {
			console.log(stats.isDirectory());
		}
		if (stats.isFile()) {
			console.log('es archivo');
		}
	});
};

directoryFile();

// ruta de la carpeta
// const mdLinks = () => {
// 	console.log(`La ruta es ${args[0]}`);
// };

// mdLinks();

// validacion de opciones en comando
// if (args[1] === '--stats' && args[2] === '--validate') {
// 	console.log(args[1], args[2]);
// } else if (args[1] === '--stats' && args[2] === undefined) {
// 	console.log(`la opcion es ${args[1]}`);
// } else if (args[1] === '--validate' && args[2] === undefined) {
// 	console.log(`la opcion es ${args[1]}`);
// }

// lee archivos
// fs.readFile('prueba/README.md', 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// lee directorios
// fs.readdir('prueba', 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// fs.readdir('prueba', 'utf8', (err, data) => {
// 	if (err) throw err;
// 	data.map(contenido => {
// 		console.log(path.extname(contenido));
// 	});
// });
