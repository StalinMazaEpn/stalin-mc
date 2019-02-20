---
layout: post
title: "Jekyll Portable en Windows"
subtitle:   "Aprende a usar de forma fácil Jekyll Portable en Windows."
permalink: /jekyll-portable-windows-2019/
category: Programación
header-img: "/images/jekyll-github.png"
author:  "Stalin Maza"
tags: [programación, dev, ruby, jekyll]
---

En el dia a dia, por alguna razón debemos instalar alguna herramienta que solo sera utilizada pocas veces, por lo que una versión portable de la misma es una opción muy útil.

Para este caso, el blog que estas leyendo esta levantado con Jekyll, usando Ruby como Lenguaje de Programación, y al tratar de hacerles unos cambios, no deseaba instalar el lenguaje y luego las gemas de Jekyll.

Para esto encontre una versión portable de Jekyll que la puedes descargar <a href="http://yinlinhu.tech/2018/01/19/portable-jekyll.html" target="_blank">aquí</a>

Para instalar correctamente debes seguir los siguientes pasos:

* Descargar el Portable de Jekyll

* Mover el contenido del comprimido a una carpeta en el disco duro, por ejemplo "C\ruby_jekyll". Este directorio debe contener las siguientes carpetas:

    * devkit
    * ruby
    * Además debe tener un archivo "Readme.md" y un "setpath.cmd".

* Hecho esto, abrimos la consola de PowerShell y ejecutamos los comandos:

```ruby
    * cmd
    * setpath.cmd
    * gem install activesupport
    * gem install github-pages
    * gem install wdm
    * gem install tzinfo-data
    * gem install thor
```
* Hecho esto ya podemos ejecutar un servidor de Jekyll, con el siguiente comando:

```ruby
    * jekyll serve -s DIR_OF_YOUR_WEBSITE
```