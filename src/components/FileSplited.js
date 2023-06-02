
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function FileSplited() {
    const {id}=useParams();
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
      const fetchFileList = async () => {
        try {
          const response = await axios.get(`http://localhost:8089/file/upload22/${id}`);
          setFileList(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchFileList();
    }, [id]);
  
    return (
      <div>
        <button ><a href={'/lecture'}>Lecture</a></button>
        <ul>
          {fileList.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      </div>
      
    );
  }
  