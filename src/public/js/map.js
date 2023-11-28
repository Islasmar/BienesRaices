/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/map.js":
/*!************************!*\
  !*** ./src/lib/map.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const lat = 20.617893; \r\n    const lng =  -97.818094;\r\n    const map = L.map('map').setView([lat, lng ], 16);\r\n    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n        attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\"> openstreetmap</a> contributors'\r\n    }).addTo(map);\r\n\r\n    // Añadir marcador inicial al mapa\r\n    const marker = L.marker([20.617893,  -97.818094], { \r\n        draggable: true,\r\n        autoPan:true\r\n     }).addTo(map);\r\n\r\n\r\n    const currentDate = new Date();\r\n    const lastVisitDate = localStorage.getItem('lastVisitDate');\r\n    localStorage.setItem('lastVisitDate', currentDate.toString());\r\n    const lastVisitMessageDiv = document.getElementById('lastVisitMessage');\r\n    if (lastVisitDate) {\r\n        lastVisitMessageDiv.innerText = `Última fecha de vista del mapa: ${lastVisitDate}`;\r\n    } else {\r\n        lastVisitMessageDiv.innerText = 'Esta es tu primera visita al mapa.';\r\n    }\r\n   \r\n \r\n\r\n\r\n    // Función para actualizar la información de la calle\r\n    function actualizarInformacionCalle(latlng) {\r\n        const geocodeService = L.esri.Geocoding.geocodeService();\r\n        geocodeService.reverse().latlng(latlng).run(function (error, resultado) {\r\n            if (error) {\r\n                console.error(error);\r\n                return;\r\n            }\r\n\r\n            // Actualizar el popup del marcador con la dirección\r\n            marker.bindPopup(`<b>Dirección:</b> ${resultado.address.Match_addr}`).openPopup();\r\n\r\n            // También puedes actualizar otros elementos del DOM\r\n            const calleElement = document.querySelector('.calle');\r\n            const mapaElement = document.querySelector('#mapa');\r\n            const latElement = document.querySelector('#lat');\r\n            const lngElement = document.querySelector('#lng');\r\n\r\n            if (calleElement) calleElement.textContent = resultado.address.Address || '';\r\n            if (mapaElement) mapaElement.value = resultado.address.Address || '';\r\n            if (latElement) latElement.value = resultado.latlng.lat || '';\r\n            if (lngElement) lngElement.value = resultado.latlng.lng || '';\r\n        });\r\n    }\r\n\r\n    // Llama a la función para actualizar la información de la calle cuando se carga la página\r\n    const latlng = marker.getLatLng();\r\n    actualizarInformacionCalle(latlng);\r\n\r\n    // Actualiza el contenido del popup antes de la primera vez que se muestra\r\n    marker.once('popupopen', function () {\r\n        const latlng = marker.getLatLng();\r\n        actualizarInformacionCalle(latlng);\r\n    });\r\n\r\n    // Manejador de eventos para el evento dragend del marcador\r\n    marker.on('dragend', function (event) {\r\n        const marker = event.target;\r\n        const latlng = marker.getLatLng();\r\n\r\n        // Llama a la función para actualizar la información de la calle con las nuevas coordenadas\r\n        actualizarInformacionCalle(latlng);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://mx.edu.utxj.ti.dsm.awos.bienesraices-220192/./src/lib/map.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/lib/map.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;