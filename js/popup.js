(()=>{
  const body = document.querySelector('body');

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

  const getClosesAttribute = (item, attr)=>{
    let node = item;
    while(node) {
      let attributeValue = node.getAttribute(attr);
      if (attributeValue) {
        return attributeValue;
      }
      node = node.parentElement;
    }
    return null;
  };

  const showPopup = (target)=>{
    target.classList.add('popup--active');
  };

  const closePopup = (target)=>{
    target.classList.remove('popup--active');
  };

  const toggleScroll = ()=>{
    body.classList.toggle('no-scroll');
  };

  body.addEventListener('click', (evt)=>{
    let target = evt.target;
    let popupClass = getClosesAttribute(target, 'data-popup');
    if (popupClass === null) {
      return;
    };
    evt.preventDefault();
    const popup = document.querySelector('.' + popupClass);
    if (popup) {
      showPopup(popup);
      toggleScroll();
    }
  });

  body.addEventListener('click', (evt)=>{
    let target = evt.target;
    if (target.classList.contains('popup__button-close') || target.classList.contains('popup__main')) {
      let popup = getClosesClassName(target, 'popup');
      closePopup(popup);
      toggleScroll();
    }
  });
  
  body.addEventListener('keydown', (evt)=>{
    if (evt.keyCode !== 27) {
      return;
    }
    const popup = document.querySelector('.popup--active');
    if (popup) {
      closePopup(popup);
      toggleScroll();
    }
  });
})();