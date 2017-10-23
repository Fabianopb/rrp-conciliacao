import '../styles/home.scss';

class HomeController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.init();
  }

  init() {
    this.log.log('Home initialized');
  }
}

export const HomeContainer = {
  template: require('./Home.html'),
  controller: HomeController
};
