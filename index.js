import { obtenerProductos, obtenerProductoPorId, agregarProducto, eliminarProducto } from "./fakeStoreApi.js";

const argumentos = process.argv.slice(2);

if (argumentos[0] == "GET" &&  argumentos[1] == "products" ){
    obtenerProductos()
} else if (argumentos[0] == "GET" && argumentos[1].includes("products/")) {
    obtenerProductoPorId(argumentos[1])
} else if (argumentos[0] == "POST" && argumentos[1] == "products" && argumentos.length == 5) {
    const nuevoProducto = {
        title: argumentos[2],
        price: parseFloat(argumentos[3]),
        category: argumentos[4]
    };
    agregarProducto(nuevoProducto);
} else if (argumentos[0] == "DELETE" && argumentos[1].includes("products/")) {
    eliminarProducto(argumentos[1])
} else {
    console.log("Comando no reconocido");
}