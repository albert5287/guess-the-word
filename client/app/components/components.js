import angular from 'angular';
import Login from './login';
import Game from './game';
import HighscoreList from './highscoreList';



const components = angular.module('app.components', [
	Login,
	Game,
	HighscoreList
	])
.name;

export default components;
