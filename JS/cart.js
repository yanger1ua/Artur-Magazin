function addToCart(name, price, image) {
    // Отримуємо поточний список товарів у кошику з localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Додаємо новий товар до кошика
    cart.push({ name, price, image });

    // Зберігаємо оновлений кошик в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Оновлюємо відображення кількості товарів у кошику
    document.getElementById('cart-count').textContent = cart.length;
}

document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Попереджаємо стандартне відправлення форми

    // Приховуємо форму
    document.getElementById('address-form').style.display = 'none';

    // Показуємо повідомлення про успішне замовлення
    document.getElementById('order-success').style.display = 'block';

    // Генерація випадкового номера замовлення
    let orderNumber = Math.floor(Math.random() * 1000000); // Генеруємо випадковий номер
    document.getElementById('order-number').textContent = orderNumber;
});
