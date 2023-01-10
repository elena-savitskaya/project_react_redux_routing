import React from "react";
import './_loginForm.scss';
import { Button } from "../button/Button";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../../hook/useAuth";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const toPage = location.state?.from?.pathname || '/project_react_redux_routing/AppsPage';

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    setPasswordError('');
    setPassword(e.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const user = form.email.value;

    if (password !== '') {
      signin(user, () => navigate(toPage, { replace: true }))
    } else {
      setPasswordError('The form is not filled in');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label className="subtitle">
          Email
          <input type='email' name="email" />
        </label>
        <label className="subtitle">
          Password
          <input type='password' name="password" onChange={handlePasswordChange} />
        </label>
        {passwordError && <div className="error-msg">{passwordError}</div>}
        <Button type="submit" />
      </form>
    </div>
  )
}

export { LoginForm };

