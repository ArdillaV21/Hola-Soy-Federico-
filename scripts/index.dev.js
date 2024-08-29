"use strict";

// Declaraciones
var menuButton = document.getElementById('menu-button');
var menuList = document.getElementById('menu-list');
var mapFrame = document.querySelector('');
var mapButton = document.querySelector(''); // Funciones

function toggle(element) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "active";
  element.classList.toggle(className);
} // Eventos


menuButton.onclick = function () {
  return toggle(menuList);
};