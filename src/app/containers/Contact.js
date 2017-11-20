import '../styles/contact.scss';
import sharedStrings from '../../assets/strings/shared.json';
import axios from 'axios';

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
      const requestBody = {
        fromEmail: this.contactFormData.email,
        toEmail: 'fabianopbrito@gmail.com',
        subject: 'RRP: Contato pelo formulário',
        content: `
          Nome: ${this.contactFormData.name}
          Telefone: ${this.contactFormData.phone}
          e-mail: ${this.contactFormData.email}
          --------------------------------------
          ${this.contactFormData.message}
        `
      };
      axios.post('/mail/send', requestBody).then(response => {
        this.log.log(response);
      });
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
