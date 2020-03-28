import './dropdown.scss';
import $ from 'jquery';

//функция, устанавливающая в data-атрибуты каждого dropdown-item
// значения, необходимые для вывода в dropdown-selection
//посредством showResult
$(function(){
  const nouns={};//-написать
  let resultString="";
  const showResult = function(dropdown){
    let selection = $(dropdown).find('.dropdown-selection');
    $(selection).text("");
    let items = $(dropdown).find('.iqdropdown-menu-option');
    $(items).each(function(idx,elem){
      let count = $(elem).find('.counter').text();
      if(count!==0){
      resultString +=count;
      }
    })
    $(selection).text(resultString);
}

$('.dropdown').each(function(){
  let dropdown = $(this);
  let controls = $(dropdown).find('.controls');
  $(".iqdropdown").iqDropdown({
    onChange: function(itemName, itemCount, totalItems) {
      showResult(dropdown);
      if(totalItems){
        $(controls).find('.button-reset').removeClass('hidden');
      }else{
        $(controls).find('.button-reset').addClass('hidden');
      }
  }
});
});
//-событие apply 
//-событие принять

    //скрипты для поведения кнопок поведения
});
