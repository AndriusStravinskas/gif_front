import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import RegisterValidationSchema from '../validate-schema/register-validate-Schema';

const RegisterPage = () => {
  const [error, setError] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target)

    const email = data.get('register-email')
    const password = data.get('register-password')
    const confirmPassword = data.get('confirm-password')

    const userData = {email, password, confirmPassword}
    
    try {
      const validateUser = RegisterValidationSchema.validateSync(userData)
      const {email, password} = validateUser
      const res = await axios.post('http://localhost:3800/register', {email, password})
      
      if (res.data.message) {
        setError(res.data.message)
      } else {
        console.log('Registration successfully');
        setError('')
      }
      
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form className='d-flex f-column g-3 center' onSubmit={handleSubmit}>
      {error !== '' && <p style={{ color: 'red'}}>{error}</p>}
      <input 
      type="text" 
      placeholder='Email' 
      className='w-300' 
      id="register-email"
      name="register-email"
       />
      <input 
      type="text" 
      placeholder='Password' 
      className='w-300' 
      id="register-password"
      name="register-password"
      />
      <input 
      type="text" 
      placeholder='Confirm password' 
      className='w-300' 
      id="confirm-password"
      name="confirm-password"
      />
      <button type='submit'>Register</button>
      <Link to="/" variant="body2">Already have an account? Sign in</Link>
    </form>
  )
}

export default RegisterPage