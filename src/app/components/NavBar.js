import '../styles/nav-bar.scss';
import routesStrings from '../../assets/strings/routes.json';
import sharedStrings from '../../assets/strings/shared.json';

class NavBarController {
  /** @ngInject */
  constructor($log, $state, $mdSidenav) {
    this.log = $log;
    this.state = $state;
    this.mdSidenav = $mdSidenav;
    this.routes = routesStrings.routes;
    this.contactPhone = sharedStrings.contactPhone;
    this.contactEmail = sharedStrings.contactEmail;
  }

  goto(path) {
    if (this.state.current.name !== path) {
      if (this.mdSidenav('left').isOpen()) {
        this.toggleSideNav();
      }
      this.state.go(path);
    }
  }

  toggleSideNav() {
    this.mdSidenav('left').toggle();
  }
}

export const NavBarComponent = {
  template: require('./NavBar.html'),
  controller: NavBarController
};
