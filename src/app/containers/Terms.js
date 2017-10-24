import '../styles/terms.scss';

class TermsController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.init();
  }

  init() {
    this.log.log('Terms initialized');
  }
}

export const TermsContainer = {
  template: require('./Terms.html'),
  controller: TermsController
};
