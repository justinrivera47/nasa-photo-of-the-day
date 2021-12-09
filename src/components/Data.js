import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {myApi, nasaUrl} from './Api';

const Data = () => {
    // Initialize state to hold the image URL
    const [data, setData] = useState({})
    const [myApi, setApi] = useState('')
    const setApi = 'bc5oQEalciMcJmOkmWc5dka0yHixGYW7I5fpJ9aT'
    useEffect(() => {
      // This axios GET request will return a single image
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${myApi}`)
        // Which we then set to state
        .then(res => setData(res.data))
        // Always include error handling
        .catch(err => console.log(err));
    }, []);
    return (
      <div className="container">
        <h1>Picture of the day</h1>
        <img src={data.url} />
      </div>
    )
}

export default Data
