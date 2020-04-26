import './dropdown-date.scss';
import $ from 'jquery';

$(() => {
  class DropdownDate {
    constructor(component) {
      this.component = component;
      this.$start = $('.js-dropdown-date__start', this.$component);
      this.$end = $('.js-dropdown-date__end', this.$component);
      this._attachEventHandler(this.$start, this.$end);
    }
    _attachEventHandler(start, end) {
      $(start).datepicker({
        onSelect: function (formattedDate, date, inst) {
          let separator = inst.views.days.opts.multipleDatesSeparator;
          const [firstDate, secondDate] = formattedDate.split(separator);
          $(start).val(firstDate);
          $(end).val(secondDate);
        },
      }).data('datepicker');
    }
  }

  $('.datepicker-here').datepicker();
  
  $('.datepicker--nav-action[data-action="prev"]').html('<i class="material-icons"> arrow_back</i>');
  $('.datepicker--nav-action[data-action="next"]').html('<i class="material-icons"> arrow_forward</i>');
  let buttonReset ="<div class='button-reset'><button class='button button_link'>Очистить</button></div>";
  let buttonApply="<div class='button-apply'><button class='button button_link'>Применить</button></div>";
  let controls = $('<div class="controls">'+buttonReset+buttonApply+'</div>');
  $('.button-apply').on('click', apply);
  $('.datepicker').append(controls);

  function apply(e) {
    $(this).closest('.datepicker').data('datepicker').hide();
  }
  $('.button-reset').on('click', reset);
  function reset(e) {
    let $datepicker= $(this).closest('.datepicker').data('datepicker');
    $datepicker.clear();
    $datepicker.find('input').val("");

  }
  $('.js-dropdown-date').each((index, elem) => {
    new DropdownDate(elem);
  });
});


