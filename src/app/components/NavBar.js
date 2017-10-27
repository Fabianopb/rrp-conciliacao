import '../styles/nav-bar.scss';
import {contactPhone, contactEmail} from '../services/globalConstants';

class NavBarController {
  /** @ngInject */
  constructor($log, $state) {
    this.log = $log;
    this.state = $state;
    this.contactPhone = contactPhone;
    this.contactEmail = contactEmail;
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
