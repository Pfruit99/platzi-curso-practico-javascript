function CalcularMediaAritmetica(lista) {
   
    const sumaLista = lista.reduce(    
         function (ValorAcumulado = 0, nuevoElemento) {
            return ValorAcumulado + nuevoElemento ;    
        }
    );
      
    const   promediolista  = sumaLista / lista.length ;
        
    return promediolista;
}



const lista1 = [
    200,
    100,
    500,
    400000000,
150,    
]


const mitadlista1 = parseInt(lista1.length / 2);




function espar(numerito) {
    if (numerito % 2  === 0) {
            return true;
    } else{
        return false;
    }
}


let mediana;







if (espar(lista1.length)) {
     // promedio
     lista1.sort();
    const  elemento1= lista1[mitadlista1 - 1];
    const elemento2 = lista1[mitadlista1];
    
    const promedio1y2 = CalcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedio1y2;

    } else {
    mediana =lista1[mitadlista1];
 
    //lista1 poblacion mitadlista1
} 