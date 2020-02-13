import './dropdown.scss';
import $ from 'jquery';
$()
function dropdown(){
        if($('.dropdown').hasClass('dropdown_opened')){
        $('.dropdown .material-icons').html('expand_less');
        $('.dropdown').removeClass('dropdown_opened');
        } else{
        $('.dropdown .material-icons').html('expand_more');
}
}
