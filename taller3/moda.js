const lista1 = [1, 2, 1, 2, 3, 2, 3, 4, 2, 4, 1, 5, 3, 4, 5];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            // lista1Count[elemento] = lista1Count[elemento] + 1;
            lista1Count[elemento] += 1;   
        } else{
            lista1Count[elemento] = 1;
        }
     
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (ValorAcumulado, nuevoValor) {
        if (ValorAcumulado, nuevoValor) {
            ValorAcumulado - nuevoValor
        }
    }

);



const lista1Arraid =  Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
         return elementoA[1] - elementoB[1];
    }
)


const moda = lista1Arraid[lista1Arraid.length - 1];