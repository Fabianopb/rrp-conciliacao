import '../styles/home.scss';
import _ from 'lodash';
import homeStrings from '../../assets/strings/home.json';
import sharedStrings from '../../assets/strings/shared.json';

class HomeController {
  /** @ngInject */
  constructor($window) {
    this.window = $window;
    this.heroSection = homeStrings.heroSection;
    this.values = homeStrings.values;
    this.areas = homeStrings.areas;
    this.systemLinks = sharedStrings.systemLinks;
  }

  goToSystem(linkId) {
    const url = _.find(this.systemLinks, {id: linkId}).link;
    this.window.open(url, '_blank');
  }

}

export const HomeContainer = {
  template: require('./Home.html'),
  controller: HomeController
};
