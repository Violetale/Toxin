import './field.scss';
import 'jquery.maskedinput/src/jquery.maskedinput';

const maskedFields = $('.text-field_masked');
maskedFields.mask('99.99.9999');