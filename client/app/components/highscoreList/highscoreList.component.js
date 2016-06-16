import template from './highscoreList.html';
import controller from './highscoreList.controller';
import './highscoreList.scss';

const highscoreListComponent = {
  bindings: {
  	scores: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default highscoreListComponent;
