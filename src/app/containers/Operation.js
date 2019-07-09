import '../styles/operation.scss';
import operationStrings from '../../assets/strings/operation.json';

class OperationController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.fourSteps = operationStrings.fourSteps;
    this.validity = operationStrings.validity;
    this.faq = operationStrings.faq;
    this.init();
  }

  toggle(index) {
    this.faqItemVisibility[index] = !this.faqItemVisibility[index];
  }

  shouldRender(index) {
    return this.faqItemVisibility[index];
  }

  init() {
    this.faqItemVisibility = this.faq.content.map(() => false);
  }
}

export const OperationContainer = {
  template: require('./Operation.html'),
  controller: OperationController
};
