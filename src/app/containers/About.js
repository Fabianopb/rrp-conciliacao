import '../styles/about.scss';

class AboutController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.init();
  }

  init() {
    this.log.log('About initialized');
  }
}

export const AboutContainer = {
  template: require('./About.html'),
  controller: AboutController
};
