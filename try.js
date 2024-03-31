const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: '195768e0d33e17cdd1ec59780ed6f2ad-f68a26c9-99faa832',
});

mg.messages
  .create('sandboxa498b70a9c454e43822a24ed8bda2cf3.mailgun.org', {
    from: 'Excited User <mailgun@sandboxa498b70a9c454e43822a24ed8bda2cf3.mailgun.org>',
    to: ['ribhusaha2003@gmail.com'],
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!',
    html: '<h1>Testing some Mailgun awesomeness!</h1>',
  })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.log(err)); // logs any error

// https://app.mailgun.com/app/sending/domains/sandboxa498b70a9c454e43822a24ed8bda2cf3.mailgun.org
