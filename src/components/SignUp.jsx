import React from 'react';
import './SignUp.css'
import UpdateItem from "./UpdateItem";

const SignUp = ({setSuccess}) => {
  return (
    <section className="left-section">
      <div className="details">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="updateList">
          <UpdateItem>Product discovery and building what matters</UpdateItem>
          <UpdateItem>Measuring to ensure updates are a success</UpdateItem>
          <UpdateItem>And much more!</UpdateItem>
        </ul>
      </div>

      <form className="email-div">
        <b>Email address</b>
        <input type="email" placeholder="email@company.com"/>
        <button type="reset" onClick={() => setSuccess(true)}>Subscribe to monthly newsletter</button>
      </form>
    </section>
  );
};

export default SignUp;