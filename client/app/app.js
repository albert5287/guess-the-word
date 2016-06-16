import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import Common from './common/common';
import AppComponent from './app.component';

const root = angular
.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(config)

  .component('app', AppComponent);

  export default root;

function config($locationProvider, $urlRouterProvider){
    "ngInject";

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');
}