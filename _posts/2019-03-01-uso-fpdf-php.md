---
layout: post
title: "Usar FPDF en PHP para reporte con MYSQL"
subtitle:   "Un pequeño ejercicio con PHP, MYSQL Y FPDF."
permalink: /2019-01-03-usar-fpdf-php-mysql/
category: Programación
header-img: "/images/fpdf_php_mysql_header.png"
author:  "Stalin Maza"
tags: [programación, dev, php, mysql, fpdf]
---

# Ejercicio con FPDF, MySQL y PHP

Para este ejercicio usaremos la líbreria FPDF en conjunto con PHP y MySQL.

Necesitamos descargar el archivo de FPDF Y lo podemos hacer en su página oficial: <a href="http://www.fpdf.org/es" target="_blank">FPDF</a>

Hecho esto, descomprimimos el ZIP de FPDF y mantenemos un esquema de archivos y directorios de la siguiente manera. extrayendo en el directorio "fpdf", los archivos de FPDF:

- fpdf *(directorio)*
    - makefont *(directorio)*
    - font *(directorio)*
    - fpdf.php

- conexion.php *(archivo)*
- index.php *(archivo)*
- logo.png *(archivo)*
- PDF.php *(archivo)*
- texto_ejemplo.txt *(archivo)*

Hecho esto comenzamos editando el archivo **"conexion.php"** donde haremos la conexión a la Base de Datos, en este caso usaremos PDO para conectar PHP con MySQL.

```php
<?php 

  //AÑADO OPCIONES A LA CONEXIÓN PDO
  $opciones = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false);
// SENTENCIA TRY-CATCH PARA CAPTURAR ERRORES
    try{
    // INSTANCIO UN OBJETO CLASE PDO CON LOS DATOS CONEXION
    $conexionPDO = new PDO('mysql:host=localhost;dbname=bdd_articulos','root','',$opciones);

    }catch(PDOException $e){
        echo "ERROR: " . $e->getMessage();
    }
    //CREO UNA FUNCIÓN QUE ME RETORNE LOS DATOS DEL REPORTE,
    // EN ESTE CASO TODOS ARTICULOS
    function traerDatos(){        
        global $conexionPDO;
        $db = $conexionPDO;
        $consulta = "select * from articulos";
        $mysql = $db->prepare($consulta);
        $mysql->execute(array());
        $resultado = $mysql->fetchAll(PDO::FETCH_ASSOC);
        $db = null;
        return $resultado;
    }

?>

```

Hecho esto creamos el archivo **"PDF.php"** donde configuraremos la clase FPDF.

```php
<?php
//REQUERIMOS ARCHIVO FPDF
require_once "fpdf/fpdf.php";
// Cabecera de la Página
// CREAMOS CLASE PDF QUE HEREDA DE LA CLASE FPDF
class PDF extends FPDF{

    // MÉTODO PERSONALIZAR CABECERA TODAS PÁGINAS
    function Header()
    {
        //URL IMAGEN LOGO, EJE X IZQUIERDA, EJE Y SUPERIOR IZQUIERDA, ANCHO IMAGEN, ALTO IMAGEN, TIPO, LINK
        $this->Image('logo.png',10,6,30);
        // FAMILIA, ESTILO Y TAMAÑO FUENTE
        $this->SetFont('Arial','B',16);
        // IMPRIME CELDA, EN ESTE CASO VACÍA PARA MOVERME DERECHA
        $this->Cell(100);
        // CELDA TITULO CABECERA, BORDER, DIRECCION SALTO
        //ALINEAMIENTO, TIENE BACKGROUND, LINK
        //ANCHO, ALTO, TEXTO
        $this->Cell(80,10,utf8_decode('PDF Title'),0,0,'C',0);
        // INSERTO ALTURA SALTO LINEA
        $this->Ln(35);  
    }

    // MÉTODO PERSONALIZAR FOOTER DE TODAS LAS PÁGINAS
    function Footer()
    {
        // MUEVO LA CELDA 15 VALORES HACIA ARRIBA EN EL EJE Y
        $this->SetY(-15);
        // FAMILIA, ESTILO Y TAMAÑO FUENTE
        $this->SetFont('Arial','I',8);
        //ALINEAMIENTO, TIENE BACKGROUND, LINK
        //ANCHO, ALTO, TEXTO
        $this->Cell(0,10,utf8_decode('Página ') .$this->PageNo().'/{nb}',0,0,'C');
    }

    //MÉTODO IMPRIMIR TEXTO TIPO CAPITULO LIBRO
    function BodyText($file)
    {
        // LEO ARCHIVO TXT
        $txt = file_get_contents($file);
        // INSERTO FUENTE Y TAMAÑO
        $this->SetFont('Times','',12);
        // JUSTIFICO TEXTO
        $this->MultiCell(0,5,$txt);
        // INGRESO SALTO LINEA
        $this->Ln();
        // AÑADO TEXTO FIN CAPITULO EN ITÁLICA
        $this->SetFont('','I');
        $this->Cell(0,5,'(fin del capitulo)');
    }

}

?>
```

