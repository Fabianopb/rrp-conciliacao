import '../styles/about.scss';
import aboutStrings from '../../assets/strings/about.json';

class AboutController {
  /** @ngInject */
  constructor() {
    this.about = aboutStrings.about;
    this.strategy = aboutStrings.strategy;
    this.terms = aboutStrings.terms;
    this.legislation = aboutStrings.legislation;
  }

}

export const AboutContainer = {
  template: require('./About.html'),
  controller: AboutController
};
