// Esta funcion lo que hace es que el codigo espere a que el html termine de cargar antes de ejecutarse

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
  /*
    const logo = document.getElementById('logo');

    const navegacion = document.getElementById('navegacion');
    
    navegacion.style.display ='none';
  */

  const blogArt = document.getElementsByClassName('articulo-blog');
    
  console.log(blogArt);
  console.log(blogArt[2]);

  const contenido = document.getElementsByClassName('contenido-blog');
  console.log(contenido);
    
  });
  
})();