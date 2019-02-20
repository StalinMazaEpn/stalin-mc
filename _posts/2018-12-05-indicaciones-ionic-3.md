---
layout: post
title: Tips para usar IONIC 3
subtitle: "Las siguientes son indicaciones, tips y formas que aprendí leyendo documentación, en foros o en libros para usar IONIC 3 de manera correcta, espero sean utíles para ustedes, tal como fueron para mí"
author: "Stalin Maza"
permalink: /tips-usar-ionic-3/
category: Desarrollo Móvil
tags: [programación, movil dev, apps hibridas, Ionic]
---

Las siguientes son indicaciones, tips y formas que aprendí leyendo documentación, en foros o en libros para usar IONIC 3 de manera correcta, espero sean utíles para ustedes, tal como fueron para mí.

**Ver Documentación: <a href="https://ionicframework.com/docs/" target="_blank">Ionic</a>**

Ejecutamos el siguiente comando para instalar ionic en nuestro entorno.

- npm install -g cordova
- npm install -g ionic cordova

Para iniciar un nuevo proyecto debemos ejecutar el siguiente comando donde indicamos el nombre del proyecto y el tipo que puede ser: blank, tabs o sidebar.

- ionic start nombreProyecto blank

Si se desea generar una nueva pagina, ejecutamos el siguiente comando indicando el tipo de componente a generar seguido del nombre del componente.

- ionig g page primarios

Para poder observar el proyecto mediante el navegador debemos ejecutar el siguiente comando para lanzar un servidor web para observar el proyecto funcionando.

- ionic serve -l

Una vez que estamos seguro de que acabamos todo el proyecto o deseamos probar la aplicación en un emulador Android o generar el APK de la App debemos ejecutar el siguiente comando para añadir la plataforma en la que queremos generar el ejecutable, sea Android o iOS.

- ionic cordova platform add android
- ionic cordova platform add ios

Nota: Recuerda cada vez que quiera pasar a produccion (copilar apk) debes remover y volver a agregar la plataforma.

Una vez añadida la plataforma, sí se desea construir la aplicación debemos ejecutar el siguiente comando: 

- ionic cordova build android

Si tenemos instalado un emulador en Android, como por ejemplo cuando instalamos Android Studio debemos ejecutar el siguiente comando: 

- cordova emulate android

## **Problemas Comunes**

##### Directorio de los Assests en HTML y CSS

Se suele tener problemas al momento de compilar la aplicación respecto al directorio de los assets que funcionan correctamente al probar la aplicación en el servidor web pero al momento de compilar no se muestran correctamente.

Para esto se debe cambiar el path de _…/…/assets_ a _./assets_ , si haces esto funcionara correctamente en el dispositivo y en el navegador.  

En cambio para manejar assets en los estilos CSS o SASS se debe usar la siguiente ruta: _../assets/imgs_

#### Uso de Firebase

Para usar firebase en Ionic 3 debemos instalar la dependencia de firebase y angularfire con los siguientes comandos: 

- npm install --save firebase@4.5.2 - angularfire2@5.0.0-rc.3

#### Tamaños de los Iconos
------------------------

Para el icono de la aplicación se debe tener una imagen con las siguientes dimensiones.

_icon.png > 1024 x 1024_

En cambio para el splash o animación que aparece antes de cargar la aplicación, se debe tener las siguientes dimensiones.

_splash.png > 2732 x 2732_

