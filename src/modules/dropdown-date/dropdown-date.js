import './dropdown-date.scss';
import $ from 'jquery';

$(() => {

  class DropdownDate {
    constructor(component) {
      this.component = component;
      this.createDatepicker(this.component);
      this.attachEventHundlers();
    }
    createDatepicker(component) {
      this.$fields = $('.dropdown-date__input', this.component);
      this.$start = $('.js-dropdown-date__start', this.component);
      this.$end = $('.js-dropdown-date__end', this.component);
      console.log(this.$fields);
      //options for dropdown-date with one input
      const options = {
        prevHtml: '<i class="material-icons">arrow_back</i>',
        nextHtml: '<i class="material-icons">arrow_forward</i>'
      }
      //options for dropdown-date with two inputs
      const optionsTwoFields = {
        prevHtml: '<i class="material-icons">arrow_back</i>',
        nextHtml: '<i class="material-icons">arrow_forward</i>',
        onSelect: function (formattedDate, date, inst) {
          //-let separator = inst.views.days.opts.multipleDatesSeparator;
          let separator = " - ";
          const [firstDate, secondDate] = formattedDate.split(separator);
          $(this.$fields[0]).val(firstDate);
          
          $(this.$fields[1]).val(secondDate);
        }
      }
      if($(component).hasClass('dropdown-date_twoFields')){
        this.datepicker= $(this.$start).datepicker(optionsTwoFields).data('datepicker')
      }else{
        this.datepicker= $(this.$fields).datepicker(options).data('datepicker');
      }
      console.log($(component).hasClass('dropdown-date_twoFields'));
      //add buttons
      let buttonReset = "<div class='button-reset'><button class='button button_link'>Очистить</button></div>";
      let buttonApply = "<div class='button-apply'><button class='button button_link'>Применить</button></div>";
      let controls = $('<div class="dropdown-date__controls">' + buttonReset + buttonApply + '</div>');

     $(this.datepicker.$datepicker).append($(controls));
      
    }
    attachEventHundlers(){
      $('.dropdown-date__controls .button-apply', this.component).on('click', this.toApply.bind(this));
      debugger;
      $('.dropdown-date__controls .button-reset', this.component).on('click', this.toReset.bind(this));
    }
    toApply(e){
      $(this.datepicker.$datepicker).hide();
    }
    toReset(){
      $(this.datepicker.$datepicker).clear();
    }
  }

  $('.js-dropdown-date').each(function (idx, el) {
    new DropdownDate($(el));
  });

});


