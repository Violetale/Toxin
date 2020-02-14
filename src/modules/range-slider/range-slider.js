import './range-slider.scss';
import $ from 'jquery';
  $(document).ready(function() {
    $('.range-slider__input').ionRangeSlider({
      type: 'double',
      min: 0,                        // минимальное значение
      max: 15000,                       // максимальное значение
      from: 5000,
      to: 10000,
      onChange: function(data) {
        /*$(this).find('.range-slider__value').html(data);
        writeValue(data)*/
    },
    onStart: function(data) {
        writeValue(data)
    }
    });
  });