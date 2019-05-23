---
layout: post
title: Manejo de Funciones Asíncronas en JavaScript
subtitle: "Aprende la diderencia de usar callbacks, promesas y asyncsawait en Javascript"
author: "Stalin Maza"
permalink: /manejo-funciones-asincronas-js/
category: Programación
tags: [programación, web dev, javascript,es6]
---

JavaScript en su versión más actual ofrece formas modernas para ejecutar funciones asíncronas, las cuales según el orden
comenzaron en forma de callbacks, para seguir despues con las promesas y finalmente ahora nos ofrece el uso de async/await.

<!-- more -->

***Usando CallBacks***

```javascript

function manejarPeticion(request,response){
  User.findId(request.userId,function(err,user){
    if(err){
      response.send(err);
    } else {
      Tasks.findById(user.tasksId,function(err,tasks){
        if(err){
          return response.send(err);
        } else {
          tasks.completed = true;
          tasks.save(function(err){
            if(err){
              return response.send(err);
            } else {
              res.send('Tareas Completas');
            }
          })
        }
      })
    }
  })
}

```

***Usando Promesas***

```javascript

function manejarPeticion(request,response){
  User.findById(request.userId)
    .then(function(user){
      return Tasks.findById(user.tasksId);
    })
    .then(function(tasks){
      tasks.completed = true;
      return tasks.save();
    })
    .then(function(){
      response.send('Tareas Completas');
    })
    .catch(function(errores){
      response.send(errores);
    })

}

```

***Usando Async/Await***

```javascript

async function manejarPeticion(request,response){

  try{
    const user = await User.findById(request.userId);
    const tasks= await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    response.send('Tareas Completadas');
  } catch(error){
    response.send(error);
  }

}

```

## MANEJO DE FUNCIONES ASÍNCRONAS

Ejecución de una tarea de forma secuencial, termina 1 y sigue el otro

```javascript
async taskOne(){
  
  try{
    throw new Error("Ocurrio un problema en tarea 1!");
    //await 4 seconds con Settimeout(4000)
     return 'One Value';
  } catch(err){
    console.log(err);
  }  
 
}

async taskTwo(){

  try {
    // throw new Error("Ocurrio un problema en tarea 2!");
    //await 2 seconds con Settimeout(2000)
    return 'Two Value';
  } catch(err){
    console.log(err);
  }
  
 
}

async main(){
  try{
    console.time('Midiendo el tiempo');
    const value_one = await taskOne();
    const value_two = await taskTwo();
    console.timeEnd('Medida Finalizada');
    //este codigo debe durar en ejecutarse 6s
    console.log('Tarea 1: ', value_one);
    console.log('Tarea 2: ', value_two);
  } catch(err){
    console.log(err);
  }
  
}

main();

```

## MANEJO DE FUNCIONES ASÍNCRONAS

#### Ejecución de una tarea de forma paralela, las 2 se ejecutan al mismo tiempo

```javascript

async taskOne(){
  
  try{
    // throw new Error("Ocurrio un problema en tarea 1!");
    //await 4 seconds con Settimeout(4000)
     return 'One Value';
  } catch(err){
    console.log(err);
  }  
 
}

async taskTwo(){

  try {
    // throw new Error("Ocurrio un problema en tarea 2!");
    //await 2 seconds con Settimeout(2000)
    return 'Two Value';
  } catch(err){
    console.log(err);
  }
  
 
}

async main(){
  try{
    console.time('Midiendo el tiempo');
    const results = await Promise.all([taskOne(),taskTwo()]);    
    console.timeEnd('Medida Finalizada');
    //este codigo debe durar en ejecutarse 4s
    console.log('Tarea 1: ', results[0]);
    console.log('Tarea 2: ', results[1]);
  } catch(err){
    console.log(err);
  }
  
}

main();

```

