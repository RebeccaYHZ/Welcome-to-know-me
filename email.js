import emailjs from 'emailjs-com';

emailjs.init('AYj7b-ap5HyXjHaGL');

function sendEmail(event) {
    event.preventDefault();
  
    const recipient = document.querySelector('#recipient').value;
    const subject = document.querySelector('#subject').value;
    const name = document.querySelector('#name').value;
    const telephone = document.querySelector('#telephone').value;
    const message = document.querySelector('#message').value;
  
    const emailData = {
        to_name: recipient,
        subject: subject,
        name: name,
        message: message,
        telephone: telephone,
    };
  
    emailjs.send('service_gzfhsfc', 'template_7pflnhn', emailData)
      .then(function (response) {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully');
        
        document.querySelector('#recipient').value = '';
        document.querySelector('#subject').value = '';
        document.querySelector('#name').value = '';
        document.querySelector('#telephone').value = '';
        document.querySelector('#message').value = '';
      })
      .catch(function (error) {
        console.error('Error sending email:', error);
        alert('Error sending email');
      });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#email-form');
  
    form.addEventListener('submit', sendEmail);
  });