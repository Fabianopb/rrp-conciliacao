import '../styles/rrp-footer.scss';

class RrpFooterController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.init();
  }

  init() {
    this.log.log('RrpFooter initialized');
  }
}

export const RrpFooterComponent = {
  template: require('./RrpFooter.html'),
  controller: RrpFooterController
};
