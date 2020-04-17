import './dropdown.scss';
import $ from 'jquery';

$(function () {

  //-стартовые переменные
  let $dropdown = $('.dropdown');
  let $selection = $dropdown.find('.dropdown__selection');
  let $incrementButton = $dropdown.find('.button_increment');
  let $decrementButton = $dropdown.find('.button_decrement');

  //навешиваем обработчики
  $selection.on('click', toggleMark);
  $incrementButton.on('click',incrementCounter);
  $decrementButton.on('click',decrementCounter);


  //-везде отображаем текст по умолчанию(переписать,где передаются статы)
  $dropdown.each(function (idx, el) {
    let $text = $(el).attr("data-defaultText");
    let $selection = $(el).find('.dropdown__selection');
    showSelection($selection, $text);
  });

  //правильная иконка в selection
  function setMark(dropdown) {
    let $mark = $(dropdown).find('i');
    if ($(dropdown).hasClass('dropdown_open')) {
      $mark.html('expand_more');
    } else {
      $mark.html('expand_less');
    }

  }

  //переключение иконки 
  function toggleMark(e) {
    setMark($dropdown);
    $dropdown.toggleClass('dropdown_open');
  }

  //инкремент счетчика
  function incrementCounter(e){
    let $counter=$(this).siblings('.counter');
    let newCount= Number($counter.attr("data-count"))+1;
    $counter.attr("data-count",newCount);
    $counter.html(newCount);
  }

  //декремент счетчика
  function decrementCounter(e){
    let $counter=$(this).siblings('.counter');
    let newCount= Number($counter.attr("data-count"))-1;
    $counter.attr("data-count",newCount);
    $counter.html(newCount);
  }

  //correct naming
  function correctNaming(itemName, itemCount) {
    let nounsString = $(`[data-id=${itemName}]`).attr('data-nouns');
    let nouns = nounsString.split(',');
    console.log(nouns);
    if (itemCount == 0) {
      return '';
    } else if (itemCount == 1) {
      return `${itemCount} ${nouns[0]}`
    } else if (itemCount > 1 && itemCount <= 5) {
      return `${itemCount} ${nouns[1]}`
    } else {
      return `${itemCount} ${nouns[2]}`
    }
  }

  function setSelectionText(itemName, itemCount, totalItems, defaultText) {
    let resultString = "";
    if (totalItems == 0) {
      resultString = defaultText;
    } else {
      resultString = correctNaming(itemName, itemCount);
    }
    return `${resultString}`;
  }
  function showSelection(selection, string) {
    $(selection).text(string);
  }

  /*  
    function onChange(itemName,itemCount,totalItems){
  
        if(totalItems){
          $($controls).find('.button-reset').removeClass('hidden');
          
        }else{
          $($controls).find('.button-reset').addClass('hidden');
        }
        console.log(itemCount);
        let $text = setSelectionText(itemName,itemCount,totalItems,$defaultText);
        showSelection($selection,$text);
    }
  }
    
  });
  showSelection($selection,$defaultText);
  });
  */
  //-событие apply 
  //-событие принять

  //скрипты для поведения кнопок поведения
});

