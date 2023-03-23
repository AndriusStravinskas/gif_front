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
    const userHasSecret = localStorage.getItem('userSecret');
    if (userHasSecret) {
      const res = await axios.get(`http://localhost:3800/gif/${id}`);
      const singleGifUserSecret = res.data.getSingle.userSecret;
      if (userHasSecret === singleGifUserSecret) {
        nav(`/gif/${id}`);
      } else {
        console.log('Jūs neturite tam teisių');
      }
    } else {
      console.log('Jūs neturite tam teisių');
    }
  };

  return (
    <div className='gif-container'>

      {gifPosts.map((gif) => (
      <div className='gif-card' onClick={() => handleClick(gif.id)} key={gif.id}>
        <img src={gif.url ? gif.url : 'https://media.tenor.com/PXOXwsJKbSYAAAAM/where-you.gif'} alt="Gif" />
        <p>user email</p>
      </div>
      ))}
    </div>

  )
}

export default Gifs
