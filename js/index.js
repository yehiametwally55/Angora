const nav = document.querySelector('.navbar');
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                nav.classList.add('navbar-scrolled');
                nav.classList.remove('bg-transparent');
            } else {
                nav.classList.remove('navbar-scrolled');
                nav.classList.add('bg-transparent');
            }
});
