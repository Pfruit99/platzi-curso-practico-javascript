//const precioOriginal = 100;
// const descuento = 15;

function CalcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioconDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioconDescuento)/100;
    return precioConDescuento;
}

// console.log({precioOriginal,
//     descuento,
//     porcentajePrecioconDescuento,
//     precioConDescuento});


function onClickButtonDiscountPrice() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue =  inputPrice.value;

    const  InputDiscount = document.getElementById("InputDiscount")
    const discountValue = InputDiscount.value;

    const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "el precio con descuento son: $" +precioConDescuento;    
}



