import '../styles/contact.scss';
import sharedStrings from '../../assets/strings/shared.json';

class ContactController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.contactPhone = sharedStrings.contactPhone;
    this.contactEmail = sharedStrings.contactEmail;
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
    this.contactFormData = {name: '', email: '', phone: '', message: ''};
  }
}

export const ContactContainer = {
  template: require('./Contact.html'),
  controller: ContactController
};
