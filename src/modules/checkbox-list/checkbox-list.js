import './checkbox-list.scss';
import $ from 'jquery';
$(function(){
    $('.checkbox-list_label').on('click',toggleCheckboxList);
    function toggleCheckboxList(e){
        let self = this;
        self.toggleClass('open');
    }
});