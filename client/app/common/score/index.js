import angular from 'angular';
import ScoreService from './score.service';

const scoreService = angular
.module('ScoreService', [])
.service('ScoreService', ScoreService)
.name;

export default scoreService;