
function CalcularMediaAritmetica(lista) {

    // let sumaLista1 = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista1 = sumaLista1 + lista[i];
    // }
    
    const sumaLista = lista.reduce(    
         function (ValorAcumulado = 0, nuevoElemento) {
            return ValorAcumulado + nuevoElemento ;    
        }
    );
      
    const   promediolista  = sumaLista / lista.length ;
        
    return promediolista;
}