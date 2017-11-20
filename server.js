const express = require('express');
const path = require('path');
const bodyParser = require('body-parser').json();
const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

const app = express();

app.post('/mail/send', bodyParser, (request, response) => {
  const fromEmail = new helper.Email(request.body.fromEmail);
  const toEmail = new helper.Email(request.body.toEmail);
  const subject = request.body.subject;
  const content = new helper.Content('text/plain', request.body.content);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);
  const mailRequest = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });
  sg.API(mailRequest, (error, mailResponse) => { // eslint-disable-line
    if (error) {
      return response.status(400).send(error);
    }
  });
  return response.status(200).json('mail request created');
});

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT || 8080);
console.log('Server launched...');
