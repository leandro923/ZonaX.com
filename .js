checkoutBtn.addEventListener('click', () => {
    if(cart.length === 0) return alert('Tu carrito está vacío.');

    // Convertir carrito a JSON y codificar para URL
    const cartData = encodeURIComponent(JSON.stringify(cart));

    // Abrir la nueva pestaña con carrito en la URL
    window.open(`pago.html?cart=${cartData}`, '_blank');
});
