// Cambiado para aceptar y utilizar argumentos como elementos
export function subtotal(items) {
    return items.reduce((prev, item) => {
        return prev + items.product.price * purchase.number;
    }, 0)
}

// Cambiado para aceptar y utilizar argumentos como elementos
export function display(items) {
    return items.map(item => {
        return `${item.product.price}円:${item.number}点`;
    }).join("\n")
};

export function calcPostageFromPurchase(sum) {
    // compendio
}