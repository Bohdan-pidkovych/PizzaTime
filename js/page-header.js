(()=>{
  if(window.matchMedia('(max-width: 992px)').matches) {
    return;
  }

  const pageHeader = document.querySelector('.page-header');
  
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0) {
      pageHeader.classList.add('page-header--active');

      let headerHeight = pageHeader.offsetHeight - 1 + 'px';

      document.documentElement.style.setProperty('--scroll-padding', headerHeight);
    } else {
      pageHeader.classList.remove('page-header--active');
    }
  })
})();
