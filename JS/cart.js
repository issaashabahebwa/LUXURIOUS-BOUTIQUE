let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");

const totalElement = document.getElementById("total");
function displayCart() {
    if (!cartItems) return;
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => { 
        total += item.price * item.quantity;

        let div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <h3>${item.name}</h3>

            <p>Ush ${item.price.toLocaleString()}</p>

            <button onclick="decrease(${index})">-</button>

            <span>${item.quantity}</span>

            <button onclick="increase(${index})">+</button>

            <button onclick="removeItem(${index})">Remove</button>

            <hr>

        `;

        cartItems.appendChild(div);

    });



    if (totalElement) totalElement.innerText = "Ush " + total.toLocaleString();

    localStorage.setItem("cart", JSON.stringify(cart));

}



window.increase = (i) => { cart[i].quantity++; displayCart(); };

window.decrease = (i) => {

    if (cart[i].quantity > 1) cart[i].quantity--;

    else cart.splice(i, 1);

    displayCart();

};

window.removeItem = (i) => { cart.splice(i, 1); displayCart(); };



// Init

displayCart();