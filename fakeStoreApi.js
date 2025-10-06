export async function obtenerProductos () {
    try {
        const response = await fetch("https://fakestoreapi.com/products" , {
            method: "GET"
        });
        const data = await response.json();
        console.log(`Los productos son: `);
        data.map((producto) => {
            console.log(producto);
        });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

export async function obtenerProductoPorId(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "GET"
        });
        const data = await response.json();
        console.log(`El producto obtenido es:`, data);
    } catch (error) {
        console.error("Error al obtener el producto:", error);
    }
}

export async function agregarProducto(product) {
    try {
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        console.log(`El producto agregado es:`, data);
    } catch (error) {
        console.error("Error al agregar el producto:", error);
    }
}

export async function eliminarProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        console.log(`El producto eliminado es:`, data);
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
    }
}


