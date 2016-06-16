import template from './game.html';
import controller from './game.controller';
import './game.scss';

const gameComponent = {
  bindings: {
  	words: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default gameComponent;
