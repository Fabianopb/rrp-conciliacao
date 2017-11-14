import '../styles/home.scss';
import homeStrings from '../../assets/strings/home.json';

class HomeController {
  /** @ngInject */
  constructor($state) {
    this.state = $state;
    this.heroSection = homeStrings.heroSection;
    this.values = homeStrings.values;
    this.areas = homeStrings.areas;
  }

}

export const HomeContainer = {
  template: require('./Home.html'),
  controller: HomeController
};
