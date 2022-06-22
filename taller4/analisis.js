//medianaGeneral
const salariosCol = colombia.map(
    function (personita) {
      return personita.salary;  
    }
);


//calculadora de mediana

function medianasSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = CalcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad]; 
        return personaMitad;
    }

}



const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;      
    }
);

//Helpers -utils
function esPar(numerito) {
    return (numerito % 2 === 0); 
}

function CalcularMediaAritmetica(lista) {
   
    const sumaLista = lista.reduce(    
         function (ValorAcumulado = 0, nuevoElemento) {
            return ValorAcumulado + nuevoElemento ;    
        }
    );
      
    const   promediolista  = sumaLista / lista.length ;
        
    return promediolista;
}


console.log(medianasSalarios(salariosColSorted));


const medianaGeneral = medianasSalarios(salariosColSorted);

//medianaTop10
const spliceStart = (salariosColSorted.length * 90) /100;
const spliceCount = salariosColSorted.length - spliceStart;


const salariosColtop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);



const medianaTop10Col = medianasSalarios(salariosColtop10);




console.log(
    medianaGeneral, medianaTop10Col,
)