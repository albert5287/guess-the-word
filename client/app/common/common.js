import angular from 'angular';
import Navbar from './navbar';
import Footer from './footer';
import LocalStorage from './local_storage';

const common = angular.module('app.common', [
  Navbar,
  Footer,
  LocalStorage
])
.name;

export default common;
