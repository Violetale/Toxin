import './dropdown-date.scss';
import $ from 'jquery';
$(()=>{
  class DateDropdown {
    constructor(component) {
      this.component = component;
      this.$start = $('.js-date-dropdown__start', this.$component);
      this.$end = $('.js-date-dropdown__end', this.$component);
      this._attachEventHandler(this.$start,this.$end);
    }
    _attachEventHandler(start,end){
        $(start).datepicker({
          todayButton: new Date(),
          //-range: $(this).component,
          onSelect: function (formattedDate, date, inst) {
            const [ firstDate, secondDate ] = fd.split(inst.views.days.opts.multipleDatesSeparator);
            $(start).val(firstDate);
            $(end).val(secondDate);
          },
    }).data('datepicker');
    }
  }
    $('.js-date-dropdown').each((index, node) => {
      new DateDropdown(node);
  });
});


