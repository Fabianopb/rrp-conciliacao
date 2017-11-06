import '../styles/home.scss';
import homeStrings from '../../assets/strings/home.json';

class HomeController {
  /** @ngInject */
  constructor() {
    this.heroSection = homeStrings.heroSection;
    this.values = homeStrings.values;
  }

}

export const HomeContainer = {
  template: require('./Home.html'),
  controller: HomeController
};