Hecho esto podemos comenzar a personalizar el archivo **"index.php"**, en el cual se generara el archivo PDF.

En este ejemplo crearemos dos páginas diferentes, una con una tabla con un lístado de artículos y en la otra una lectura de un archivo TXT con un texto mostrandolo de forma similar a la página de un libro.

```php

<?php 

require_once "pdf.php";
require_once "conexion.php";

// CREAR OBJETO PDF
$pdf = new PDF();
// HABILTAR USO ALIAS
$pdf->AliasNbPages();
//METADATOS PDF
$pdf->SetTitle("Reporte Artículos GymGalaxy");
$pdf->SetAuthor('GymGalaxy');
$pdf->SetCreator('GymGalaxy');
// CREAR UNA PAGINA
$pdf->AddPage();
// FUENTE LETRA PAGINA
$pdf->SetFont("Arial","B",12);
//TRAIGO DATOS TABLA
$datos = traerDatos();
//ARRAY TAMAÑO CELDA CADA FILA TABLA
$dimension_celdas = array(40,80);
//CALCULO CENTRADO CELDA
$margenIzq = ($pdf->GetPageWidth()-array_sum($dimension_celdas))/2;
// var_dump(traerDatos());
//INSERTO BACKGROUND A LA CABECERA TABLA
$pdf->SetFillColor(236,191,107);
// ASIGNO COLOR TEXTO
$pdf->SetTextColor(34,34,50);
//ASIGNO MARGEN A LA CELDA
$pdf->SetX($margenIzq);
//CREO LAS CELDAS CABECERA
$pdf->Cell($dimension_celdas[0],10,"ID Producto",1,0,"C",1);
$pdf->Cell($dimension_celdas[1],10,"Nombre",1,1,"C",1);
;
//ASIGNO MARGEN A LA CELDA
$pdf->SetX($margenIzq);
//VARIABLE ALTERNAR BG CELDA
$cellAlternate = true;
// RECORRO LOS DATOS
foreach($datos as $dato)
// ASIGNO MARGEN
{   $pdf->SetX($margenIzq);
    //COMPRUBO VALOR CELDA ALTERNADA Y ASIGNO BACKGROUND
    ($cellAlternate)?$pdf->SetFillColor(190,190,185):$pdf->SetFillColor(250,250,250);
    //CREO CELDAS
    $pdf->Cell($dimension_celdas[0],10,utf8_decode($dato['id']),1,0,"C",1);   
    $pdf->Cell($dimension_celdas[1],10,utf8_decode($dato['nombre']),1,1,"C",1);
    //RESETEO VALOR VARIABLE
    ($cellAlternate)?$cellAlternate = false:$cellAlternate = true;
}
//CREO OTRA PAGINA
$pdf->AddPage();
//INGRESO TEXTO PAGINA
$pdf->BodyText("texto.txt");
//TIPO SALIDA, NOMBRE PDF, BOOLEAN SI NOMBRE USA UTF-8
$pdf->Output("I","ejemplo.pdf",1);
?>

```

Puedes descargar el resultado del Ejemplo y los archivos del ejercicio <a href="https://ouo.io/Fl4CWh" target="_blank">aquí</a>



