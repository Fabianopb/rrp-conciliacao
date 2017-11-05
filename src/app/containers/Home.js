import '../styles/home.scss';
import strings from '../../assets/strings/home.json';

class HomeController {
  /** @ngInject */
  constructor() {
    this.heroSection = strings.heroSection;
    this.fourSteps = strings.fourSteps;
    this.information = strings.information;
  }

}

export const HomeContainer = {
  template: require('./Home.html'),
  controller: HomeController
};
