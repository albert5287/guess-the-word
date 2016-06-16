import angular from 'angular';
import Login from './login';
import Game from './game';



const components = angular.module('app.components', [
	Login,
	Game
	])
.name;

export default components;
