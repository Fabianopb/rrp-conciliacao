import '../styles/nav-bar.scss';
import _ from 'lodash';
import routesStrings from '../../assets/strings/routes.json';
import sharedStrings from '../../assets/strings/shared.json';

class NavBarController {
  /** @ngInject */
  constructor($log, $state, $window, $mdSidenav) {
    this.log = $log;
    this.state = $state;
    this.window = $window;
    this.mdSidenav = $mdSidenav;
    this.routes = routesStrings.routes;
    this.contactPhone = sharedStrings.contactPhone;
    this.contactEmail = sharedStrings.contactEmail;
    this.systemLinks = sharedStrings.systemLinks;
  }

  goto(path) {
    if (this.state.current.name !== path) {
      if (this.mdSidenav('left').isOpen()) {
        this.toggleSideNav();
      }
      this.state.go(path);
    }
  }

  goToSystem(linkId) {
    const url = _.find(this.systemLinks, {id: linkId}).link;
    this.window.open(url, '_blank');
  }

  toggleSideNav() {
    this.mdSidenav('left').toggle();
  }
}

export const NavBarComponent = {
  template: require('./NavBar.html'),
  controller: NavBarController
};
