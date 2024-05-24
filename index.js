let miJugador = {
    nombre: 'Messi',
    edad: 36,
    posicion: 10
}

miJugador.estatura = "1,69m";

console.log(miJugador.nombre);

delete miJugador.edad;

console.log(miJugador);

let arrayJugadores = [
    {
        ID: 1,
        nombre: 'Lionel Messi',
        posicion: 10 
    },  
    {
        ID: 2,
        nombre: 'Luciana Aymar',
        posicion: 8
    }
];

for (let i = 0; i < arrayJugadores.length; i++) {
    console.log(arrayJugadores[i].nombre);
    console.log(arrayJugadores[i].posicion);
    console.log(" ")
};

const producto = {
    nombre: 'Camiseta',
    precio: 19.99,
    cantidad: 2
}

const precioString = producto.precio.toString();
const cantidadString = producto.cantidad.toString();

console.log(`Precio: ${producto.precio}`);

function calcularPrecioTotal (cantidad) {
const precioUnitario = 15.99;
const cantidadFloat = parseFloat (cantidad);

if(isNaN(cantidadFloat)) {
    console.log("Plis, pone un numero")
} else {
    const total = precioUnitario * cantidadFloat;
    console.log(`Precio total: ${total.toFixed(2)}`)
}
}

const inputCantidad = prompt('Pone la cantidad')

calcularPrecioTotal(inputCantidad);