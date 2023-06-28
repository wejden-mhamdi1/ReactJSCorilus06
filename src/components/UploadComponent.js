import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import NavBar from './MédecinTemplate/NavBar';
import Footer from './MédecinTemplate/Footer';


export default function ListComponent() {
  
    const [list,setList]=useState([]);
    const [file,setFile]=useState(null);
  
    const [files, setFiles] = useState([]);
    const [fileContents, setFileContents] = useState([]);
  
   
  
    
  
    
    
  
    
 



    const ajout = () =>{
        var formdata = new FormData();
formdata.append("file",  file);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};



fetch("http://localhost:8089/file/upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      
      // Call the ajout function to upload the file
      ajout();
    
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
        window.location.href = '/list/uploadFile';
      }, 2000);
    };
   
  return (
    <div>
          <NavBar></NavBar>
<br></br>
        <br></br>
        <br></br>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>

      {list.map(elt => (
        <p>{elt.name}</p>
      ))}
      <section id="Get-loan">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <br></br>
        <br></br>
        <br></br>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isLoading}
                  endIcon={isLoading ? null : <SendIcon />}
                >
                  {isLoading ? 'Loading...' : 'Submit'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div class="col-md-2">
                   <div class="choose-img">
                       <img src="./source/images/gestion.png" style={{marginTop: '-18px'}} alt=""/>
                     
                      

                   </div>
               </div>
    </div>
    <br></br>
        <br></br>
        <br></br>
        <Footer></Footer>
  </div>

);
      }

