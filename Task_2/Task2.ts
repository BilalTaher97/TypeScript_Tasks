
//---------------------------------------------------------(2)

interface Person{

    name:string;
    age : number;

}


const Persons_1 : Person[] = [

    {name:'Bilal',age:27},
    {name:'Ali',age:21},
    {name:'Sami',age:16},
    {name:'Rami',age:14}
]

Persons_1.forEach(p => {

    if(p.age> 18)
    {
        console.log('Adult');
    }else
    {
        console.log('Minor');

    }

})


console.log('\n\n\n');



//---------------------------------------------------------(2)

interface Teacher 
{
    name:string;
    Subject : string[]
}


const Teacher_1 :Teacher[] = [
    {name:"Ayman",Subject : ["C++","C#","OPP"]},
    {name:"Khalid",Subject : ["PHP","SQL","OPP"]},
    {name:"Ali",Subject : ["Java","Problem Solving","Data Structure"]},
]


Teacher_1.forEach(T => {
     
    for(let i = 0 ; i < T.Subject.length ;i++)
    {
        if(T.Subject[i] == "OPP")
            {
                console.log(T.name);
            }
    }

})



//---------------------------------------------------------(3)


console.log('\n\n\n');

interface product
{
    name:string;
    price:number;
    quantity:number;
}

let AllProducts :product[] = [
    {name:'Keyboard',price:12.5,quantity:44},
    {name:'Camera',price:6.5,quantity:55},
    {name:'Mouse',price:3,quantity:130}
]



AllProducts.forEach(P => {

    if(P.quantity > 5)
    {
        let Discount = (P.price * 15) / 100;
        console.log('Discount : ' + Discount);
    }
})



//---------------------------------------------------------(4)


interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}


document.addEventListener("DOMContentLoaded", loadProducts);

const productForm = document.getElementById("productForm") as HTMLFormElement;
const errorMessage = document.getElementById("errorMessage") as HTMLParagraphElement;
const productList = document.getElementById("productList") as HTMLDivElement;

if (productForm) {
    productForm.addEventListener("submit", function (event: Event) {
        event.preventDefault();

      
        const nameInput = (document.getElementById("name") as HTMLInputElement).value.trim();
        const descriptionInput = (document.getElementById("description") as HTMLInputElement).value.trim();
        const priceInput = parseFloat((document.getElementById("price") as HTMLInputElement).value);
        const quantityInput = parseInt((document.getElementById("quantity") as HTMLInputElement).value);

       
        if (!nameInput || !descriptionInput || isNaN(priceInput) || priceInput <= 0 || isNaN(quantityInput) || quantityInput <= 0) {
            errorMessage.textContent = "Please enter valid product details.";
            return;
        }

        errorMessage.textContent = ""; 

  
        const product: Product = { 
            name: nameInput, 
            description: descriptionInput, 
            price: priceInput, 
            quantity: quantityInput 
        };

     
        let products: Product[] = getProductsFromStorage();
        products.push(product);

      
        localStorage.setItem("products", JSON.stringify(products));

  
        displayProducts();

   
        productForm.reset();
    });
}


function loadProducts(): void {
    displayProducts();
}


function getProductsFromStorage(): Product[] {
    try {
        const storedData = localStorage.getItem("products");
        return storedData ? JSON.parse(storedData) as Product[] : [];
    } catch (error) {
        console.error("Error parsing products from storage:", error);
        return [];
    }
}


function displayProducts(): void {
    productList.innerHTML = "";

    const products: Product[] = getProductsFromStorage();

    products.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p><strong>Quantity:</strong> ${product.quantity}</p>
            <button onclick="deleteProduct(${index})">Delete</button>
        `;
        productList.appendChild(productCard);
    });
}


function deleteProduct(index: number): void {
    let products: Product[] = getProductsFromStorage();
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
}

