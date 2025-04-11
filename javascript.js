const pricePerUnit = 1.62;

function placeOrder(product, quantity) {
    alert(`Vous avez commandé ${quantity} ${product}(s).`);
    // Additional logic for processing the order can go here
}

function updatePrice(type) {
    let price;
    switch (type) {
        case 'milk':
            price = 1.62;
            break;
        case 'dark':
            price = 1.99;
            break;
        case 'white':
            price = 2.62;
            break;
        default:
            price = 0; // Default case if needed
    }
    const quantityInput = document.getElementById(type + 'Quantity');
    const priceDisplay = document.getElementById(type + 'Price');
    const quantity = parseInt(quantityInput.value);
    const totalPrice = (quantity * price).toFixed(2); // Calculate total price based on quantity
    priceDisplay.textContent = `$${totalPrice}`; // Update price display
}

function increaseQuantity(type) {
    const quantityInput = document.getElementById(type + 'Quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updatePrice(type); // Update price when quantity changes
}

function decreaseQuantity(type) {
    const quantityInput = document.getElementById(type + 'Quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updatePrice(type); // Update price when quantity changes
    }
}

// Get references to the menu and buttons
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuButton = document.getElementById('closeMenuButton');

// Function to open the mobile menu
function openMobileMenu() {
    mobileMenu.classList.remove('hidden'); // Remove hidden class to show the menu
}

// Function to close the mobile menu
function closeMobileMenu() {
    mobileMenu.classList.add('hidden'); // Add hidden class to hide the menu
}

// Event listener for the mobile menu button
const menuButton = document.querySelector('.menu-button'); // Adjust selector as needed
menuButton.addEventListener('click', openMobileMenu);

// Event listener for the close button
closeMenuButton.addEventListener('click', closeMobileMenu);
