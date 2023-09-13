import React from 'react';
import icon from '../assets/images/icon-success.svg'

const Success = () => {
  return (
    <div className="success">
      <img src={icon} alt="submitted"/>
      <h1>Thanks for subscribing!</h1>

      <p>A confirmation email has been sent to <b>ash@loremcompany.com</b>.
        Please open it and click the button inside to confirm your subscription.</p>

      <button>Dismiss message</button>
    </div>
  );
};

export default Success;