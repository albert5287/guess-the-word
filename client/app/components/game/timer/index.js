import angular from 'angular';
import uiRouter from 'angular-ui-router';
import timerComponent from './timer.component';

const timer = angular.module('timer', [
  uiRouter
])

.component('timer', timerComponent).name;

export default timer;
