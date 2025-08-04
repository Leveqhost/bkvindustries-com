const products = [
    {
        id: 1,
        name: "Nunc Neque Eros",
        price: 120.00,
        originalPrice: 320.00,
        image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.8,
        reviews: 124,
        badge: "sale",
        discount: "-50%"
    },
    {
        id: 2,
        name: "Lorem Ipsum Lec",
        price: 110.00,
        originalPrice: 210.00,
        image: "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.9,
        reviews: 89,
        badge: "sale",
        discount: "-30%"
    },
    {
        id: 3,
        name: "Ras Neque Metus",
        price: 220.00,
        originalPrice: 450.00,
        image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.7,
        reviews: 67,
        badge: "new"
    },
    {
        id: 4,
        name: "Donec Non Est",
        price: 120.00,
        originalPrice: 320.00,
        image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.6,
        reviews: 103,
        badge: "sale",
        discount: "-41%"
    },
    {
        id: 5,
        name: "Letrasset Sheets",
        price: 120.00,
        originalPrice: 320.00,
        image: "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.9,
        reviews: 156,
        badge: "new"
    },
    {
        id: 6,
        name: "Mauris Vel Tellus",
        price: 180.00,
        originalPrice: 420.00,
        image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.8,
        reviews: 78,
        badge: "new"
    },
    {
        id: 7,
        name: "Proin Lectus Ipsum",
        price: 190.00,
        originalPrice: 350.00,
        image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.7,
        reviews: 94,
        badge: "sale",
        discount: "-40%"
    },
    {
        id: 8,
        name: "Mauris Vel Tellus",
        price: 180.00,
        originalPrice: 420.00,
        image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.8,
        reviews: 112,
        badge: "sale",
        discount: "-30%"
    },
    {
        id: 9,
        name: "Cas Neque Metus",
        price: 180.00,
        originalPrice: 420.00,
        image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.8,
        reviews: 112,
        badge: "sale",
        discount: "-52%"
    },
    {
        id: 10,
        name: "Etiam Gravida",
        price: 180.00,
        originalPrice: 420.00,
        image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Parts",
        rating: 4.8,
        reviews: 112,
        badge: "sale",
        discount: "-50%"
    }
];

// User credentials
const users = [
    { email: "admin@mazlay.com", password: "admin123", name: "Admin User" },
    { email: "user@mazlay.com", password: "user123", name: "Test User" }
];

// Shopping cart
let cart = JSON.parse(localStorage.getItem('mazlay_cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('mazlay_user')) || null;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const onsaleProducts = document.getElementById('onsaleProducts');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products.slice(0, 5), productsGrid);
    displayOnsaleProducts(products.slice(0, 4));
    updateCartUI();
    updateUserUI();
    initializeEventListeners();
    initializeAnimations();
});

// Display products
function displayProducts(productsToShow, container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Display on sale products
function displayOnsaleProducts(productsToShow) {
    if (!onsaleProducts) return;
    
    onsaleProducts.innerHTML = '';
    .57
    // First product - large card
    if (productsToShow[0]) {
        const largeCard = createLargeProductCard(productsToShow[0]);
        onsaleProducts.appendChild(largeCard);
    }
    
    // Remaining products - small cards
    productsToShow.slice(1).forEach(product => {
        const smallCard = createSmallProductCard(product);
        onsaleProducts.appendChild(smallCard);
    });
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-2 col-md-3 col-sm-4 col-6 mb-4';
    
    col.innerHTML = `
        <div class="product-card h-100">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" class="img-fluid">
                ${product.badge ? `<div class="product-badge ${product.badge}">${product.discount || (product.badge === 'new' ? 'New' : 'Sale')}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h6 class="product-title">${product.name}</h6>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                </div>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <div class="product-quick-actions">
                        <button class="btn-quick-action" onclick="addToWishlist(${product.id})">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="btn-quick-action" onclick="quickView(${product.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-quick-action" onclick="compareProduct(${product.id})">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Create large product card for on sale section
function createLargeProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-6 mb-4';
    
    col.innerHTML = `
        <div class="product-card h-100">
            <div class="product-image" style="height: 300px;">
                <img src="${product.image}" alt="${product.name}" class="img-fluid">
                ${product.badge ? `<div class="product-badge ${product.badge}">${product.discount || (product.badge === 'new' ? 'New' : 'Sale')}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h5 class="product-title">${product.name}</h5>
                <div class="product-rating mb-2">
                    ${generateStars(product.rating)}
                </div>
                <div class="product-price mb-3">
                    <span class="price-current" style="font-size: 1.5rem;">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <p class="text-muted mb-3">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc.</p>
                <div class="d-flex gap-2">
                    <button class="btn btn-danger" onclick="addToCart(${product.id})">ADD TO CART</button>
                    <button class="btn btn-outline-secondary" onclick="addToWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="btn btn-outline-secondary" onclick="quickView(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-outline-secondary" onclick="compareProduct(${product.id})">
                        <i class="fas fa-exchange-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Create small product card for on sale section
function createSmallProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-2 col-sm-4 col-6 mb-4';
    
    col.innerHTML = `
        <div class="product-card h-100">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" class="img-fluid">
                ${product.badge ? `<div class="product-badge ${product.badge}">${product.discount || (product.badge === 'new' ? 'New' : 'Sale')}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h6 class="product-title">${product.name}</h6>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                </div>
                <div class="product-price">
                    <span class="price-current">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="price-original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCart();
    showToast('Product added to cart!', 'success');
}

// Add to wishlist
function addToWishlist(productId) {
    showToast('Product added to wishlist!', 'success');
}

// Quick view
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create and show quick view modal
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${product.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid rounded">
                        </div>
                        <div class="col-md-6">
                            <div class="product-rating mb-3">
                                ${generateStars(product.rating)}
                                <small class="text-muted ms-2">(${product.reviews} reviews)</small>
                            </div>
                            <h4 class="text-danger mb-3">$${product.price.toFixed(2)}</h4>
                            <p class="text-muted mb-4">Premium automotive accessory designed for performance and style. High-quality materials and precision engineering ensure long-lasting durability.</p>
                            <button class="btn btn-danger btn-lg w-100" onclick="addToCart(${product.id}); bootstrap.Modal.getInstance(this.closest('.modal')).hide();">
                                <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// Compare product
function compareProduct(productId) {
    showToast('Product added to compare list!', 'info');
}

// Update cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart count badges
    document.querySelectorAll('.badge').forEach(badge => {
        if (badge.closest('.cart') || badge.closest('a[data-bs-target="#cartOffcanvas"]')) {
            badge.textContent = totalItems;
        }
    });
    
    // Update cart total
    if (cartTotal) {
        cartTotal.textContent = totalPrice.toFixed(2);
    }
    
    // Update cart total in header
    const headerCartTotal = document.querySelector('.cart-total');
    if (headerCartTotal) {
        headerCartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }
    
    displayCartItems();
}

// Display cart items
function displayCartItems() {
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-muted text-center">Your cart is empty</p>';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="d-flex align-items-center mt-2">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
        saveCart();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
    showToast('Product removed from cart', 'info');
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('mazlay_cart', JSON.stringify(cart));
}

// Login functionality
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = { email: user.email, name: user.name };
        localStorage.setItem('mazlay_user', JSON.stringify(currentUser));
        updateUserUI();
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        showToast(`Welcome back, ${user.name}!`, 'success');
        loginForm.reset();
    } else {
        showToast('Invalid email or password', 'error');
    }
}

