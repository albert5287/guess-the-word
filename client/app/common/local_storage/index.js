import angular from 'angular';
import LocalStorage from './localStorage.service';

const localStorage = angular
.module('LocalStorage', [])
.service('LocalStorage', LocalStorage)
.name;

export default localStorage;