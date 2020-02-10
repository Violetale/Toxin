//переписать код под pug
  $(function() {
    $('.range-slider__slider').slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $('.range-slider__count').val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $('.range-slider__count').val( "$" + $('.range-slider__slider').slider( "values", 0 ) +
      " - $" + $('.range-slider__slider').slider( "values", 1 ) );
  } );