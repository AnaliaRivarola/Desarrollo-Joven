import { subtotal, display, calcPostageFromPurchase } from "./util.js"

// compendio

let purchases = [];

function add() {
    const targetId = parseInt(priceElement.value);
    const product = products.find(item => item.id == targetId);
    const number = numberElement.value;
    let purchase = {
        product: product,
        number: parseInt(number),
    };

    const newPurchase = purchases.findIndex((item) => item.product.id === purchase.product.id)
    if (purchases.length < 1 || newPurchase === -1) {
        purchases.push(purchase)
    } else {
        purchases[newPurchase].number += purchase.number
    }
    // Pasar las compras como argumentos a las funciones display() y subtotal().
    window.alert(`${display(purchases)}\n小計${subtotal(purchases)}円`);
    priceElement.value = "";
    numberElement.value = "";
}

function calc() {
    // Pasar las compras como argumento a la función subtotal().
    const sum = subtotal(purchases);
    const postage = calcPostageFromPurchase(sum);
    window.alert(`小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
}