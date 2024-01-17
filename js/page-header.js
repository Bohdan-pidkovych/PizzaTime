(()=>{
  const pageHeader = document.querySelector('.page-header');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0) {
      pageHeader.classList.add('page-header--active');
    } else {
      pageHeader.classList.remove('page-header--active');
    }
  })
})();
