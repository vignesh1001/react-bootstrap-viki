import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { Table } from "react-bootstrap";
import AlertDismissable from "./AlertDismissable";

function Login() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    errorMap: {
      firstName: false,
      lastName: false,
      password: false,
      repeatPwdError: "",
      confirmPassword: false,
      email: false
    }
  });
  const checkRepeatPassword = name => {
    if (name === "confirmPassword") {
      state.repeatPwdError = "";
      if (state.confirmPassword === "") {
        state.repeatPwdError = "Repeat password is required.";
      }
      if (state.password !== state.confirmPassword) {
        state.repeatPwdError = "Repeat password does not match";
      }
    }
  };
  const handleChange = e => {
    const { target } = e;
    const { name, value } = target;
    checkRepeatPassword(name);
    setState({ ...state, [name]: value });
  };
  const onBlur = e => {
    const { target } = e;
    const { name, value } = target;
    state.errorMap[name] = !value;
    checkRepeatPassword(name);
    setState({ ...state });
  };
  const doLogin = () => {
    fetch("https://admin.ee.ge/api-0408/login", {
      method: "POST",
      body: JSON.stringify()
    });
  };
  return (
    <div className="login">
      <div className="wrapper" id="copyHtml1">
        <div className="container mt-5">
          <div className="wrapper" id="copyHtml">
            <div className="container mt-5">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 offset-xl-2 offset-lg-2 offset-md-2 mr-auto">
                  <div className="section-two">
                    <p>
                      You have to be signed in to buy products and see
                      discounted prices. Sign up now. It's free and takes less
                      than a minute.
                    </p>
                    <h4 className="registration-titles mt-5">QUICK SIGN UP</h4>
                    <p>Signing up is easy, quick and free.</p>
                    <form
                      autocomplete="off"
                      novalidate=""
                      className="ng-untouched ng-pristine ng-invalid"
                    >
                      <div className="form-row">
                        <div className="form-group col-lg-6 col-md-6 col-xs-12">
                          <input
                            className={"form-control blinker ".concat(
                              state.errorMap.firstName ? "is-invalid" : ""
                            )}
                            name="firstName"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            value={state.firstName}
                            onChange={handleChange}
                            onBlur={onBlur}
                          />
                          {state.errorMap.firstName && (
                            <div>
                              <small className="text-danger">
                                {" "}
                                First name is required
                              </small>
                            </div>
                          )}
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-xs-12">
                          <input
                            className={"form-control blinker ".concat(
                              state.errorMap.lastName ? "is-invalid" : ""
                            )}
                            name="lastName"
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={state.lastName}
                            onChange={handleChange}
                            onBlur={onBlur}
                          />
                          {state.errorMap.lastName && (
                            <div>
                              <small className="text-danger">
                                Last name is required
                              </small>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-lg-8 col-md-8 col-xs-12">
                          <input
                            className={"form-control blinker ".concat(
                              state.errorMap.email ? "is-invalid" : ""
                            )}
                            name="email"
                            id="email"
                            type="text"
                            placeholder="Enter your email address"
                            value={state.email}
                            onChange={handleChange}
                            onBlur={onBlur}
                          />
                          {state.errorMap.email && (
                            <div>
                              <small className="text-danger">
                                Email address is required.
                              </small>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-lg-6 col-md-6 col-xs-12">
                          <div className="password1">
                            <input
                              autocomplete="new-password"
                              className={"form-control blinker ".concat(
                                state.errorMap.password ? "is-invalid" : ""
                              )}
                              name="password"
                              id="password"
                              type="password"
                              placeholder="Password"
                              value={state.password}
                              onChange={handleChange}
                              onBlur={onBlur}
                            />
                            {state.errorMap.password && (
                              <div>
                                <small className="text-danger">
                                  Password is required. Password needs to be
                                  minimum 6 characters with a number.
                                </small>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-xs-12">
                          <div className="password1">
                            <input
                              className={"form-control blinker ".concat(
                                state.errorMap.confirmPassword
                                  ? "is-invalid"
                                  : ""
                              )}
                              compare="password"
                              name="confirmPassword"
                              id="confirmPassword"
                              value={state.confirmPassword}
                              onChange={handleChange}
                              type="password"
                              placeholder="Repeat Password"
                              onBlur={onBlur}
                            />
                            {state.errorMap.repeatPwdError && (
                              <div>
                                <small className="text-danger">
                                  {state.repeatPwdError}
                                </small>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="signup-note">
                        <span>
                          {" "}
                          When you click Verify Email we will verify your email
                          by sending you a six-digit confirmation code to your
                          email address. Please enter the code on the next
                          screen.{" "}
                        </span>
                      </div>
                      <button
                        className="btn-darkred btn-disabled"
                        id="singup"
                        disabled="true"
                      >
                        {" "}
                        Verify Email{" "}
                      </button>
                    </form>
                    <div className="dont-have-account col-xs-12">
                      <span className="txt-grey font-weight-bold">
                        Sign Up with{" "}
                      </span>
                    </div>
                    <div className="social-login col-xs-12">
                      <button className="facebook btn">
                        <i className="fa fa-facebook" /> Facebook{" "}
                      </button>
                      <button className="google btn">
                        <i className="fa fa-google-plus" /> Google{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

render(<Login />, document.getElementById("root"));
