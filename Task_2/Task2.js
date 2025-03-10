//---------------------------------------------------------(2)
var Persons_1 = [
    { name: 'Bilal', age: 27 },
    { name: 'Ali', age: 21 },
    { name: 'Sami', age: 16 },
    { name: 'Rami', age: 14 }
];
Persons_1.forEach(function (p) {
    if (p.age > 18) {
        console.log('Adult');
    }
    else {
        console.log('Minor');
    }
});
console.log('\n\n\n');
var Teacher_1 = [
    { name: "Ayman", Subject: ["C++", "C#", "OPP"] },
    { name: "Khalid", Subject: ["PHP", "SQL", "OPP"] },
    { name: "Ali", Subject: ["Java", "Problem Solving", "Data Structure"] },
];
Teacher_1.forEach(function (T) {
    for (var i = 0; i < T.Subject.length; i++) {
        if (T.Subject[i] == "OPP") {
            console.log(T.name);
        }
    }
});
//---------------------------------------------------------(3)
console.log('\n\n\n');
var AllProducts = [
    { name: 'Keyboard', price: 12.5, quantity: 44 },
    { name: 'Camera', price: 6.5, quantity: 55 },
    { name: 'Mouse', price: 3, quantity: 130 }
];
AllProducts.forEach(function (P) {
    if (P.quantity > 5) {
        var Discount = (P.price * 15) / 100;
        console.log('Discount : ' + Discount);
    }
});
document.addEventListener("DOMContentLoaded", loadProducts);
var productForm = document.getElementById("productForm");
var errorMessage = document.getElementById("errorMessage");
var productList = document.getElementById("productList");
if (productForm) {
    productForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var nameInput = document.getElementById("name").value.trim();
        var descriptionInput = document.getElementById("description").value.trim();
        var priceInput = parseFloat(document.getElementById("price").value);
        var quantityInput = parseInt(document.getElementById("quantity").value);
        if (!nameInput || !descriptionInput || isNaN(priceInput) || priceInput <= 0 || isNaN(quantityInput) || quantityInput <= 0) {
            errorMessage.textContent = "Please enter valid product details.";
            return;
        }
        errorMessage.textContent = "";
        var product = {
            name: nameInput,
            description: descriptionInput,
            price: priceInput,
            quantity: quantityInput
        };
        var products = getProductsFromStorage();
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        displayProducts();
        productForm.reset();
    });
}
function loadProducts() {
    displayProducts();
}
function getProductsFromStorage() {
    try {
        var storedData = localStorage.getItem("products");
        return storedData ? JSON.parse(storedData) : [];
    }
    catch (error) {
        console.error("Error parsing products from storage:", error);
        return [];
    }
}
function displayProducts() {
    productList.innerHTML = "";
    var products = getProductsFromStorage();
    products.forEach(function (product, index) {
        var productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML = "\n            <h3>".concat(product.name, "</h3>\n            <p>").concat(product.description, "</p>\n            <p><strong>Price:</strong> $").concat(product.price.toFixed(2), "</p>\n            <p><strong>Quantity:</strong> ").concat(product.quantity, "</p>\n            <button onclick=\"deleteProduct(").concat(index, ")\">Delete</button>\n        ");
        productList.appendChild(productCard);
    });
}
function deleteProduct(index) {
    var products = getProductsFromStorage();
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
}
