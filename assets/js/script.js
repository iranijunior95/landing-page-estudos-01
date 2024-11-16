(function() {
    const $btnMenuMobile = document.querySelector('#btn-menu-mobile');
    const $menuMobile = document.querySelector('#menu-mobile');

    $btnMenuMobile.addEventListener('click', () => $menuMobile.classList.toggle('active'));
}());