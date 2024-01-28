(()=>{
  const forms = document.querySelectorAll('.form');
  if (forms.length === 0) {
    return;
  }

  const formSend = (form)=> {
    const xhr = new XMLHttpRequest();
    const url = 'mail.mail.php';

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = ()=>{

    };
    xhr.send();
  }

  for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', (evt)=>{
      evt.preventDefault();
      let form = evt.currentTarget;
      formSend(form);
    });
  }
})();