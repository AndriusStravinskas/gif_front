import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './single-gif-page.css'


const SingleGifPage = () => {
  const {id} = useParams()
  const [SingleGif, setSingleGif] = React.useState([])
  const [newUrl, setNewUrl] = React.useState({url: ''})
  const nav = useNavigate()
  
  React.useEffect(() => {

    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3800/gif/${id}`)

      setSingleGif(res.data.getSingle)
      setNewUrl({url: res.data.getSingle.url})
    }
    fetchData()

  }, [])

  const handleDelete = async () => {

    try {
      console.log(`Įvykdytas gif'o ištrynimas su id: ${id}`)
      await axios.delete(`http://localhost:3800/gif/${id}`)
      nav('/gif')
      
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUrl((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:3800/gif/${id}`, newUrl)
      setSingleGif({url: res.data.gif.url});
    } catch (error) {
      if (error) {
        console.log(error.message)
      }
    }
  }



  return (
    <div className='single-gif-container'>
      <div className='gif-img'>
      <img src={SingleGif.url} alt="" />
      </div>
      <form className='gif-settings-box'>
      <input type="text" value={newUrl.url} onChange={handleChange} name="url" />
      <div className='btn-box'>
      <button className='button-4' type='button' onClick={handleUpdate}>Update</button>
      <button className='button-4' type='button' onClick={handleDelete}>Delete</button>
      </div>
      </form>
    </div>
    
  )
}

export default SingleGifPage
