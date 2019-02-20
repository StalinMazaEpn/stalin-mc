---
layout: post
title: Códigos de Estado
subtitle: "Aprende los Códigos de Estado más importantes en la Web"
author: "Stalin Maza"
permalink: /codigos-estado-http-2018/
category: Programación
tags: [web, programación, dev,servers]
---

Los códigos de estado son devueltos por el servidor luego de recibir una petición HTTP.

Dichos códigos permiten identificar el estado de la petición para asi poder identificar si todo sucedio
correctamente o ha habido algún error.

Si la petición se ejecuta correctamente, no aparece ningun codigo de estado ya que esto sucede por detras
entre el navegador y el servidor.

Dichos códigos se agrupan en cinco grandes categorías:

- 100 Informativos
- 200
- 300
- 400
- 500

**Informativos 100**

Estos códigos no son de error, sino se utilizan para enviar información acerca de la petición.

- 100 Continue: este indica al navegador que continúe con la petición.
- 102 Processing: indica al navegador que ha recibido la petición y la esta procesando.

**Peticiones Correctas 200**

Estos códigos indican que todo el proceso se ejecuto correctamente, los más usuales son:

- 200 OK: todo el proceso se ejecuto correctamente.
- 202 Accepted: la petición fue aceptada aunque no se ha completado el proceso.
- 204 No Content: La petición se proceso exitosamente, aunque el resultado devuelto está vacío.

**Redirecciones 300**

Estos códigos se relaciona a las redicciones que le indica el servidor al navegador acerca de que un recurso se ha
movido a otro lugar.

- 301 Moved Permanently: Indica que la página buscada no se encuentra en esa ubicación ya que ha sido movida.
- 302 Found: Indica que la página o recurso está disponible en otra ubicación.
- 304 Not Modified: Indica al navegador que la página no ha sido modificada, evitando así que el navegador la 
descargue nuevamente.

**Errores del Cliente 400**

Este tipo de estados se refieren a los errores del cliente.

- 400 Bad Request: Indica que en la petición ocurrio algún error, se recomienda refrescar la página o 
actualiar tu navegador.
- 401 Unauthorized: Indica que el cliente no tiene permisos para acceder al recurso.
- 402 Payment Required: Indica que el alojamiento donde esta el sitio web esta en desuso por falta de pago.
- 403 Forbidden: Indica que la petición es correcta pero el servidor niega el acceso a dicho recurso, esto es comunmente
relacionado a problemas con el inicio de sesión o creación de una cuenta en el sistema.
- 404 Not Found: Este es el código más conocido e indica que el recurso ya no existe en el servidor, debes comprobar que
ingresaste correctamente la URL.
- 423 Locked: Indica que el recurso esta bloqueado.

**Errores del Servidor 500**

Este tipo de estados se refieren a los errores del cliente.

- 500 Internal Server Error: Indica algún error en el servidor y que deberías intentar acceder más tarde.
- 502 Bad Gateway: Indica que el servidor actua como un proxy y recibio una respuesta incorrecta por parte del otro 
servidor.
- 503 Service Unavalaible: Indica que el servidor puede estar sobrecargado con muchas peticiones o esta en mantenimiento.
- 504 Gateway Timeout: Indica que el servidor actua como un proxy y no recibio respuesta del otro servidor.


Fuente: <a href="https://www.xataka.com/basics/errores-404-500-502-504-y-mas-en-paginas-web-que-significan" 
target="_blank">Errores 404,500,502</a>

