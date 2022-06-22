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

    // const  InputDiscount = document.getElementById("InputDiscount")
    // const discountValue = InputDiscount.value;

    const InputCoupon = document.getElementById("InputCoupon");
    const   CouponValue = InputCoupon.value;

    // const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);

    // const resultP = document.getElementById("ResultP");
    // resultP.innerText = "el precio con descuento son: $" +precioConDescuento;    

    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;
  
    switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case coupons[2]: // "es_un_secreto"
        descuento = 25;
      break;
    }
  
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}



// arrays cupones


const coupons = [
    "Cris_es_Flash",
    "pero_no_le_digas_a_nadie",
    "o_lo_secuestran",
];