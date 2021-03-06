import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component';

const login = angular.module('login', [
	uiRouter
	])
.config(config)
.component('login', loginComponent).name;

export default login;

function config($stateProvider){
	"ngInject";

	$stateProvider
	.state('login', {
		url: '/login',
		component: 'login',
		onEnter: function($state, LocalStorage){
			if(LocalStorage.getData("user") !== null){
				$state.go("game");
			}
		}
	});
}