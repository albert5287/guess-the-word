import angular from 'angular';
import Navbar from './navbar';
import Footer from './footer';
import LocalStorage from './local_storage';
import ScoreService from './score';

const common = angular.module('app.common', [
  Navbar,
  Footer,
  LocalStorage,
  ScoreService
])
.filter('orderObjectBy', orderObjectBy)
.name;

export default common;

function orderObjectBy(){
    return function (items, field, reverse) {

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        var filtered = [];

        angular.forEach(items, function(item, key) {
            item.key = key;
            filtered.push(item);
        });

        function index(obj, i) {
            return obj[i];
        }

        filtered.sort(function (a, b) {
            var comparator;
            var reducedA = field.split('.').reduce(index, a);
            var reducedB = field.split('.').reduce(index, b);

            if (isNumeric(reducedA) && isNumeric(reducedB)) {
                reducedA = Number(reducedA);
                reducedB = Number(reducedB);
            }

            if (reducedA === reducedB) {
                comparator = 0;
            } else {
                comparator = reducedA > reducedB ? 1 : -1;
            }

            return comparator;
        });

        if (reverse) {
            filtered.reverse();
        }

        return filtered;
    };
}
