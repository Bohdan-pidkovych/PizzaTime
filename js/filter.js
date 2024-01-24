(()=>{
  const catalog = document.querySelector('.catalog');
  if (catalog === null) {
    return;
  }

  const catalogList = catalog.querySelector('.catalog__list');
  const catalogSortList = catalog.querySelector('.catalog__sort-list');
  const catalogItems = catalog.querySelectorAll('.catalog__item');

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

  const removeChildren = (item)=>{
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
  };

  const updateChildren = (item, children)=>{
    removeChildren(item);
    for (let i = 0; i < children.length; i++) {
      item.appendChild(children[i]);
    }
  };

  catalogSortList.addEventListener('click', (evt)=>{
    let target = evt.target;
    let item = getClosesClassName(target, 'catalog__sort-button');

    if (item === null || item.classList.contains('catalog__sort-button--active')) {
      return;
    }

    evt.preventDefault();

    const filterValue = item.getAttribute('data-filter');
    const previousActiveButton = catalogSortList.querySelector('.catalog__sort-button--active');

    previousActiveButton.classList.remove('catalog__sort-button--active');
    item.classList.add('catalog__sort-button--active');

    if (filterValue === 'all') {
      updateChildren(catalogList, catalogItems);
      return;
    }

    let filteredItems = [];

    for (let i = 0; i < catalogItems.length; i++) {
      const currentElement = catalogItems[i];
      if (currentElement.getAttribute('data-category') === filterValue) {
        filteredItems.push(currentElement);
      }
    }
    
    updateChildren(catalogList, filteredItems);
  });
})();