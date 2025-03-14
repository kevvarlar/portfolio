import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const name = formdata.get('name');
    const email = formdata.get('email');
    const message = formdata.get('message');
    document.getElementById('emailSubmit').classList.add('btn-disabled');
    document.getElementById('emailSubmit').disabled = true;
    document.getElementById('emailSubmit').innerText = 'Sending...';
    axios.post('/api/email', { name, email, message })
      .then(() => {
        Swal.fire({
          title: 'Success!',
          buttonsStyling: 'false',
          text: 'Your message has been sent.',
          icon: 'success',
          confirmButtonText: 'OK',
          background: '#001c23',
          customClass: {
            popup: 'bg-base-200 text-base-content rounded-lg shadow-xl',
            title: 'text-base text-lg font-bold text-center mt-3',
            confirmButton: 'btn btn-accent',
          },
        });
        document.getElementById('emailSubmit').innerText = 'Email Sent';
        document.getElementById('email-form').reset();
      })
      .catch((err) => {
        Swal.fire({
          title: 'Sorry!',
          buttonsStyling: 'false',
          text: 'Your message was not able to be sent.',
          icon: 'error',
          confirmButtonText: 'OK',
          background: '#001c23',
          customClass: {
            popup: 'bg-base-200 text-base-content rounded-lg shadow-xl',
            title: 'text-base text-lg font-bold text-center mt-3',
            confirmButton: 'btn btn-accent',
          },
        });
        document.getElementById('emailSubmit').classList.remove('btn-disabled');
        document.getElementById('emailSubmit').disabled = false;
        document.getElementById('emailSubmit').innerText = 'Send Email';
      });
  };

  return (
    <section className="justify-center items-center flex flex-col p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form id="email-form" onSubmit={handleSubmit} className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <label className="fieldset-label">Name</label>
        <input name="name" type="text" className="input" placeholder="John Doe" />
        <label className="fieldset-label">Your Email</label>
        <input name="email" type="email" className="input" placeholder="email@example.com" />
        <label className="fieldset-label">Message</label>
        <textarea name="message" minLength="50" type="text" className="textarea min-h-36" placeholder="Hello I am John Doe, I was hoping we could connect and talk about projects we could work on together or about how your job search has been going" />
        <button id="emailSubmit" type="submit" className="btn btn-neutral mt-4">Send Email</button>
      </form>
    </section>
  );
};

export default ContactMe;
