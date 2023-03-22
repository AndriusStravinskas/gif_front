import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist';
import loginValidationSchema from '../validate-schema/login-validate-Schema';

const LoginForm = () => {
  const [error, setError] = React.useState('')
  const nav = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target)

    const email = data.get('login-email')
    const password = data.get('login-password')
    const userLoginData = { email, password}
    try {
      const validateLoginData = loginValidationSchema.validateSync(userLoginData)
      const res = await axios.post('http://localhost:3800/login', validateLoginData)
      
      if (res.data.error) {
        setError(res.data.message)
      } else {
        localStorage.setItem('userSecret', res.data.secret)
        setError('')
        nav('/gif')
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <form className='d-flex f-column g-3 center' onSubmit={handleLogin}>
            {error !== '' && <p style={{ color: 'red'}}>{error}</p>}
            <input 
            type="text" 
            placeholder='Email' 
            className='w-300' 
            id="login-email"
            name="login-email"
            />
            <input 
            type="text" 
            placeholder='Password' 
            className='w-300' 
            id="login-password"
            name="login-password"
            />
            <button type='submit'>Login</button>
            <Link to='/register' variant="body2">Don't have an account? Sign Up</Link>
          </form>
  )
}

export default LoginForm
