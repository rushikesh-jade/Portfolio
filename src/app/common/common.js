
const navSlide = () => {
    let burger = window.document.querySelector('.app_menu_hamburger');
    let nav = document.querySelector('.app_menu');
    let navLinks = document.querySelectorAll('.app_menu li');

    console.log(burger);

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        console.log('clicked....');
    })

    navLinks.forEach((link, index) => {
        if (document.documentElement.clientWidth == 768) {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}`;
        }
        else {
            link.style.animation = `2s ease forwards ${index / 7}`;
        }
        console.log(index);
    })
}

setTimeout(() => {
    navSlide()
}, 0.5);
