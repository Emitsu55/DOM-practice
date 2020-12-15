// Esta funcion lo que hace es que el codigo espere a que el html termine de cargar antes de ejecutarse

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    //Seleccionar elemenots por su ID
  /*
    const logo = document.getElementById('logo');

    const navegacion = document.getElementById('navegacion');
    
    navegacion.style.display ='none';
  */

  //Seleccionar elementos por su clase
  /* const blogArt = document.getElementsByClassName('articulo-blog');
    
  console.log(blogArt);
  console.log(blogArt[2]);

  const contenido = document.getElementsByClassName('contenido-blog');
  console.log(contenido);
*/

//seleccionar elementos por su tipo
/*
  let enlaces = document.getElementsByTagName('a');
  console.log(enlaces.length);

  for(let i = 0; i < enlaces.length;i++) {
    enlaces[i].setAttribute('target', '_blank')
  }

  let enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
  console.log(enlacesSidebar);
  for(let i = 0; i < enlacesSidebar.length; i++){
    enlacesSidebar[i].setAttribute('href', 'https://www.google.com.ar');
  }
*/ 

//Selectos por querys - Se llaman igual que se llamarian en css

/*

let logo = document.querySelector('.logo');
console.log(logo);
let encabezado = document.querySelector('aside h2');
console.log(encabezado);
console.log(encabezado.innerText);
//con innerText puedo acceder al text de por ejemplo un h2
let pruebaDeAll = document.querySelectorAll('h2, footer p'); //sirve para seleccionar todos los de un mismo tipo
console.log(pruebaDeAll);

let enlaces = document.querySelectorAll('a');
for(let i = 0; i < enlaces.length; i++){
  console.log(enlaces[i].innerText);
}

*/
//nodos y sus atributos
/*
let enlacesMenu = document.querySelectorAll('#menu ul li a')[3];
console.log(enlacesMenu.nodeType);
console.log(enlacesMenu.nodeName);
console.log(enlacesMenu.attributes);
console.log(enlacesMenu);
console.log(enlacesMenu);

enlacesMenu.firstChild.nodeValue = "Home TT"
*/

//Agregar contenido crear un nodo
/*
let siedebar = document.querySelector('#sidebar');
let nuevoElemento = document.createElement('H1');
let nuevoTexto = document.createTextNode('Hola Mundo');
nuevoElemento.appendChild(nuevoTexto);
siedebar.appendChild(nuevoElemento);
*/

//Agregar entrada 6
/*
let enlacesSidebar = document.querySelectorAll('#sidebar ul');
//creando el enlace
let nuevoEnlace = document.createElement('A');
nuevoEnlace.setAttribute('href', '#')
let textoEnlace = document.createTextNode('Entrada 6');
nuevoEnlace.appendChild(textoEnlace);
//Creando la lista
let nuevaLista = document.createElement('LI');
nuevaLista.appendChild(nuevoEnlace);
//Insertarlo al UL
enlacesSidebar[0].appendChild(nuevaLista);
*/

//clonar un nodo
/*
let contenido = document.querySelectorAll('main');
console.log(contenido);

let nuevoContenido = contenido[0].cloneNode(true);
let sidebar = document.querySelector('aside');
sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);
*/

//seccion post mas visitados clonada
/*
let sidebar = document.querySelector('aside');
let masVisitados = document.createElement('H2');
let textoVisitados = document.createTextNode('Posts mas visitados:');
masVisitados.appendChild(textoVisitados);
sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);
let contenido = document.querySelectorAll('main h2');
for(let i = 0; i < contenido.length; i++) {
  let nuevoElemento = document.createElement('LI');
  let nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
  nuevoElemento.appendChild(nuevoTexto);
  sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
}
*/


//Eliminar nodos

// let primerPost = document.querySelector('main article');

// primerPost.parentNode.removeChild(primerPost);

// let enlaces = document.querySelectorAll('#navegacion nav ul li a')[10]; //puedo detenrminar eliminar un numero especifico asi
// enlaces.parentNode.removeChild(enlaces);

//reemplazar nodos
//reemplazar por nodo existente
let viejoNodo = document.querySelector('main h2');
// let nuevoNodo = document.querySelector('footer h2');
// viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo)

//reemplazar por nodo nuevo

let nuevoTitulo = document.createElement('H2');
let nuevoTexto = document.createTextNode('Hola Mundo');
nuevoTitulo.appendChild(nuevoTexto);
viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo)


  });
  
})();