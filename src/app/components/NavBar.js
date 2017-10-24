import '../styles/nav-bar.scss';

class NavBarController {
  /** @ngInject */
  constructor($log, $state) {
    this.log = $log;
    this.state = $state;
    this.init();
  }

  goto(path) {
    this.state.go(path);
  }

  init() {
    this.log.log('NavBar initialized');
  }
}

export const NavBarComponent = {
  template: require('./NavBar.html'),
  controller: NavBarController
};
