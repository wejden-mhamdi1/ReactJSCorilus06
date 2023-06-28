
import Box from '@mui/material/Box';
import axios from 'axios' ;
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useMemo } from 'react';
import QrReader from 'react-qr-reader';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NavBar from './MédecinTemplate/NavBar';
import Footer from './MédecinTemplate/Footer';
const EMPLOYEE_API_URL="http://localhost:8089/file/getAll";
function TableauFile() {
  const [filesss, setFilesss]= useState([]);
  const { id }=useParams();


 

  const handleError = (error) => {
    console.error(error);
  };

  const fileUpload22 = async (fileId) => {
    try {
      const response = await axios.get(`http://localhost:8089/file/upload22/${fileId}`);
      const data = response.data;
       
      console.log(data);
    } catch (error) {
     
      console.error(error);
    }
  };


  const handleSplitButtonClick = async (params) => {
    
    fileUpload22(params.row.id);
 
    if (params && params.row && params.row.id) {
      const response = await axios.get(`http://localhost:8089/file/FileDecypter/${params.row.id}`);
     // decrypted(params.row.id);
      const file =response.data// Modifier "content" par la propriété appropriée contenant le contenu du fichier
  console.log("le contenue"+file)

      const fileNumber = file.substring(0, 6);
  
      if (fileNumber === '920000') {
        window.location.href = '/t00/' + params.row.id;
    
      } else if (fileNumber === '920099') {
        window.location.href = '/t99/' + params.row.id;
    
      } else if (fileNumber === '920999') {
        window.location.href = '/t999/' + params.row.id;
       
      }
      else if (fileNumber === '920900') {
        window.location.href = '/t900/' + params.row.id;
       
      }
  
     
    } else {
      console.error('Missing parameters or id');
    }
  };
  const handleSplitButtonClick2 = async (params) => {
    
    
    if (params && params.row && params.row.id) {
      const response = await axios.get(`http://localhost:8089/file/FileCypter/${params.row.id}`);
     
      const file =response.data
  console.log("le contenue"+file)

      const fileNumber = file.substring(0, 6);
  
      if (fileNumber === '920000') {
        window.location.href = '/t00/' + params.row.id;
    
      } else if (fileNumber === '920099') {
        window.location.href = '/t99/' + params.row.id;
    
      } else if (fileNumber === '920999') {
        window.location.href = '/t999/' + params.row.id;
       
      }
      else if (fileNumber === '920900') {
        window.location.href = '/t900/' + params.row.id;
       
      }
  
     
    } else {
      console.error('Missing parameters or id');
    }
  };
  
  
  
  
    const [files,setFiles]=  useState(null);
    function filesList(){
        axios.get(EMPLOYEE_API_URL).then(
            response =>{
                const files= response.data;
                setFiles(files);
                
                
            })
    }

  
    
    
    useEffect(()=>{
        filesList()
          
      },[]
      )
      const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'fileName', headerName: 'fileName', width: 100 },
        { field: 'fileType', headerName: 'fileType', width: 100 },
        { field: 'status', headerName: 'status', width: 100 },
        {
          field: 'actions',
          headerName: 'Actions',
          width: 500,
          renderCell: (params) => (
            <div className="d-flex align-items-center">
             {params.row.status === 'SPLITED' ? (
  <div className="d-flex align-items-center">
    <Stack direction="row" spacing={2}>
      <Button variant="contained" style={{ color: 'green' }} onClick={() => handleSplitButtonClick(params)} disabled>
        Split
      </Button>
      <Button variant="outlined" color="error" onClick={() => handleSplitButtonClick2(params)}>
        Show
      </Button>
    </Stack>
  </div>
) : (
  <div className="d-flex align-items-center">
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" color="error" onClick={()  => handleSplitButtonClick(params)}>
        Split
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleSplitButtonClick2(params)} disabled>
        Show
      </Button>
    </Stack>
  </div>
)}
            </div>
          ),
        },
      ];
      
    
      const rows = files ? files.map((e) => ({
        id: e.id,
        fileName: e.fileName,
        fileType: e.fileType,
        status: e.status,
      })) : [];
    
      return (
        <div >
              <NavBar></NavBar>
         <br></br>
              <Box sx={{ marginLeft: '55px', height: 500, width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[8]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
          <Footer></Footer>
        </div>
      );
    }
    
  export default TableauFile