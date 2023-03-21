import axios from 'axios'
import React from 'react'
import {uid} from 'uid'
import './gif-form.css'

const GifForm = ({ setGifPosts, gifPosts }) => {
  

  const urlInput = React.useRef()
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const gifPost = {
      id: uid(),
      url: await urlInput.current.value,
    }

    await axios.post('http://localhost:3800/create', gifPost)
    .then((res) => {
      console.log(res.data.message);
      setGifPosts([...gifPosts, res.data.createdGif])

    }).catch((err) => {  
        console.log(err.message)
    })

  }

  return (
    <form className='gif-form' onSubmit={handleSubmit}>
      <input type="text" placeholder='Gif url' className='gif-input' ref={urlInput} />
      <button type='submit'>Add Gif</button>
    </form>

  )
}

export default GifForm
