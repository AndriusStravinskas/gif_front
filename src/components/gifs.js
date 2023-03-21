import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './gifs.css'

const Gifs = ({ setGifPosts, gifPosts }) => {
  const nav = useNavigate();

  React.useEffect(() => {

    const fetchPost = async () => {
      const res = await axios.get('http://localhost:3800/getAll')

      setGifPosts(res.data.getAll)
    }
    fetchPost()
  }, [])

  const handleClick = async (id) => {
    nav(`/gif/${id}`)
  }

  return (
    <div className='gif-container'>

      {gifPosts.map((gif) => (
      <div className='gif-card' onClick={() => handleClick(gif.id)} key={gif.id}>
        <img src={gif.url} alt="Gif" />
      </div>
      ))}
    </div>

  )
}

export default Gifs
