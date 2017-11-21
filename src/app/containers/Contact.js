import '../styles/contact.scss';
import sharedStrings from '../../assets/strings/shared.json';
import axios from 'axios';

class ContactController {
  /** @ngInject */
  constructor($log, $timeout) {
    this.log = $log;
    this.timeout = $timeout;
    this.contactPhone = sharedStrings.contactPhone;
    this.contactEmail = sharedStrings.contactEmail;
    this.init();
  }

  submitContactForm() {
    if (this.contactForm.$valid) {
      const requestBody = {
        fromEmail: this.contactFormData.email,
        toEmail: this.contactEmail.content,
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
        .then(() => this.handleFormSuccess())
        .catch(error => this.handleFormError(error));
    }
  }

  handleFormSuccess() {
    this.timeout(() => {
      this.resetForm();
      this.formMessage = 'Mensagem enviada com sucesso!';
      this.formError = null;
    });
  }

  handleFormError(error) {
    this.timeout(() => {
      this.log.log(error);
      this.formMessage = null;
      this.formError = 'Houve um erro ao enviar sua mensagem, favor entrar em contato por telefone.';
    });
  }

  resetForm() {
    this.contactFormData = {};
    this.contactForm.$setPristine();
    this.contactForm.$setUntouched();
  }

  init() {
    this.formMessage = null;
    this.formError = null;
    this.contactFormData = {};
  }
}

export const ContactContainer = {
  template: require('./Contact.html'),
  controller: ContactController
};
