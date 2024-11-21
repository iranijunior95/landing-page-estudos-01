(function() {
    const $btnMenuMobile = document.querySelector('#btn-menu-mobile');
    const $menuMobile = document.querySelector('#menu-mobile');
    const $pircingCard = document.querySelectorAll('.pircing-card');
    const $summary = document.querySelectorAll('summary');
    const $pircingCardImg = document.querySelectorAll('.pircing-card-img');

    $btnMenuMobile.addEventListener('click', () => $menuMobile.classList.toggle('active'));

    //Capturar evento do click nos cards details da section picing
    $pircingCard.forEach((pircing, index) => {
        $summary[index].addEventListener('click', () => gerenciarEstadoPircingCard(pircing, index));
    });

    function gerenciarEstadoPircingCard(pircing, index) {
        if(pircing.className.indexOf('pircing-card-active') > 0) {
            pircing.classList.remove('pircing-card-active');
            $pircingCardImg[index].setAttribute('src', './assets/img/plus-icon.svg');
        }else {
            pircing.classList.add('pircing-card-active');
            $pircingCardImg[index].setAttribute('src', './assets/img/negative-icon.svg');
        }
    }
}());