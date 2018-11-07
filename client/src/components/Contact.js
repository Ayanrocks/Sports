import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      query: "",
      message: "",
      error: false,
      errorMessage: "",
      errorColor: "yellow",
      attempt: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.formValidate = this.formValidate.bind(this);
    this.attemptReset = this.attemptReset.bind(this);
    this.formSent = this.formSent.bind(this);
  }
  formValidate(e) {
    e.preventDefault();
    this.setState({
      error: true,
      errorMessage: "Validating",
      errorColor: "yellow"
    });

    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.query !== "" &&
      this.state.message !== ""
    ) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validEmail = re.test(String(this.state.email).toLowerCase());
      if (validEmail) {
        this.formSent();
      } else {
        setTimeout(() => {
          this.setState({
            error: true,
            errorMessage: "Validation Unsuccessful. Please use an actual Email",
            errorColor: "red"
          });
        }, 1000);
      }
    } else {
      this.setState({
        error: true,
        errorMessage: "Please Fill up all the Fields",
        errorColor: "red"
      });
    }
  }

  formSent() {
    if (this.state.attempt >= 3) {
      this.setState({
        error: true,
        errorMessage: "Too Many Attempts to Send Form. please Wait 30 mins",
        errorColor: "red"
      });
      this.attemptReset();
    } else {
      this.setState({
        error: true,
        errorMessage: "Sending Form Please Wait",
        errorColor: "yellow",
        attempt: this.state.attempt + 1
      });
      axios
        .post("/contact/data", {
          name: this.state.name,
          email: this.state.email,
          query: this.state.query,
          message: this.state.message
        })
        .then(res => {
          console.log(res);
          this.setState({
            error: true,
            errorMessage: "Form Sent Successfully",
            errorColor: "green"
          });
        })
        .catch(error => {
          this.setState({
            error: true,
            errorMessage:
              "Unable to Send Form. Please check your Internet. If the issue persists, try again later",
            errorColor: "red"
          });
        });
    }
  }
  handleChange(e) {
    const attr = e.target.name;
    switch (attr) {
      case "name":
        this.setState({
          name: e.target.value
        });
        break;
      case "email":
        this.setState({
          email: e.target.value
        });
        break;
      case "query":
        this.setState({
          query: e.target.value
        });
        break;
      case "message":
        this.setState({
          message: e.target.value
        });
        break;
    }
  }

  attemptReset() {
    setTimeout(() => {
      this.setState({
        attempt: 0
      });
    }, 180000);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="back__arrow">
            <Link to="/">
              <i className="fa fa-arrow-left" />
            </Link>{" "}
          </div>{" "}
          <h1 className="contact__heading">
            Hey! We are glad you decided to Contact Us{" "}
          </h1>{" "}
          <p className="contact__content">
            If you have any Query, Don 't Hesitate to write to us <br />
            Just fill out the form Below and someone from our team will surely
            contact you.{" "}
          </p>{" "}
          {this.state.error && (
            <div className={"contact__error " + this.state.errorColor}>
              <h4> {this.state.errorMessage} </h4>{" "}
            </div>
          )}{" "}
          <div className="contact__box">
            <form className="contact__form">
              <div className="contact__form__element">
                <label htmlFor="name"> Name </label>{" "}
                <input
                  placeholder="Enter your Full Name"
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="contact__form__element">
                <label htmlFor="email"> Email </label>{" "}
                <input
                  placeholder="Enter a valid Email"
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="contact__form__element">
                <label htmlFor="query"> Query </label>{" "}
                <input
                  placeholder="Enter your Query"
                  type="text"
                  id="query"
                  name="query"
                  value={this.state.query}
                  onChange={this.handleChange}
                  required
                />
              </div>{" "}
              <div className="contact__form__element">
                <label htmlFor="message"> Message </label>{" "}
                <textarea
                  placeholder="Explain Query in Full Detail"
                  className="textarea"
                  id="message"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                />
              </div>{" "}
              <button className="contact__submit" onClick={this.formValidate}>
                Send{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Contact;
