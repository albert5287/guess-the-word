import template from './timer.html';
import controller from './timer.controller';
import './timer.scss';

const timerComponent = {
  bindings: {
  	onChange: '&',
    timer: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default timerComponent;