// Register functionality
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        showToast('Email already exists', 'error');
        return;
    }
    
    users.push({ email, password, name });
    currentUser = { email, name };
    localStorage.setItem('mazlay_user', JSON.stringify(currentUser));
    updateUserUI();
    bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    showToast(`Account created successfully! Welcome, ${name}!`, 'success');
    registerForm.reset();
}

// Update user UI
function updateUserUI() {
    const loginBtn = document.querySelector('[data-bs-target="#loginModal"]');
    
    if (currentUser && loginBtn) {
        loginBtn.innerHTML = `<i class="fas fa-user me-1"></i>${currentUser.name}`;
        loginBtn.setAttribute('data-bs-toggle', 'dropdown');
        loginBtn.setAttribute('data-bs-target', '');
        
        // Create dropdown menu
        if (!document.querySelector('.user-dropdown')) {
            const dropdown = document.createElement('ul');
            dropdown.className = 'dropdown-menu user-dropdown';
            dropdown.innerHTML = `
                <li><a class="dropdown-item" href="#"><i class="fas fa-user me-2"></i>Profile</a></li>
                <li><a class="dropdown-item" href="#"><i class="fas fa-shopping-bag me-2"></i>Orders</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" onclick="logout()"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
            `;
            loginBtn.parentNode.appendChild(dropdown);
        }
    }
}

// Logout functionality
function logout() {
    currentUser = null;
    localStorage.removeItem('mazlay_user');
    location.reload();
}

// Checkout functionality
function handleCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    if (!currentUser) {
        showToast('Please login to checkout', 'error');
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).show();
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Simulate checkout process
    showToast('Processing your order...', 'info');
    
    setTimeout(() => {
        cart = [];
        updateCartUI();
        saveCart();
        bootstrap.Offcanvas.getInstance(document.getElementById('cartOffcanvas')).hide();
        showToast(`Order placed successfully! Total: $${total.toFixed(2)}`, 'success');
    }, 2000);
}

// Show toast notification
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'primary'} border-0`;
    toast.setAttribute('role', 'alert');
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

// Create toast container
function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container position-fixed top-0 end-0 p-3';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    return container;
}

// Initialize event listeners
function initializeEventListeners() {
    // Login form
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Register form
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
    
    // Search functionality
    const searchInput = document.querySelector('input[placeholder="Search product..."]');
    const searchBtn = searchInput?.nextElementSibling;
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
            );
            displayProducts(filteredProducts.slice(0, 5), productsGrid);
        } else {
            displayProducts(products.slice(0, 5), productsGrid);
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Newsletter subscription
    const newsletterBtn = document.querySelector('.newsletter-form .btn-danger');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', () => {
            const emailInput = document.querySelector('.newsletter-form input[type="email"]');
            const email = emailInput?.value;
            if (email) {
                showToast('Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
            } else {
                showToast('Please enter a valid email address', 'error');
            }
        });
    }
    
    // Carousel controls
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            // Implement carousel previous functionality
            showToast('Previous products', 'info');
        });
        
        nextBtn.addEventListener('click', () => {
            // Implement carousel next functionality
            showToast('Next products', 'info');
        });
    }
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    // Adjust layout if needed
    if (window.innerWidth < 768) {
        // Mobile adjustments
    }
});

// Handle scroll events
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.main-nav');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Add scrolled class styles
const style = document.createElement('style');
style.textContent = `
    .main-nav.scrolled {
        background: rgba(255, 255, 255, 0.95) !important;
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(style);




const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, 500);
document.getElementById('model-viewer').appendChild(renderer.domElement);

// Lighting
const light = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(light);

// Load GLTF model
const loader = new THREE.GLTFLoader();
loader.load('3d\ola_electric_activa\scene.gltf', function (gltf) {
  scene.add(gltf.scene);
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.set(0, 0, 0);
}, undefined, function (error) {
  console.error(error);
});

// Camera position
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
