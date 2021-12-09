import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {  BASE_URL, API_KEY } from '../Constants/index';

const Image = () => {
    // Initialize state to hold the image URL
    const [data, setData] = useState({})
    useEffect(() => {
      // This axios GET request will return a single image
      axios
        .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        // Which we then set to state
        .then(res => {setData(res.data)}
        )
        // Always include error handling
        .catch(err => console.log(err));
    }, []);
    return (
      <div className="container">
        <h1>Picture of the day</h1>
        <img src={data.url} />
        <p>{data.title}</p>

      </div>
    )
}

export default Image
