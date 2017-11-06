import '../styles/operation.scss';
import operationStrings from '../../assets/strings/operation.json';

class OperationController {
  /** @ngInject */
  constructor() {
    this.fourSteps = operationStrings.fourSteps;
    this.validity = operationStrings.validity;
    this.faq = operationStrings.faq;
  }

}

export const OperationContainer = {
  template: require('./Operation.html'),
  controller: OperationController
};
