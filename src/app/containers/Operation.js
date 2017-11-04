import '../styles/operation.scss';

class OperationController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.init();
  }

  init() {
    this.log.log('Operation initialized');
  }
}

export const OperationContainer = {
  template: require('./Operation.html'),
  controller: OperationController
};
