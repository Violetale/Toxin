import './dropdown.scss';
import $ from 'jquery';

//функция, устанавливающая в data-атрибуты каждого dropdown-item
// значения, необходимые для вывода в dropdown-selection
//посредством showResult
const setValue = function(dropdown,itemNem,itemCount){

}
const showItem=function(){}
const showResult = function(dropdown){
    let items = dropdown.find('.dropdown__item')
}
$('.dropdown').each(function(){
  let dropdown = $(this);
  let controls = $(dropdown).find('.controls');
  $(".iqdropdown").iqDropdown({
    onChange: function(itemName, itemCount, totalItems) {
      setValue(dropdown,itemName,itemCount);
      showItem(dropdown);
      //
      if(totalItems){
        $(controls).find('.button-reset').removeClass('hidden');
      }else{
        $(controls).find('.button-reset').addClass('hidden');
      }
  }
});
});


    //скрипты для поведения кнопок поведения