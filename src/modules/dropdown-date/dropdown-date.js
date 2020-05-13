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
      //options for datepicker
      const options = {
        prevHtml: '<i class="material-icons">arrow_back</i>',
        nextHtml: '<i class="material-icons">arrow_forward</i>',
        onSelect: this.onSelect.bind(this)
      }
      this.datepicker = $(this.$fields[0]).datepicker(options).data('datepicker');

      //-if datepicker is static showed then hide input with label
      if ($(this.$fields).attr('data-inline') === 'true') {
        $(this.$fields).css('display', 'none');
      }
      //add buttons
      let buttonReset = "<div class='button-reset'><button class='button button_link'>Очистить</button></div>";
      let buttonApply = "<div class='button-apply'><button class='button button_link'>Применить</button></div>";
      let controls = $('<div class="dropdown-date__controls">' + buttonReset + buttonApply + '</div>');

      $(this.datepicker.$datepicker).append($(controls));

      this.$buttonReset = $(controls).find('.button-reset');
      this.$buttonApply = $(controls).find('.button-apply');
    }
    attachEventHundlers() {
      this.$buttonApply.on('click', this.toApply.bind(this));
      this.$buttonReset.on('click', this.toReset.bind(this));
    }

    toApply() {
      this.datepicker.hide();
    }

    toReset() {
      this.datepicker.clear();
    }

    onSelect(formattedDate, date, inst) {
      let separator = inst.views.days.opts.multipleDatesSeparator;
      const [firstDate, secondDate] = formattedDate.split(separator);

      $(this.$start).val(firstDate);
      $(this.$end).val(secondDate);
    }
  }

  $('.js-dropdown-date').each(function (idx, el) {
    new DropdownDate($(el));
  });

});


