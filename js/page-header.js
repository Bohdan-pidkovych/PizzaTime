(()=>{
  const pageHeader = document.querySelector('.page-header');
  const fixHeaderScroll = ()=>{
    let headerHeight = pageHeader.offsetHeight - 1 + 'px';
    document.documentElement.style.setProperty('--scroll-padding', headerHeight);
  };

  if(window.matchMedia('(max-width: 992px)').matches) {
    fixHeaderScroll();
    return;
  };
  
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0) {
      pageHeader.classList.add('page-header--active');
      fixHeaderScroll();
    } else {
      pageHeader.classList.remove('page-header--active');
    }
  });
})();
