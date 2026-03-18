function changeBackground() {
  document.body.style.backgroundColor = "#88acbd";
}
// 1. Select the form and the message area
const checkoutForm = document.getElementById("checkout-form");
const statusMessage = document.getElementById("message");

// 2. Listen for the "Submit" button click
if (checkoutForm) {
    checkoutForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Stop page from refreshing
        // 3. Get values from the input fields
        const userData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value
        };
        // 4. Check if any field is empty
        if (Object.values(userData).includes("")) {
            alert("Please fill in all the details to continue.");
            return;
        }
        // 5. Success Logic: Clear the cart and show the "Pop"
        localStorage.removeItem("cart");        
        // The "Pop" effect
        alert(`Webale, ${userData.name}! Your order is being processed.`);
        // Simple text update on the page
        if (statusMessage) {
            statusMessage.style.color = "green";
            statusMessage.innerText = "Order placed successfully! Redirecting...";
        }

        // 6. Go back to Home page after 2 seconds
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    });
}