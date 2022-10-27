const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

class Coupon {
    constructor(name, discount) {
        this.name = name,
        this.discount = discount
    }
}

const coupons = [];

coupons.push(new Coupon('D30', 30), new Coupon('D25', 25), new Coupon('D10', 10));

function calcularPrecioConDescuento() {

    const cuponValido = coupons.find(item => item.name == inputCoupon.value);

    if (cuponValido != undefined) {
        const precioConDescuento = Number((price.value)*(100 - cuponValido.discount) / 100);
        pResult.innerText = `El precio con descuneto aplicado es de: ${precioConDescuento}`;
        console.log(precioConDescuento);
        
    } else {
        pResult.innerText = 'Descuento no Válido';
        return
    }
}

