(()=>{
  const forms = document.querySelectorAll('.form');
  if (forms.length === 0) {
    return;
  }

  const getFormData = (form)=>{
    const items = form.querySelectorAll('input, select, textarea');
    let str = '';
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const name = item.name;
      const value = item.value;
      const separator = i === 0 ? '' : '&';
      if (value) {
        str += separator + name + '=' + value;
      }
    }
    return str;
  }

  const formSend = (form)=> {
    const data = getFormData(form);
    const xhr = new XMLHttpRequest();
    const url = 'mail/mail.php';

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = ()=>{
      const activePopup = document.querySelector('.popup--active');
      if (activePopup) {
        activePopup.classList.remove('popup--active');
      }
      if (xhr.response === 'success') {
        document.querySelector('.popup-success').classList.add('popup--active');
      } else {
        document.querySelector('.popup-error').classList.add('popup--active');
      }
      form.reset();
    };
    xhr.send(data);
  }

  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', (evt)=>{
      evt.preventDefault();
      let form = evt.currentTarget;
      formSend(form);
    });
  }
})();