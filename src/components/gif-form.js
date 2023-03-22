import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom/dist'
import {uid} from 'uid'
import './gif-form.css'

const GifForm = ({ setGifPosts, gifPosts }) => {
  const nav = useNavigate()
  const urlInput = React.useRef()
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userHasSecret = localStorage.getItem('userSecret')

    if (userHasSecret) {
      const gifPost = {
      id: uid(),
      url: await urlInput.current.value,
      userSecret: userHasSecret
    }

    await axios.post('http://localhost:3800/create', gifPost)
    .then((res) => {
      console.log(res.data.message);
      setGifPosts([...gifPosts, res.data.createdGif])
      
    }).catch((err) => {  
      console.log(err.message)
    })
  } else {
    nav('/login')
  }

  }

  return (
    <form className='gif-form' onSubmit={handleSubmit}>
      <input type="text" placeholder='Gif url' className='gif-input' ref={urlInput} />
      <button type='submit'>Add Gif</button>
    </form>

  )
}

export default GifForm
