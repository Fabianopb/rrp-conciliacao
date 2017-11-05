import '../styles/about.scss';
import strings from '../../assets/strings/about.json';

class AboutController {
  /** @ngInject */
  constructor() {
    this.about = strings.about;
    this.strategy = strings.strategy;
    this.areas = strings.areas;
    this.terms = strings.terms;
    this.legislation = strings.legislation;
  }

}

export const AboutContainer = {
  template: require('./About.html'),
  controller: AboutController
};
