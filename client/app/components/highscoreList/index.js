import angular from 'angular';
import uiRouter from 'angular-ui-router';
import highscoreListComponent from './highscoreList.component';

const highscoreList = angular.module('highscoreList', [
  uiRouter
])
.config(config)
.component('highscoreList', highscoreListComponent).name;

export default highscoreList;

function config($stateProvider){
  "ngInject";
  $stateProvider
      .state("highscores", {
        url: "/highscores",
        component: 'highscoreList',
        resolve: {
          scores: ScoreService => ScoreService.getScores()
        }
      });
}