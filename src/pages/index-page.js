import React from 'react'
import { useNavigate } from 'react-router-dom'
import GifForm from '../components/gif-form'
import Gifs from '../components/gifs'
import './index-page.css'

const IndexPage = ({userHasSecret, setEmail, getEmail}) => {
  const [gifPosts, setGifPosts] = React.useState([]);
  const nav = useNavigate()


  const handleLogout = () => {
    localStorage.clear()
    setEmail('')
    nav('/login')
  }

  const handleLogin = () => {
    nav('/login')
  }

  return (
    <div className='container'>
      {userHasSecret 
      ? <button type='submit' className='btn-logout' onClick={handleLogout}>
        Logout
        </button> 
      : <button type='submit' className='btn-logout' onClick={handleLogin}>
        Login
        </button>}
         
      <GifForm setGifPosts={setGifPosts} gifPosts={gifPosts} getEmail={getEmail} />
      <Gifs setGifPosts={setGifPosts} gifPosts={gifPosts} />
    </div>
  )
}

export default IndexPage