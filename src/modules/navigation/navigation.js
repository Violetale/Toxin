import './navigation.scss';
import $ from 'jquery';

$(function(){
    let $buttonMobMenu=$('.button-mobile-menu');
    $buttonMobMenu.on('click',toggleMenu);
    function toggleMenu(e){
        $(this).next('.navigation').toggleClass('navigation_open');
    }
});