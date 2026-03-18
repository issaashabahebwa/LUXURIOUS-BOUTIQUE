const products = [
    { id: 1, name: "LEATHER HANDBAG", price: 450000, category: "Bags", image: "IMAGES/lv1.webp" },
    { id: 2, name: "ELEGANT LOAFERS", price: 320000, category: "Shoes", image: "IMAGES/shoes3.jpg" },
    { id: 3, name: "NIKE AIR SNEAKERS", price: 280000, category: "Shoes", image: "IMAGES/shoes2.webp" },
    { id: 4, name: "JEAN JACKET", price: 150000, category: "Clothes", image: "IMAGES/clothes3.webp" },
    { id: 5, name: "FANCY BAG", price: 550000, category: "Bags", image: "IMAGES/fancybag.webp" },
    { id: 6, name: "TRACK SUIT", price: 220000, category: "Clothes", image: "IMAGES/clothes1.webp" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const productContainer = document.getElementById("products");

function displayProducts(list) {
    if (!productContainer) return;
    productContainer.innerHTML = "";
    
    list.forEach(product => {
        let card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Ush ${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(card);
    });
}

// Attach to window so HTML buttons can access it
window.addToCart = function(id) {
    let item = cart.find(p => p.id === id);
    if (item) {
        item.quantity++;
    } else {
        let product = products.find(p => p.id === id);
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
};

function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.innerText = cart.length;
}

// Search & Filter Listeners
document.getElementById("search")?.addEventListener("input", function() {
    let value = this.value.toLowerCase();
    let filtered = products.filter(p => p.name.toLowerCase().includes(value));
    displayProducts(filtered);
});

document.getElementById("filter")?.addEventListener("change", function() {
    let category = this.value;
    let filtered = category === "all" ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
});

// Init
displayProducts(products);
updateCartCount();