const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

const product = [
    { id: 2, name: "Mezcla original 500g", price: 900 },
    { id: 1, name: "Mezcla original 200g", price: 500 },
    { id: 3, name: "Mezcla especial 200g", price: 700 },
    { id: 4, name: "Mezcla especial 500g", price: 1200 },
];

function add() {
    const id = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    const selectedProduct = product.find((item) => item.id === id);

    if (!selectedProduct) {
        window.alert("Producto no encontrado.");
        return;
    }

    let purchase = {
        name: selectedProduct.name,
        price: selectedProduct.price,
        number: number,
    };
    purchases.push(purchase);
    window.alert(`${display()}\nsubtotal: ${subtotal()}`);
}

function display() {
    let string = "";
    for (let i = 0; i < purchases.length; i++) {
        string += `${purchases[i].name} es ${purchases[i].price}円 x ${purchases[i].number}\n`;
    }
    return string;
}

function subtotal() {
    let sum = 0;
    for (let i = 0; i < purchases.length; i++) {
        sum += purchases[i].price * purchases[i].number;
    }
    return sum;
}

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum);
    window.alert(`subtotal: ${sum}円\nGastos de envío: ${postage}円\nTotal: ${sum + postage}円`);
    purchases = [];
    priceElement.value = "0"; // Reset the product selection to the default option
    numberElement.value = "1"; // Reset the quantity to 1
}

function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
        return 0;
    } else if (sum < 1000) {
        return 500;
    } else {
        return 250;
    }
}