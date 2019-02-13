---
layout: post
title: Eliminar Videos que me Gustan de Youtube
permalink: /remover-videos-gustan-youtube-2019/
category: Tecnologiá
tags: [web, tecnología, youtube, javascript]
---

Para eliminar de la Playlist, los videos que te gustan de manera masiva de Youtube debes seguir los siguientes pasos: 

1. En la Nueva Versión de Youtube debes hacer clic en la opción de editar el playlist de los videos
    que te gustan.
2. Estando en esa ventana, debes abrir la consola del desarrollador, haciendo click derecho en la pantalla
   y seleccionando la opción de inspeccionar elemento.
3. Estando en la consola del desarrollador, accedemos a la pestaña de consola y para que funciones debemos hacer
   scroll en los vídeos hasta llegar al último video o al video hasta el cual lo queremos eliminar.
4. Hecho esto debemos ingresar el siguiente código en la consola: 

```js

  //Código para eliminar los vídeos que me gustan  
  let items = $('body').getElementsByClassName("pl-video-edit-remove-liked-video"); 
 
  for(var i = 0; i < items.length; i++){
      items[i].click();
  }
  
```

Nota: si no funciona, procura cada vez que elimines cierta cantidad de videos, recargar la página y ejecutar los pasos anteriores.
