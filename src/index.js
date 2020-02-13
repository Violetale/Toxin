import $ from 'jquery';
import 'normalize.css';
import 'air-datepicker/dist/js/datepicker.js';
import 'air-datepicker/dist/css/datepicker.css';
import './assets/scss/fonts.scss';
import './templates/base.scss';
import './templates/layout-page.scss';
// CSS (example)
//
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./modules', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));  // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
requireAll(require.context('./pages', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));
/*function importAll(resolve) {
    resolve.keys().forEach(resolve);
  }
importAll(require.context('../src/', true, /\.js$|\.scss$/));*/
