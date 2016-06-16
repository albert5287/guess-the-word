import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerComponent from './footer.component';

const footer = angular.module('footer', [
  uiRouter
])

.component('footer', footerComponent).name;

export default footer;
