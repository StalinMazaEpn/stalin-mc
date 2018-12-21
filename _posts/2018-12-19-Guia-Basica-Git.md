---
layout: post
title: Guia Básica de Git y Github
permalink: /guia-basica-git-github/
category: Programación
tags: [programación, dev,git,github,repositorios]
---
Configurar el entorno de Git en mi O.S

- **git config --global user.name “MiName”** **=** para configurar globalmente el nombre de mi usuario en github.
- **git config --global user.email “miCorreo"** **=** para configurar globalmente mi correo de github.

Opcional:

- **git config --global --list** **=** para ver las configuraciones de mi Git.
- **git help** **=** para obtener información sobre los comandos de git que puedo utilizar.
- **git log** **=** para observar un historial del proyecto.
- **git status** **=** para ver que archivos estan añadidos al repositorio y cuales no.

Este es el proceso básico que se debe realizar para subir un repositorio local a github.

- **git init** **=** para inicializar un repositorio local de github.
- **git add .** **=** para añadir todos los archivos del repo local al stage.
- **git commit -m "first commit"** **=** realizar un comentario sobre los archivos que se van a hacer commit.
- **git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git** **=** para añadir la dirección
del repositorio en github.
- **git push -u/-f origin master** **=** para subir los archivos del repositorio local al repositorio en la nube, si
no hemos bajado algunos cambios con la opción "-u" nos avisara, caso contrario con "-f" subira los archivos sin verificar
eso.

Comandos Avanzados

- **git log —stat** **=** indica el numero de linea que se editaron, cuales fueron los cambios a nivel de archivo.
- **git log -p** **=** muestra los cambios y cuales fueron los cambios a nivel de código.

