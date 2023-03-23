import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {uid} from 'uid'
import './gif-form.css'

const GifForm = ({ setGifPosts, gifPosts, getEmail }) => {
  const nav = useNavigate()
  const urlInput = React.useRef()
  const userHasSecret = localStorage.getItem('userSecret')

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (userHasSecret) {
      const gifPost = {
      id: uid(),
      url: await urlInput.current.value,
      userSecret: userHasSecret,
      email: getEmail
    }
    console.log(gifPost)

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
    userHasSecret && (
      <form className="gif-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Gif url" className="gif-input" ref={urlInput} />
      <button type="submit">Add Gif</button>
      </form>
      )

  )
}

export default GifForm
