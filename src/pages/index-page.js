import React from 'react'
import GifForm from '../components/gif-form'
import Gifs from '../components/gifs'
import './index-page.css'

const IndexPage = () => {
  const [gifPosts, setGifPosts] = React.useState([]);

  return (
    <div className='container'>
      <GifForm setGifPosts={setGifPosts} gifPosts={gifPosts} />
      <Gifs setGifPosts={setGifPosts} gifPosts={gifPosts} />
    </div>
  )
}

export default IndexPage