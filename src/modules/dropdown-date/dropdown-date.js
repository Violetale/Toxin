import './dropdown-date.scss';
import $ from 'jquery';

$(()=>{
  class DropdownDate {
    constructor(component) {
      this.component = component;
      this.$start = $('.js-dropdown-date__start', this.$component);
      this.$end = $('.js-dropdown-date__end', this.$component);
      this._attachEventHandler(this.$start,this.$end);
    }
    _attachEventHandler(start,end){
        $(start).datepicker({
          todayButton: new Date(),
          onSelect: function (formattedDate, date, inst) {
            let separator= inst.views.days.opts.multipleDatesSeparator;
            const [ firstDate, secondDate ] = formattedDate.split(separator);
            $(start).val(firstDate);
            $(end).val(secondDate);
          },
    }).data('datepicker');
    }
  }
    $('.js-dropdown-date').each((index, elem) => {
      new DropdownDate(elem);
  });
});


