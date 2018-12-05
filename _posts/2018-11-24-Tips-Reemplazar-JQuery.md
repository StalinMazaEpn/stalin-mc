Jquery es una gran líbreria que nos soluciono muchos problemas que el Javascript antiguo no lo podía realizar, pero con la venida de 
Ecmascript 6, se puede ejecutar muchas cosas de Jquery con Javascript Nativo. 

Estas son algunas formas que Javascript ECMAScript 6 te permite ejecutar funciones de JQuery pero de forma nativa.

**Reemplazar el Document.Ready**

Este evento esencial en JQuery que indica cuando el DOM ha cargado completamente, se puede ejecutar de forma nativa mediante
el evento del DOM.

```javascript

  document.addEventListener('DOMContentLoaded', function () {
    console.log('El Documento ha cargado totalmente');
  });

```

**Seleccionar Elementos del DOM**

Un gran porcentaje de razones para usar JQuery son la forma que usa para usar selectores, pero Javascript ya ofrece formas similares
para acceder a clases, IDs o Tags, tal como se observa en el siguiente ejemplo: 

```javascript
  //Devuelve un objeto con la primer coincidencia de un elemento del DOM que contenga la clase "envios".
  const miSelectorClase = document.querySelector(".envios");
 
  //Devuelve un array con todos los elementos del DOM que coincidan con el selector de clase "envios".
  var misClases = document.querySelectorAll(".envios");
  
  //Devuelve un objeto con el elemento del DOM que tenga el ID "monster".
  var objetoMounstro = document.getElementById('monster');

```

**Añadir y eliminar eventos**

Los eventos con JavaScript son muy fáciles de añadir haciendolo de la siguiente manera.

```javascript

  var btnEnvioForm = document.querySelector(".btnSubmit");

  var comprobarFormulario = function (e) {
      //previene el evento por defecto, en este caso el envio de un formulario
      e.preventDefault();
      //manda un mensaje a consola
      console.log("Suspendo Envio formulario hasta hacer algo, por ejemplo validar los campos");
  };
  //llama a la variable del boton que tiene el elemento del DOM Botton y le añado el evento Click que llama a la 
  función "comprobarFormulario".
  btnEnvioForm.addEventListener("click", button_click);
  //en caso de eliminar un evenoto usamos removeEventListener
 
```

**Manipular Clases y Atributos con Vanilla JS**

Podemos añadir, remover y las dos cosas mediante Javascript con la opción "classList".

```javascript
  var div = document.querySelector('#btn-sidebar');
  var DOM = document.body;
  
  div.addEventListener('click',function(){
    //añado la clase "red" al body al hacer click en el boton
    DOM.classList.add('red');
    //remuevo la clase "green" al body al hacer click en el boton
    DOM.classList.remove('green');
    //al hacer click comprueba si tengo la clase "black", si la tiene se la remueve caso contrario la añade
    DOM.classList.toggle('black');
  });  

```

**Insertar Elementos y Contenido**

Para manipular los elementos y su contenido, podemos usar "innerHTML" o "textContent", de la siguiente manera.

```javascript

  var parrafo = document.querySelector('p#contenido');
  var contenido = "Aprendiendo Javascript";
  //añado el contenido de Aprendiendo Javascript al parrafo
  parrafo.textContent = contenido;
  //añado un span al parrafo con mi nombre
  contenido+= '<span> con Stalin Maza</span>';
  //añado ese texto con formato HTML al Parrafo
  parrafo.innerHTML = contenido;
  
```

**Insertar y Eliminar Elementos**

Podemos usar "appendChild(elemento)" y "removeChild(elemento)" para añadir y eliminar elementos hijos a un elemento padre.

En cambio, para crear elementos usamos "document.createElement("li");" y para insertar un elemento antes de otro usamos
"elemento.parentNode.insertBefore(elemento-a-insertar,elementoBase)" mientras 
que con "elemento.parentNode.insertAfter(elemento-a-insertar,elementoBase)" insertamos despúes del elemento base.

**Navegar en el DOM**

Para navegar en el DOM tenemos los siguientes métodos:

```javascript

  var padre = botones.parentNode;
  var hijo = botones.children;
  var elemento_anterior = botones.previousElementSibling;
  var elemento_siguiente = botones.nextElementSibling;
  
```

**Recorrer Arreglos**

**Animaciones**

En este apartado JQuery lleva la delantera ya que con JavaScript Puro no se puede reemplazar dichas animaciones, 
pero usando en conjunto CSS3 o librerias CSS como Animate CSS y JS podemos hacer bellas. animaciones.


**Uso de AJAX**

Javascript provee el API Fetch para ejecutar un AJAX moderno y se ejecuta de la siguiente manera.

```javascript

  document.addEventListener('DOMContentLoaded', cargarDataFetch);

  function cargarDataFetch() {
            document.getElementById('btn').addEventListener('click', function() {
                fetch('ejemplo.json')
                    .then(cargaCorrecta)
                    .catch(errorCarga);
            });

            function cargaCorrecta(response) {
                console.log('response.ok: ', response.ok);
                if (response.ok) {
                    response.text().then(mostrarDatos);
                } else {
                    showError('status code: ' + response.status);
                }
            }

            function mostrarDatos(data) {
                //convierte a objeto
                var dato = JSON.parse(data);
                console.log('Respuesta del Fetch: ');
                // console.log(typeof(dato));
                console.log('Objeto: ', dato);
                //convierte a string
                console.log('String', JSON.stringify(dato));
            }

            function errorCarga(err) {
                console.log('muestor error', err);
            }
    }

```

Con estos ejemplos no se busca dejar de Usar JQuery, por lo menos en un futuro cercano, sino saber que algunas cosas podemos
hacerlas con Vanilla JS y asi ahorrarnos ancho de banda al cargar JQuery, además de que sabiendo las bases de Javascript manejar
una librería basada en JavaScript, se hara mucho más facíl. 
sin embargo es bueno saber lo que podemos hacer sin necesidad de usar esta librería.

