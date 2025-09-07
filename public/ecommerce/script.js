// Product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        description: "Premium quality wireless headphones with noise cancellation",
        icon: "fas fa-headphones"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        description: "Feature-rich smartwatch with health monitoring",
        icon: "fas fa-clock"
    },
    {
        id: 3,
        name: "Laptop Bag",
        price: 49.99,
        description: "Durable and stylish laptop bag for professionals",
        icon: "fas fa-briefcase"
    },
    {
        id: 4,
        name: "Wireless Mouse",
        price: 29.99,
        description: "Ergonomic wireless mouse with precision tracking",
        icon: "fas fa-mouse"
    },
    {
        id: 5,
        name: "Phone Case",
        price: 19.99,
        description: "Protective phone case with elegant design",
        icon: "fas fa-mobile-alt"
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 89.99,
        description: "Portable bluetooth speaker with amazing sound quality",
        icon: "fas fa-volume-up"
    }
];

// Cart functionality
let cart = [];
let cartCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
});

// Load products into the grid
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <i class="${product.icon}"></i>
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">$${product.price}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCartCount();
        showNotification(`${product.name} added to cart!`);
    }
}

// Update cart count display
function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = cartCount;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #f093fb, #f5576c);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Cart icon click
    document.querySelector('.cart-icon').addEventListener('click', openCart);
    
    // Modal close
    document.querySelector('.close').addEventListener('click', closeCart);
    
    // Click outside modal to close
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('cart-modal');
        if (event.target === modal) {
            closeCart();
        }
    });
}

// Open cart modal
function openCart() {
    const modal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    
    // Clear previous items
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price} x ${item.quantity}</p>
                </div>
                <div>
                    <button onclick="removeFromCart(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 0.5rem; border-radius: 4px; cursor: pointer;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = total.toFixed(2);
    
    modal.style.display = 'block';
}

// Close cart modal
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    openCart(); // Refresh cart display
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}\n\nThis is a demo e-commerce site created by Sandhya Shrestha.`);
    
    // Clear cart
    cart = [];
    updateCartCount();
    closeCart();
}

// Smooth scroll to products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(300px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);