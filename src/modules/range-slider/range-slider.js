import './range-slider.scss';
import $ from 'jquery';
  $(document).ready(function() {
    $('.range-slider').ionrange-slider({
      min: 10,                        // минимальное значение
      max: 100,                       // максимальное значение
      from: 30});
  });