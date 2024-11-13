(function() {
    const $btnMobile = document.querySelectorAll('.btn-menu-mobile')[0];
    const $menuMobile = document.querySelectorAll('.menu-mobile')[0];
    const $mobileConteudo = document.querySelectorAll('.mobile-conteudo')[0];

    $btnMobile.addEventListener('click', () => activeMenuMobile());

    function activeMenuMobile() {
        if($menuMobile.classList[1] !== undefined && $menuMobile.classList[1] === 'active') {
            $menuMobile.style = 'border-top: none';
            $mobileConteudo.style = 'border-top: none';
        }else {
            $menuMobile.style = 'border-top: 1px solid #000000'; 
            $mobileConteudo.style = 'border-top: 1px solid #000000';
        }
         
        $menuMobile.classList.toggle('active');
    }
    
}());