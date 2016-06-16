import angular from 'angular';
import Navbar from './navbar';
import Footer from './footer';

const common = angular.module('app.common', [
  Navbar,
  Footer
])
.name;

export default common;
