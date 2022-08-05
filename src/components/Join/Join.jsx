import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xnine1m', 'template_pr1oifk', form.current, 'k5zdKak_rbXsrQt6R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>ready to</span>
          <span> level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className='stroke-text'> with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action='' className='email-container' onSubmit={sendEmail}>
          <input type="email" name='user-email' placeholder='Enter your Email address' />
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join