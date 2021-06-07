window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM fully loaded and parsed');


  const modalOpenBtnDesktop = document.querySelector('.header__login-btn');
  const modalBody = document.querySelector('.modal');
  const modalScreen = document.querySelector('.modal-screen');
  const modalClose = document.querySelector('.modal-close');

  modalOpenBtnDesktop.addEventListener('click', () => {
    modalScreen.style.display = 'inline-block';
    modalBody.style.left = '0';
  })
  modalClose.addEventListener('click', () => {
    modalBody.style.left = '-99999999%';
    modalScreen.style.display = 'none';
  })

  modalOpenMobile = document.querySelector('.nav-burger__login-btn');

  
  modalOpenMobile.addEventListener('click', () => {
    modalBody.style.left = '0';
  })

  window.onclick = function(event) {
    if (event.target == modalBody) {
      modalBody.style.left = '-99999999%';
    }
  }

});


 


 