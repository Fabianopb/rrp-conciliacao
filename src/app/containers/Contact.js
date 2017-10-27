import '../styles/contact.scss';
import {contactPhone, contactEmail} from '../services/globalConstants';

class ContactController {
  /** @ngInject */
  constructor($log) {
    this.log = $log;
    this.contactPhone = contactPhone;
    this.contactEmail = contactEmail;
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
