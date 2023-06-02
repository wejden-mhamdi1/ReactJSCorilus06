
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function ShowFile() {
    const [result, setResult] = useState('');
    const {id}=useParams();
    useEffect(()=>{
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
      
        fetch(`http://localhost:8089/file/FileCypter/${id}`, requestOptions)
       
          .then(response => response.text())
          .then(result => setResult(result))
          .catch(error => console.log('error', error));
      }, []);
  return (
    <div>  {result}</div>
  )
}
