function filterProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product-item');

  products.forEach(product => {
    const text = product.textContent.toLowerCase();
    if (text.includes(input)) {
      product.style.display = '';
    } else {
      product.style.display = 'none';
    }
  });
}
