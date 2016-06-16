import angular from 'angular';
import Login from './login';



const components = angular.module('app.components', [
	Login
])
.name;

export default components;
