import './dropdown.scss';
import $ from 'jquery';
$(document).ready(function(){
        if($('.dropdown').hasClass("dropdown_opened")){
                $('.dropdown .material-icons').text('expand_less');
        }else{
                $('.dropdown .material-icons').text('expand_mo');
        }
        $('.dropdown').on('click',toggleDetails);
        function toggleDetails(e){
                if($(this).hasClass('dropdown_opened')){
                $(this).find('.material-icons').text('expand_less');
                //$('.dropdown').moveClass('dropdown_opened');
                } else{
                $('.dropdown .material-icons').text('expand_mo');
                }}

});
