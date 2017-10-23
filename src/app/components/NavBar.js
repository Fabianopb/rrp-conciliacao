import '../styles/nav-bar.scss';

class NavBarController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.init();
  }

  init() {
    this.log.log('NavBar initialized');
  }
}

export const NavBarComponent = {
  template: require('./NavBar.html'),
  controller: NavBarController
};
