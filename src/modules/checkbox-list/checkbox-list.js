import './checkbox-list.scss';
import $ from 'jquery';
$(function(){
    $('.checkbox-list').on('click',toggleCheckboxList);
    function toggleCheckboxList(e){
        let self = this;
        $(self).toggleClass('checkbox-list_open');
        let icon = $(self).find('i');
        if($(icon).text()=='expand_less'){
            $(icon.text('expand_more'));
        }else {
            $(icon).text('expand_less');
        }
    }
});