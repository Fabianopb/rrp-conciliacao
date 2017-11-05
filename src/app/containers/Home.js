import '../styles/home.scss';
import strings from '../../assets/strings/home.json';

class HomeController {
  /** @ngInject */
  constructor() {
    this.heroSection = strings.heroSection;
    this.values = strings.values;
  }

}

export const HomeContainer = {
  template: require('./Home.html'),
  controller: HomeController
};
