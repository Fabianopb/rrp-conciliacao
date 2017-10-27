import '../styles/contact.scss';

class ContactController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.init();
  }

  submitContactForm() {
    if (this.contactForm.$valid) {
      this.log.log(this.contactFormData);
      this.log.log('Good! Need to send/submit somewhere...');
    } else {
      this.log.log('The form is invalid!');
    }
  }

  init() {
    this.contactFormData = {
      name: '', email: '', phone: '', message: ''
    };
    this.log.log('Contact initialized');
  }
}

export const ContactContainer = {
  template: require('./Contact.html'),
  controller: ContactController
};
