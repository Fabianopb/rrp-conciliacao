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
      const requestBody = {
        fromEmail: this.contactFormData.email,
        toEmail: sharedStrings.contactEmail,
        subject: 'RRP: Contato pelo formulário',
        content: `
          Nome: ${this.contactFormData.name}
          Telefone: ${this.contactFormData.phone}
          e-mail: ${this.contactFormData.email}
          --------------------------------------
          ${this.contactFormData.message}
        `
      };
      axios.post('/mail/send', requestBody)
        .then(() => {
          this.contactFormData = this.getClearFormData();
          this.formMessage = 'Mensagem enviada com sucesso!';
          this.formError = null;
        })
        .catch(() => {
          this.contactFormData = this.getClearFormData();
          this.formMessage = null;
          this.formError = 'Houve um erro ao enviar sua mensagem, favor entrar em contato por telefone.';
        });
    }
  }

  getClearFormData() {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  init() {
    this.contactFormData = this.getClearFormData();
  }
}

export const ContactContainer = {
  template: require('./Contact.html'),
  controller: ContactController
};
