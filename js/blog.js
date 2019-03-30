//Modos de Pantalla
const modos_pantalla = {
    dark: 'dark',
    light: 'light'
}
// Boton Activar/Desactivar Modo
let dark_mode_btn = document.getElementById('btn_dark_mode');
// let root = document.documentElement;

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
        } else {
            document.body.className = "";
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
        localStorage.setItem('modo_pantalla', modos_pantalla.light);
        document.body.className = "";
    } else {
        console.log('dark')
        localStorage.setItem('modo_pantalla', modos_pantalla.dark)
        document.body.classList.add('dark_mode');
    }
    // ajustarModo('dark_mode')
    // document.body.classList.toggle('dark_mode');
    dark_mode_btn.classList.toggle('btn_light_mode');
    // root.style.setProperty('--mouse-x', e.clientX + "px");
});

function ajustarModo(modo) {
    document.body.classList.toggle(modo);
}


document.addEventListener('DOMContentLoaded', function() {
    var elementos_flotantes_btn = document.querySelectorAll('.fixed-action-btn');
    var instancia_flotante_btn = M.FloatingActionButton.init(elementos_flotantes_btn, {
        hoverEnabled: false
    });
  });