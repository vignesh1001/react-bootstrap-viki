import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import { Table } from "react-bootstrap";
import AlertDismissable from "./AlertDismissable";

function Login() {
  const [state, setState] = React.useState({
    userName: "",
    password: "",
    isStaySigned: false,
    errorMap: {
      userName: false,
      password: false
    }
  });
  const handleChange = e => {
    const { target } = e;
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };
  const onBlur = e => {
    const { target } = e;
    const { name, value } = target;
    state.errorMap[name] = !value;
    setState({ ...state });
  };
  const doLogin = () => {
    fetch("https://admin.ee.ge/api-0408/login", {
      method: "POST",
      body: JSON.stringify()
    });
  };
  return (
    <div class="login">
      <div class="wrapper" id="copyHtml1">
        <div class="container mt-5">
          <div class="row mt-4">
            <div class="col-lg-6 offset-lg-3 col-md-6 offset-md-3">
              <div class="section-one">
                <h4 class="registration-titles">Sign In</h4>
                <p>
                  Sign in using the email and password created when you signed
                  up
                </p>
                <form
                  autocomplete="off"
                  class="col-lg-8 col-md-8 col-sm-8 col-xs-12 ng-pristine ng-invalid ng-touched"
                  name="Login"
                  novalidate=""
                >
                  <div class="row">
                    <div class="form-group col-12 p-0">
                      <input
                        className={"form-control ".concat(
                          state.errorMap.userName ? "is-invalid" : ""
                        )}
                        name="userName"
                        required=""
                        type="text"
                        placeholder="Email Address"
                        value={state.userName}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      {state.errorMap.userName && (
                        <div class="text-danger">
                          Email address is required.
                        </div>
                      )}
                    </div>
                    <div class="form-group col-12 p-0">
                      <input
                        className={"form-control ".concat(
                          state.errorMap.password ? "is-invalid" : ""
                        )}
                        name="password"
                        required=""
                        type="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      {state.errorMap.password && (
                        <div class="text-danger">Password is required.</div>
                      )}
                    </div>
                    <div class="form-row col-12 p-0">
                      <div class="form-group col-6">
                        <div class="custom-control custom-checkbox">
                          <input
                            class="custom-control-input"
                            id="isStaySigned"
                            type="checkbox"
                            checked={state.isStaySigned}
                            onChange={e =>
                              handleChange({
                                target: {
                                  value: !state.isStaySigned,
                                  name: "isStaySigned"
                                }
                              })
                            }
                          />
                          <label
                            class="custom-control-label"
                            for="isStaySigned"
                          >
                            Stay signed in
                          </label>
                        </div>
                      </div>
                      <div class="form-group col-6 text-right">
                        <a id="btn-forgot" href="/forgotpassword">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <button class="btn btn-darkred"> Sign In </button>
                  </div>
                </form>
                <div class="dont-have-account col-xs-12">
                  <span class="txt-grey">Don't have an account? </span>
                  <a class="btn btn-link txt-red" href="/registration">
                    Create an account now.{" "}
                  </a>
                </div>
                <div class="social-login col-xs-12">
                  <button class="facebook btn">
                    <i class="fa fa-facebook" /> Facebook{" "}
                  </button>
                  <button class="google btn">
                    <i class="fa fa-google-plus" /> Google{" "}
                  </button>
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
