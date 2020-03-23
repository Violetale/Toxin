import './dropdown.scss';
import $ from 'jquery';
$(".custom").iqDropdown({
        minItems: 1,
        maxItems: 5,
        selectionText: "passenger",
        textPlural: "passengers",
        onChange: function(id, count, totalItems) {
          console.log(id, count, totalItems);
        },
        beforeDecrement: function(id, itemCount) {
          if (id === "adult") {
            return itemCount.adult > itemCount.infant;
          }
          return true;
        },
        beforeIncrement: function(id, itemCount) {
          if (id === "infant") {
            return itemCount.adult > itemCount.infant;
          }
          return true;
        }
      });