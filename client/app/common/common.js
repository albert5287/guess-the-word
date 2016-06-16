import angular from 'angular';
import Navbar from './navbar';
import Footer from './footer';
import LocalStorage from './local_storage';
import ScoreService from './score';
const common = angular.module('app.common', [
  Navbar,
  Footer,
  LocalStorage,
  ScoreService
])
.name;

export default common;
