function menuSetup() {
    const menuBtn = document.getElementById('menubtn');
    const menu = document.querySelector('.menu');
    let isMenuOpen = false;
  
    menu.style.transition = 'transform 0.3s ease-in-out';
    
    menuBtn.addEventListener('click', () => {
      if(isMenuOpen) {
        menu.style.transform = 'translateX(0)';
        menu.classList.remove('active');
      } else {
        menu.style.transform = 'translateX(-400px)';
        menu.classList.add('active');
      }
      isMenuOpen = !isMenuOpen;
    });
  }
  
  document.addEventListener('DOMContentLoaded', menuSetup);