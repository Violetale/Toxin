import './field.scss';
import $ from 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput';
$(function(){
    const maskedFields = $('.text-field_masked');
    maskedFields.mask('31.12.9999');
});
