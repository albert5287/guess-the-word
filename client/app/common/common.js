import angular from 'angular';
import Navbar from './navbar';

const common = angular.module('app.common', [
  Navbar
])
.name;

export default common;
