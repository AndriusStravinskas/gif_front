import React from 'react'
import LoginForm from '../components/login-form';

const LoginPage = ({setEmail}) => {

 
  return (
    <div>
      <LoginForm setEmail={setEmail} />
    </div>
  )
}

export default LoginPage