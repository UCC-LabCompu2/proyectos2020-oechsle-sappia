/**
 * Created by Fran y lucas .
 */


var res=new Array;
var no=new Array;
var tures=new Array;
var explicares=new Array;
var calif=0;

res[1]="a";//res = respuesta
res[2]="a";
res[3]="c";
res[4]="b";
res[5]="a";


explicares[1]="Mal,la respuesta correcta es a";
explicares[2]="Mal,la respuesta correcta es a";
explicares[3]="Mal,la respuesta correcta es c";
explicares[4]="Mal,la respuesta correcta es b";
explicares[5]="Mal,la respuesta correcta es a";

/**
 * Funcion que determina la respuesta.
 * @method Respuesta.
 * @param {string} question - la pregunta.
 * @param {string} answer - La respuesta.
 * @return
 */

function Resp(question,answer){
    tures[question]=answer;
}

/**
 * Sirve para calcular el resultado.
 * @method Resultado.
 * @return
 */

function Score(){
    var answertext="RESULTADOS\n";
    calif=0;
    for(i=1;i<=5;i++){
        answertext=answertext+"\nPregunta"+i+".";
        if(res[i]!==tures[i]){
            answertext=answertext+explicares[i]+"\n";
        }
        else{
            answertext=answertext+"Correcto\n";
            calif++;
        }}
    answertext=answertext+"\nCantidad de respuestas acertadas:"+calif;
    answertext=answertext+"\nDiagnostico: ";
    if(calif===0){
        answertext=answertext+"Mal";
    }
    if(calif>=1&&calif<=2){
        answertext=answertext+"Regular";
    }
    if(calif>=3&&calif<=4){
        answertext=answertext+"Bueno";
    }
    if(calif>=5){
        answertext=answertext+"Excelente";
    }
    alert(answertext);
}

/**
 * Mostrar foto.
 * @method foto.
 * @param {number} posicion eje x
 * @param {number} posicion eje y
 * @return
 */



function db(posX, posY) {


    var canvas = document.getElementById("miCanvas4");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;



    var img = new Image();
    img.src ="imageness/Test.png";


    img.onload = function(){
        ctx.drawImage(img,posX, posY);
    }


}
x=0;
dx=2;

/**
 * Funcion  para animar la foto
 * @method Foto animada.
 * @return
 */


function a() {

    var canvas = document.getElementById("miCanvas4");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;


    var img = new Image();
    img.src = "imageness/Test.png ";


    img.onload = function(){
        ctx.drawImage(img,x, 100);
    }

    if (x>canvas.width){

        x=0;
    }
    x+=dx;

}

/**
 * Funcion  para calcular porcentaje.
 * @method Porcentaje
 * @return
 */
function porcentaje() {

    respuesta=document.getElementById("f1").value;



    if (respuesta<=0) Total = 0;

    if (respuesta = 1) Total = 20;
    if (respuesta = 2) Total = 40;
    if (respuesta = 3) Total = 60;
    if (respuesta = 4) Total = 80;
    if (respuesta = 5) Total = 100;


    return Total;
}

/**
 * Grafico
 * @method graficar cuadrado
 * @param {number} respuesta - calificacion
 * @return
 */

function Grafico(respuesta) {


    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    limpiarCanvas();
    ctx.beginPath();
    ctx.fillRect(50,0,3000,100);
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.fillStyle = "#black";
    ctx.stroke();
    ctx.closePath()

    ctx.beginPath();
    ctx.fillRect(50,50,3000,-100)
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.fillStyle = "#0f07f8";
    ctx.stroke();
    ctx.font = "bold 50px sans-serif";
    ctx.fillText(Math.round(calif*20)+"%",140,70);
    ctx.closePath();

}


/**
 * Limpidor de Grafico
 * @method limpiarCanvas
 * @return
 */
function limpiarCanvas(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}
