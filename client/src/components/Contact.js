import React from "react";

const Contact = () => (
  <div className="container">
    <div className="row">
      <div className="contact">
        <h2 className="contact__heading">Contact US</h2>
        <div className="contact__form">
          <form action="/contact" method="post">
            <div className="contact__form--item">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="contact__form--item">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="contact__form--item">
              <label htmlFor="query">Query</label>
              <input type="text" id="query" name="query" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
