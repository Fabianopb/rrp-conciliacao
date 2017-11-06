import '../styles/nav-bar.scss';
import routesStrings from '../../assets/strings/routes.json';
import sharedStrings from '../../assets/strings/shared.json';

class NavBarController {
  /** @ngInject */
  constructor($log, $state) {
    this.log = $log;
    this.state = $state;
    this.routes = routesStrings.routes;
    this.contactPhone = sharedStrings.contactPhone;
    this.contactEmail = sharedStrings.contactEmail;
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
