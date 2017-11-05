import '../styles/operation.scss';
import strings from '../../assets/strings/operation.json';

class OperationController {
  /** @ngInject */
  constructor() {
    this.fourSteps = strings.fourSteps;
    this.faq = strings.faq;
  }

}

export const OperationContainer = {
  template: require('./Operation.html'),
  controller: OperationController
};
