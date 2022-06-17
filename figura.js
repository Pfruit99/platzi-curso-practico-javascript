//codigo cuadrado
console.group("cuadrados")
const ladocuadrado = 5;
console.log("los lados del cuadrado miden:"+ladocuadrado+   "  cm");


function perimetrocuadrado(lados) {
    return lados *4;    
}
function Areacuadrado(lados) {
    return lados * lados;    
}

// console.log("el perimetro cuadrado es:"+perimetrocuadrado);

// const areacuadrado = ladocuadrado *ladocuadrado;
// console.log("el area del cuadrado es:"+areacuadrado);
console.groupEnd();


//codigo triangulo
console.group("triangulos")

// const ladotriangulo1 = 5;
// const ladotriangulo2 = 6;
// const basetriangulo = 4;
// const alturatriangulo = 5.5;

// console.log("los lados del triangulo miden:"
// +ladotriangulo1 +    "cm,"
// + ladotriangulo2    +   "cm,"
// +basetriangulo +"cm,");

// console.log("la altura del triangulo es:"+alturatriangulo+   "  cm");

function perimetrotriangulo(lado1,lado2,ladobase) {
    return lado1 + lado2 + ladobase;
} 

// console.log("el perimetro triangulo es:"+perimetrotriangulo);

function areatriangulo(base,altura) {
    
return ((base * altura)/2);
    
}

// console.log("el area del triangulo es:"+areatriangulo);
console.groupEnd();


//codigo circulo
console.group("circulo")

//radio
const radiocirculo = 4;    

//diametro
// const diametrocirculo=radiocirculo *2

function diametrocirculo(radio) {
    return radio *2 ; 
}

//PI
const pi = Math.PI;
console.log(pi)
//CIRCUNFERENCIA


function perimetrocirculo(radio) {
const diametro =  diametrocirculo(radio);    
return diametro * pi;
}


//area
function areacirculo(radio) {
    const areacirculo = (radio * radio) *pi;
    return areacirculo;
}




console.groupEnd()

//interaccion con el html

//cuadrado
    function Calcularperimetrocuadrado(){
        const input  = document.getElementById("InputCuadrado");
        const value = input.value;

        const perimetro1 = perimetrocuadrado(value);
        alert(perimetro1);
    }

    function Calcularareacuadrado() {
        const input  = document.getElementById("InputCuadrado");
        const value = input.value;

        const area1 = Areacuadrado(value);
        alert(area1);   
    }



//circulo

function CalcularPerimetroCirculo(){
    const input  = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro1 = perimetrocirculo(value);
    alert(perimetro1);
}

function CalcularAreacirculo() {
    const input  = document.getElementById("InputCirculo");
    const value = input.value;

    const area1 = areacirculo(value);
    alert(area1);   
}



//triangulo

    
    function Calcularperimetrotriangulo(){
        const input  = document.getElementById("InputLadoTriangulo1", "InputLadoTriangulo2", "InputBaseTriangulo");
        
        const input1  = document.getElementById("InputLadoTriangulo2");
        
        const input2  = document.getElementById("InputBaseTriangulo");
        
        

        const value = input.value;
        const value1 = input1.value;
        const value2 = input2.value;
        
        const inputnum = parseInt(value);
        const inputnum1 = parseInt(value1);    
        const inputnum2 = parseInt(value2);

        const perimetro2 = perimetrotriangulo(inputnum, inputnum1, inputnum2);
        alert(perimetro2);
    }


    function Calcularareatriangulo() {
        const input  = document.getElementById("InputCuadrado");
        const value = input.value;

        const area1 = Areacuadrado(value);
        alert(area1);   
    }