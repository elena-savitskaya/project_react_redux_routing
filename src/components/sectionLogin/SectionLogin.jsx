import React from "react";
import { LoginForm } from "../loginForm/LoginForm";
import './_sectionLogin.scss';

class SectionLogin extends React.Component {
  render() {
      return  (
        <section className="section-login">
        <div className="container">
          <div className="section-login__image">
            <svg width="122" height="105" viewBox="0 0 122 105" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M61 0L121.622 105H0.378223L61 0Z"/>
            </svg>
          </div>
          <LoginForm />
        </div>
      </section>
      );
  }
}

export { SectionLogin };



