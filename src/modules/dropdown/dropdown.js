import './dropdown.scss';
import $ from 'jquery';

$(function(){
 
  function correctNaming(itemName,itemCount){
    let nounsString=$(`[data-id=${itemName}]`).attr('data-nouns');
    let nouns = nounsString.split(',');
    console.log(nouns);
    if(itemCount==0){
      return '';
    }else if(itemCount==1){
      return `${itemCount} ${nouns[0]}`
    }else if(itemCount>1&&itemCount<=5){
      return `${itemCount} ${nouns[1]}`
    }else{
      return `${itemCount} ${nouns[2]}`
    }
  }

  function setSelectionText(itemName,itemCount,totalItems,defaultText){
    let resultString ="";
    if(totalItems==0){
      resultString = defaultText;
    }else{
      resultString = correctNaming(itemName,itemCount);
    }
    return `${resultString}`;
  }
  function showSelection(selection,string){
      $(selection).html(string);
  }
  
$('.dropdown').each(function(){
  let $dropdown = $(this);
  let $controls = $($dropdown).find('.controls');
  let $selection =$($dropdown).find('.iqdropdown-selection');
  let $defaultText= $($dropdown).find('.iqdropdown').attr('data-defaultText');
  
  $(".iqdropdown").iqDropdown({
    onChange(itemName, itemCount, totalItems){ 
      if(totalItems){
        $($controls).find('.button-reset').removeClass('hidden');
        
      }else{
        $($controls).find('.button-reset').addClass('hidden');
      }
      console.log(itemCount);
      let $text = setSelectionText(itemName,itemCount,totalItems,$defaultText);
      $($selection).html($text);
  }
  
});
showSelection($selection,$defaultText);
});
//-событие apply 
//-событие принять

    //скрипты для поведения кнопок поведения
});
