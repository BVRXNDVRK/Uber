const burger = document.querySelector('.header__burger'),
      menuItems = document.querySelectorAll('.header__link'),
      menu = document.querySelector('.header__navbar');

burger.addEventListener('click', (e) => {
    burger.classList.toggle('header__burger_active');

    if (burger.classList.contains('header__burger_active')) {
        menu.style.left = '0';
    } else {
        menu.style.left = '-150%';
    }
})

menuItems.forEach(i => {
    i.addEventListener('click', () => {
        burger.classList.toggle('header__burger_active');
        menu.style.left = '-150%';
    })
})