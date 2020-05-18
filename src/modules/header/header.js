import './header.scss';
$(function(){
    $('.js-user-button').on('click',showUserButtons);
    function showUserButtons(e){
        $(this).siblings('.header__buttons').toggleClass('header__buttons_open');
    }
}

);