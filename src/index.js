import $ from 'jquery';
import 'air-datepicker/dist/js/datepicker.js';
import 'air-datepicker/dist/css/datepicker.css';
// CSS (example)
//
function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
importAll(require.context('../src/', true, /\.js$|\.scss$/));
