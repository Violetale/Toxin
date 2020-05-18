import './range-slider.scss';
import $ from 'jquery';
$(function(){
  $('.range-slider__input').ionRangeSlider({
    type: 'double',
    min: 0,                        // минимальное значение
    max: 15000,                       // максимальное значение
    from: 5000,
    to: 10000,
    step:50,
    onChange: function(data){
      writeResult(data);
    },
    onStart:function(data){
      writeResult(data);
    }
        });
  
    const output = $('.range-slider__output');
    function writeResult(data){
        const res = `${data.from} &#8381; - ${data.to} &#8381;`;
        $('.range-slider__output').html(res);
    }
  });
