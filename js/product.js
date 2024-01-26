(()=>{
  const catalog = document.querySelector('.catalog');
  if (catalog === null) {
    return;
  }

  const getClosesClassName = (item, className)=>{
    let node = item;
    while(node) {
      if (node.classList.contains(className)) {
        return node;
      }
      node = node.parentElement;
    }
    return null;
  };

  const changeProductSize = (target)=>{
    let product = getClosesClassName(target, 'product');
    const previousActiveButton = product.querySelector('.product__size--active');
    previousActiveButton.classList.remove('product__size--active');
    target.classList.add('product__size--active');
  };

  const changeProductOrder = (target)=>{
    let product = getClosesClassName(target, 'product');
    const order = document.querySelector('.popup-order');
    const productTitle = product.querySelector('.product__title').textContent;
    const productSize = product.querySelector('.product__size--active').textContent;
    const productPrice = product.querySelector('.product__price-value').textContent;
    const productImage = product.querySelector('.product__image').getAttribute('src');

    order.querySelector('.order__info-title').setAttribute('value', productTitle);
    order.querySelector('.order__info-price').setAttribute('value', productPrice);
    order.querySelector('.order__info-size').setAttribute('value', productSize);

    order.querySelector('.order__product-title').textContent = productTitle;
    order.querySelector('.order__product-price').textContent = productPrice;
    order.querySelector('.order__size').textContent = productSize;
    order.querySelector('.order__image').setAttribute('src', productImage);
  };

  catalog.addEventListener('click', (evt)=>{
    let target = evt.target;

    if (target.classList.contains('product__size') && !target.classList.contains('product__size--active')) {
      evt.preventDefault();
      changeProductSize(target);
    }

    if (target.classList.contains('product__button')) {
      evt.preventDefault();
      changeProductOrder(target);
    }
  });
})();