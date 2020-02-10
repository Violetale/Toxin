import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';
// CSS (example)
//
function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
importAll(require.context('../src/', true, /\.js$|\.scss$/));
