import './field.scss';
const maskInput = new MaskInput(document.querySelector('.text-field-masked'), {
    mask: 'ДД.ММ.ГГГГ',
    alwaysShowMask: true,
    maskChar: '_',
  });