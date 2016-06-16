import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameComponent from './game.component';

const game = angular.module('game', [
  uiRouter
])
.config(config)
.component('game', gameComponent).name;

export default game;

function config($stateProvider){
  "ngInject";
  $stateProvider
      .state("game", {
        url: "/game",
        component: 'game'
      });
}