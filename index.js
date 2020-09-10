import React, { Component } from "react";
import { render } from "react-dom";
import "./compare.css";
import { Table } from "react-bootstrap";
import AlertDismissable from "./AlertDismissable";

function Login() {
  const [state, setState] = React.useState({
    isCompateExpand: true
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
    <div className="compare-side no-print d-xs-none">
      <div className="compare-button display-mob">
        <span
          className="rotated"
          style={{ textAlign: "center", width: "100%" }}
        >
          <i aria-hidden="true" className="fa fa-compress mr-1" /> Compare{" "}
        </span>
      </div>
      <div className="compare-side-blur blur" />
      <div
        className={"compare-content-b compare_not_responsive ".concat(
          !state.isCompateExpand ? "d-none" : ""
        )}
      >
        <div className="product-group">
          <div className="comp-product">
            <div className="comp-product-remove" />
            <div
              className="comp-product-img"
              style={{
                backgroundImage:
                  'url("https://d278b6t7sxzrhn.cloudfront.net/rn4ZoFAGFd.jpg-1.jpg")'
              }}
            />
            <div className="comp-product-inf">
              <span className="cursor_pointer" tabindex="0">
                {" "}
                A11 Black SM-A115FZKNCAU{" "}
              </span>
              <span>499.99 ₾</span>
            </div>
          </div>
          <div className="comp-product">
            <div className="comp-product-remove" />
            <div
              className="comp-product-img"
              style={{
                backgroundImage:
                  'url("https://d278b6t7sxzrhn.cloudfront.net/images/IMG-000005944-1.jpg")'
              }}
            />
            <div className="comp-product-inf">
              <span className="cursor_pointer" tabindex="0">
                {" "}
                A10 Black SM-A105FZKGCAU{" "}
              </span>
              <span>419.99 ₾</span>
            </div>
          </div>
          <div className="comp-product">
            <div className="comp-product-remove" />
            <div
              className="comp-product-img"
              style={{
                backgroundImage:
                  'url("https://d278b6t7sxzrhn.cloudfront.net/ld1Pp16TsP.jpg-1.jpg")'
              }}
            />
            <div className="comp-product-inf">
              <span className="cursor_pointer" tabindex="0">
                {" "}
                Redmi Note 8 4GB/128GB Blue/EL{" "}
              </span>
              <span>579.99 ₾</span>
            </div>
          </div>
        </div>
        <div className="comp-product-start"> Start Compare </div>
        <div className="comp-product-clear-btn"> Clear all </div>
      </div>
    </div>
  );
}

render(<Login />, document.getElementById("root"));
