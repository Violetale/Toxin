import './datepicker.scss';
import $ from 'jquery';
$(document).ready(function(){
    let buttonReset ="<div class='button-reset'><button class='button button_link'>Очистить</button></div>";
    let buttonApply="<div class='button-apply'><button class='button button_link'>Применить</button></div>";
    let controls = $('<div class="controls">'+buttonReset+buttonApply+'</div>');
    $('.datepicker-here').datepicker({});
    $('.datepicker').append(controls);
    $('.datepicker--nav-action[data-action="prev"]').html('<i class="material-icons"> arrow_back</i>');
    $('.datepicker--nav-action[data-action="next"]').html('<i class="material-icons"> arrow_forward</i>');
});