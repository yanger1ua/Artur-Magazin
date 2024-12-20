// Функція для додавання товару в кошик
function addToCart(productName, productPrice, productImage) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { name: productName, price: productPrice, image: productImage };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartTotal();
    updateCartItems(); // Оновлення відображення товарів у кошику
}

// Оновлення кількості товарів у кошику
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// Оновлення загальної суми кошика
function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    document.getElementById('cart-total').textContent = total + ' грн'; // Відображення суми
}

// Оновлення товарів у кошику (відображення списку)
function updateCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Очищаємо список

    cart.forEach((product, index) => {
        const li = document.createElement('li');
        
        // Створення елементів для товару
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        
        const text = document.createElement('span');
        text.textContent = `${product.name} - ${product.price} грн`;

        // Створення кнопки для видалення товару
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.onclick = () => removeFromCart(index); // Видалення товару за індексом
        
        li.appendChild(img);
        li.appendChild(text);
        li.appendChild(deleteButton);
        cartItemsList.appendChild(li);
    });
}

// Видалення товару з кошика
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Видаляємо товар по індексу
    localStorage.setItem('cart', JSON.stringify(cart)); // Зберігаємо зміни
    updateCartCount(); // Оновлення кількості товарів
    updateCartTotal(); // Оновлення суми
    updateCartItems(); // Оновлення списку товарів
}

// Завантаження кількості товарів у кошику, суми та списку при завантаженні сторінки
window.onload = function() {
    updateCartCount();
    updateCartTotal();
    updateCartItems();
}


document.getElementById('checkout-button').addEventListener('click', function() {
    // Перенаправлення на сторінку введення адреси
    window.location.href = '/cart.html'; // Шлях до сторінки введення адреси
});
