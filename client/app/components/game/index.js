import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameComponent from './game.component';
import Timer from './timer';

const game = angular.module('game', [
	uiRouter,
	Timer
	])
.config(config)
.component('game', gameComponent).name;

export default game;

function config($stateProvider){
	"ngInject";
	$stateProvider
	.state("game", {
		url: "/game",
		component: 'game',
		resolve: {
          /*currentUser($q, LocalStorage){
            if(LocalStorage.getData("user") === null){
              return $q.reject("AUTH_REQUIRED"); //DON'T WORK USING UI-ROUTER ALPHA
            }
            else{
              return $q.resolve();
            }
          }*/
        },
        onEnter: function($state, LocalStorage){
			if(LocalStorage.getData("user") === null){
				$state.go("login");
			}
		}
	});
}