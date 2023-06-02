import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function ShowFileDecrypted() {
    const {id}=useParams();
    const [result, setResult] = useState('');
    useEffect(()=>{
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
      
        fetch(`http://localhost:8089/file/FileDecypter/${id}`, requestOptions)
        
          .then(response => response.text())
          .then(result => setResult(result))
          .catch(error => console.log('error', error));
      }, []);
  return (
    <div>  {result}</div>
  )
}
