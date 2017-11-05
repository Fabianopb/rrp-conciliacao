import '../styles/nav-bar.scss';
import strings from '../../assets/strings/routes.json';
import {contactPhone, contactEmail} from '../services/globalConstants';

class NavBarController {
  /** @ngInject */
  constructor($log, $state) {
    this.log = $log;
    this.state = $state;
    this.routes = strings.routes;
    this.contactPhone = contactPhone;
    this.contactEmail = contactEmail;
  }

  goto(path) {
    if (this.state.current.name !== path) {
      this.state.go(path);
    }
  }

}

export const NavBarComponent = {
  template: require('./NavBar.html'),
  controller: NavBarController
};
