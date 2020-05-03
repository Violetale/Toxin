import './dropdown.scss';
import $ from 'jquery';

$(function () {

  //-стартовые переменные
  let $dropdown = $('.dropdown');
  let $selection = $dropdown.find('.dropdown__selection');
  let $incrementButton = $dropdown.find('.button_increment');
  let $decrementButton = $dropdown.find('.button_decrement');
  let $buttonApply = $dropdown.find('.button-apply');
  let $buttonReset = $dropdown.find('.button-reset');

  //навешиваем обработчики
  $selection.on('click', toggleMark);
  $incrementButton.on('click', incrementCounter);
  $decrementButton.on('click', decrementCounter);
  $buttonApply.on('click', apply);
  $buttonReset.on('click', reset);
  $dropdown.change(onChange); 


  //-везде отображаем текст по умолчанию(переписать,где передаются статы)
  $dropdown.each(function (idx, el) {
    let $el = $(el);
    let $text = $el.attr("data-defaultText");
    let $selection = $el.find('.dropdown__selection');

    showSelection($selection, $text);
    setMark($el);
    let $counters = $el.find('.counter');
    $counters.each(function (idx, counter) {

      let count = Number($(counter).attr("data-count"));
      let $decrementButton = $(counter).siblings('.button_decrement');

      if (count == 0) {
        disableButton($decrementButton);
      }

    });

  });

  //правильная иконка в selection
  function setMark(dropdown) {

    let $mark = $(dropdown).find('i');
    
    if ($(dropdown).hasClass('dropdown_open')) {
      $mark.html('expand_less');
    } else {
      $mark.html('expand_more');
    }

  }

  //переключение иконки 
  function toggleMark(e) {
    
    let $dropdown = $(this).closest('.dropdown');

    $dropdown.toggleClass('dropdown_open');

    setMark($dropdown);

    
  }

  //инкремент счетчика
  function incrementCounter(e) {

    let $counter = $(this).siblings('.counter');
    let count = Number($counter.attr("data-count"));

    let newCount = count + 1;

    $counter.attr("data-count", newCount);
    $counter.html(newCount);
    
    if (newCount == 1) {
      $counter.siblings('.button_decrement').removeClass('disabled');
      $counter.siblings('.button_decrement').on('click', decrementCounter);
    }
    $(this).closest('.dropdown').change();
  }

  //декремент счетчика
  function decrementCounter(e) {

    let $counter = $(this).siblings('.counter');
    let count = Number($counter.attr("data-count"));

    if (count > 0) {
      let newCount = count - 1;
      $counter.attr("data-count", newCount);
      $counter.html(newCount);

      if (newCount == 0) {
        disableButton($(this));
      }
    }

  }

  //деактивация кнопки
  function disableButton(button) {

    $(button).off('click', decrementCounter);
    $(button).addClass('disabled');

  }

  //событие apply
  function apply(e) {

    let $dropdown = $(this).closest('.dropdown');
    toggleMark($(this));

  }

  //событие reset,сбрасывает счётчики в дропдауне
  function reset(e) {
    let $counters = $(this).closest('.dropdown__menu').find('.counter');
    $counters.each(function (idx, counter) {
      $(counter).attr("data-count", 0);
      $(counter).html("0");
    });
  }

  //correct naming
  function correctNaming(itemName, itemCount) {
    let nounsString = $(`[data-id=${itemName}]`).attr('data-nouns');
    let nouns = nounsString.split(',');
    
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

  
  function onChange(itemName,itemCount,totalItems){}
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
});

