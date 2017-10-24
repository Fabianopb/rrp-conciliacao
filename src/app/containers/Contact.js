import '../styles/contact.scss';

class ContactController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.init();
  }

  init() {
    this.log.log('Contact initialized');
  }
}

export const ContactContainer = {
  template: require('./Contact.html'),
  controller: ContactController
};
