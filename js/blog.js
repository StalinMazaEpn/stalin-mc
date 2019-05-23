// Variables Globales
var idBuscadorJekyll = 'search-input';
var idResultadosBuscadorJekyll = 'results-container';
var baseUrl = "StalinMazaEpn";
var URL_SERVER = window.location.href.slice(0, window.location.href.indexOf(baseUrl) + baseUrl.length);

//Modos de Pantalla
const modos_pantalla = {
    dark: 'dark',
    light: 'light'
}
// Boton Activar/Desactivar Modo
let dark_mode_btn = document.getElementById('btn_dark_mode');
// let root = document.documentElement;

const mostrarTema = (textoTema) => {
    document.getElementById('icon-theme-mode').textContent = textoTema;
};

document.addEventListener('DOMContentLoaded', function (e) {
    //Comprobar si Existe el Modo Pantalla en LS
    //Si no hay seteo uno
    //Si hay lo aplico
    let modo_pantalla = "";
    if (localStorage.getItem("modo_pantalla") === null) {
        localStorage.setItem('modo_pantalla', modos_pantalla.light);
    } else {
        modo_pantalla = localStorage.getItem("modo_pantalla");
        if (modo_pantalla == modos_pantalla.dark) {
            document.body.classList.add('dark_mode');
            mostrarTema('Oscuro');
        } else {
            document.body.className = "";
            mostrarTema('Claro');
        }
    }

    // let modo_pantalla = localStorage.getItem("modo_pantalla");
    console.log(modo_pantalla);
});


const background_texto = ['#fff', '#282b2d'];

;
dark_mode_btn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (document.body.classList.contains('dark_mode')) {
        console.log('light');
        mostrarTema('Claro');
        localStorage.setItem('modo_pantalla', modos_pantalla.light);
        document.body.className = "";
    } else {
        console.log('dark')
        localStorage.setItem('modo_pantalla', modos_pantalla.dark)
        document.body.classList.add('dark_mode');
        mostrarTema('Oscuro');
    }
    // ajustarModo('dark_mode')
    // document.body.classList.toggle('dark_mode');
    dark_mode_btn.classList.toggle('btn_light_mode');
    // root.style.setProperty('--mouse-x', e.clientX + "px");
});

function ajustarModo(modo) {
    document.body.classList.toggle(modo);
}

var input_busqueda = document.getElementById(idBuscadorJekyll);
if (input_busqueda.value == '') {
    console.log("Vacio");
}
input_busqueda.addEventListener('keypress', (e) => {
    const keycode = (e.keyCode ? e.keyCode : e.which);
    console.log("Escribiendo");
    verificarTamanioResultados();
    if (keycode == '13') {
        e.preventDefault();
    }
    if (keycode == '46' || keycode == '8') {
        alert("Borro");
    }
});
input_busqueda.addEventListener('blur', (e) => {
    if (input_busqueda.value == '') {
        verificarTamanioResultados()
    }
});

function verificarTamanioResultados() {
    const listaResultados = document.getElementById(idResultadosBuscadorJekyll);
    console.log("Vacio");
    console.dir(document.getElementById(idResultadosBuscadorJekyll));
    console.log("TAMANIO", listaResultados.style.height);
    
    if (listaResultados.clientHeight != 0) {
        alert("Tamanio 0");
        listaResultados.classList.add('con-resultados');
        console.log("AUMENTAR TAMAÑO");
        
    } else {
        listaResultados.classList.remove('con-resultados');
        console.log("REDUCIR MARGEN");
    }
}

if (typeof input_busqueda !== 'undefined' && input_busqueda != null) {
    SimpleJekyllSearch({
        searchInput: document.getElementById(idBuscadorJekyll),
        resultsContainer: document.getElementById(idResultadosBuscadorJekyll),
        // resultsContainer: document.getElementById('results-container'),
        json: URL_SERVER + '/search.json',
        searchResultTemplate: '<li class="list-group-item text-center font-weight-bold results-items"><a class="" href="{url}" title="{desc}">{title}</a></li>',
        noResultsText: '<p class="text-center">No se han encontrado resultados.</p>',
        limit: 6,
        fuzzy: false,
        exclude: ['Welcome'],
        success: function() {
            console.log("Sucess Search");
          }
    });  
}

// INICIALIZAR HIGHLIGHT JS
hljs.initHighlightingOnLoad();

// Preloader
const preloader = document.getElementById("preloader_pagina");
const contenido_pagina = document.getElementById("main-content-blog");
function load_page() {
    preloader.classList.add("ocultar");
    contenido_pagina.classList.remove("ocultar");
}
window.onload = load_page;

// BOTON IR HACIA ARRIBA
$(document).ready(function(){ //Hacia arriba
    irArriba();
  });
  
  function irArriba(){
    $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
    $(window).scroll(function(){
      if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
    });
    $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
  }