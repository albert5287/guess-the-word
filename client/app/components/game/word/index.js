import angular from 'angular';
import WordService from './word.service';

const wordService = angular
.module('WordService', [])
.service('WordService', WordService)
.name;

export default wordService;