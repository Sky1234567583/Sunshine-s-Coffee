const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

// show mobile menu
menuBtn.addEventListener("click", () =>{
    navbarMenu.classList.toggle("show-menu");
});

// hide mobile menu
hideMenuBtn.addEventListener("click", () => menuBtn.click());

// show form popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// hide from popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener("click", (f) => {
        f.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});

//About us
document.getElementById("funFactBtn").addEventListener("click", function() {
    const funFacts = [
        "☕ Did you know? Sunshine’s Coffee Shop serves over 1,000 cups of coffee every day!",
        "🌞 We started with just a small espresso machine and a dream of making people smile!",
        "🍪 Our homemade cookies are made fresh every morning—get yours before they’re gone!",
        "🌱 We source our coffee beans from sustainable farms in South America and Africa!",
        "💡 Fun fact: Our most popular drink is the Caramel Vanilla Latte!"
    ];

    // Get a random fun fact
    let randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

    // Display the fun fact
    let factElement = document.getElementById("funFactText");
    factElement.textContent = randomFact;
    factElement.style.display = "block";
});

//cookies

document.getElementById('save-preferences').addEventListener('click', function() {
    const form = document.getElementById('cookie-form');
    const preferences = {
        necessary: form.elements['necessary'].checked,
        analytics: form.elements['analytics'].checked,
        marketing: form.elements['marketing'].checked,
        functional: form.elements['functional'].checked
    };

    // Save preferences (could be stored in cookies, localStorage, or sent to a server)
    console.log('Saved preferences:', preferences);
    alert('Preferences saved!');
});

document.getElementById('accept-all').addEventListener('click', function() {
    // Automatically check all cookies (except 'necessary' which is always enabled)
    const form = document.getElementById('cookie-form');
    form.elements['analytics'].checked = true;
    form.elements['marketing'].checked = true;
    form.elements['functional'].checked = true;

    // Save preferences
    const preferences = {
        necessary: true,
        analytics: true,
        marketing: true,
        functional: true
    };

    console.log('Accepted all preferences:', preferences);
    alert('All cookies accepted!');
});

//Menu Section
// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Select all menu items
    const menuItems = document.querySelectorAll('.menu-item');

    // Loop through each menu item
    menuItems.forEach(item => {
        // Add a click event listener to each item
        item.addEventListener('click', function() {
            // Toggle the 'highlight' class to show an active state
            item.classList.toggle('highlight');
        });
    });
});


//Rewards Section
// Placeholder for reward points (this can be dynamically updated later)
let userPoints = 70; // Example points, you can change this to your desired points

function claimPoints() {
    // Show the pop-up with user's points
    let popupMessage = "You have " + userPoints + " points!";
    document.getElementById("popupMessage").textContent = popupMessage;

    // Display the popup
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    // Hide the popup when the close button is clicked
    document.getElementById("popup").style.display = "none";
}


//Gift Cards Section
function buyGiftCard() {
    let amount = document.getElementById("amount").value;

    if (amount && amount >= 10) {
        // Redirect to cart.html with amount as a query parameter
        window.location.href = `cart.html?amount=${amount}`;
    } else {
        alert("Please enter a valid amount (minimum $10).");
    }
}



//Cart Section
// Sample cart items (This would normally be fetched dynamically from a backend)
const cartItems = [
    { id: 1, name: "Coffee Mug", price: 15.00, quantity: 2 },
    { id: 2, name: "Espresso Machine", price: 120.00, quantity: 1 },
    { id: 3, name: "Coffee Beans", price: 10.00, quantity: 3 }
];

// Function to calculate the total price
function calculateTotal() {
    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
    });
    return total.toFixed(2);
}

// Function to update the cart items in the DOM
function updateCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current cart items

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        
        const itemName = document.createElement('h4');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${item.price.toFixed(2)} x ${item.quantity}`;
        
        cartItemDiv.appendChild(itemName);
        cartItemDiv.appendChild(itemPrice);

        cartItemsContainer.appendChild(cartItemDiv);
    });

    // Update the total price in the DOM
    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `$${calculateTotal()}`;
}

// Function to proceed to checkout
function proceedToCheckout() {
    alert("Proceeding to checkout...");
    // You can redirect to the checkout page if needed:
    // window.location.href = 'checkout.html';
}

// Initialize the cart on page load
window.onload = function() {
    updateCartItems();

    // Set up event listener for "Proceed to Checkout" button
    const checkoutButton = document.querySelector('.cart-summary .button');
    checkoutButton.addEventListener('click', proceedToCheckout);

    // Set up event listener for "Continue Shopping" button
    const continueShoppingButton = document.querySelector('.back-to-shop .button');
    continueShoppingButton.addEventListener('click', function() {
        window.location.href = 'shop.html'; // Redirect to the shopping page
    });
};


//Map Section
document.addEventListener("DOMContentLoaded", () => {
    const markers = document.querySelectorAll(".store-marker");

    markers.forEach(marker => {
        marker.addEventListener("click", () => {
            alert(`Welcome to Sunshine's Coffee Shop: ${marker.getAttribute("title")}!`);
        });
    });
});




