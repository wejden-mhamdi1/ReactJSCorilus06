import React, { useState, useEffect, useMemo } from 'react';

import axios from 'axios';
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@mui/material';
import TableScrollButton from '@mui/material/TabScrollButton';
import { useParams } from 'react-router-dom';
import Footer from './MédecinTemplate/Footer';
import NavBar from './MédecinTemplate/NavBar';



const ZONE_API_URL = "http://localhost:8089/zone/getAllZone";

function Tableau920000() {
  const [attestationList, setAttestationList] = useState([]);
  const [selectedAttestation, setSelectedAttestation] = useState(null);
  const [selectedPrestation, setSelectedPrestation] = useState(null);

  const [prestations, setPrestations] = useState([]);
  const [header, setHeader]= useState([]);
  const [detail, setDetail]= useState([]);
  const [footers, setfooters]= useState([]);
  const [records, setRecords]= useState([]);
  const [error, setError]= useState([]);
  const { id }=useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');

  const [selectedAttestationId, setSelectedAttestationId] = useState(null);
  const filterRecords = () => {
    if (searchTerm === null || searchTerm === '') {
      return records;
    } else {
      return records.filter(record =>
        record.desription?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };
  
  const filteredRecords = filterRecords();
  function getErreurList(){
    axios.get(`http://localhost:8089/getall`) // Remplacez '/students' par l'URL de votre endpoint pour récupérer les étudiants
    .then(response => {
      setError(response.data);
    })
    .catch(error => {
      console.error(error);
    });

  }


    function getRecordList(){
      axios.get(`http://localhost:8089/zone/id/${id}`) // Remplacez '/students' par l'URL de votre endpoint pour récupérer les étudiants
      .then(response => {
        setRecords(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    }
    

   function getMessagesHeader(){
      axios.get(`http://localhost:8089/id/${id}`) // Remplacez '/students' par l'URL de votre endpoint pour récupérer les étudiants
      .then(response => {
        setHeader(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    }
    
   
  
    useEffect(() => {
     getMessagesHeader();
 
     getRecordList();
     
   
    
   
}, []);
   
 


const [fotters90,fotters95,fotters96,record10]=useMemo(() => {
  const fotters90 =[];
  const fotters95=[];
  const fotters96=[];
  const record10=[];

  for(let i = 0 ; i<records.length;i++){
    const record = records[i];
    
    if (record.data == "10") {
      const recordd = {
        content: []
      };
      record10.push(recordd);
      
      for (let j = i + 1; j < records.length; j++) {
        const nextRecord = records[j];
        recordd.content.push(nextRecord);
        
        if (nextRecord.data == "20") {
          break; // Sortie de la boucle lorsque "20" est trouvé
        }
      }
      break; 
    }}
    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      
      if (record.data == "90") {
        const footter = {
          content: []
        };
        fotters90.push(footter);
        
        for (let j = i + 1; j < records.length; j++) {
          const nextRecord = records[j];
          footter.content.push(nextRecord);
          
          if (nextRecord.data === "96" || nextRecord.data === "95") {
            break;
          }
        }
        
        break;
      }
    }
      for (let i = 0; i < records.length; i++) {
        const record = records[i]; 
        
        if (record.data == "95") {
          const footter = {
            content: []
          };
          fotters95.push(footter);
          
          for (let j = i + 1; j < records.length; j++) {
            const nextRecord = records[j];
            footter.content.push(nextRecord);
            
            if (nextRecord.data === "96" || nextRecord.data === "90") {
              break;
            }
          }
          
          break;
        }
      }
    for(let i = 0 ; i<records.length;i++){
      const record = records[i]; 
     if(record.data=="96"){
      const footter = {
      
        content: []
      };
      fotters96.push(footter);
      for (let j = i + 1; j < records.length; j++) {
        const nextRecord = records[j];
        footter.content.push(nextRecord);
      }
      break;
    }

  }
  return [fotters90,fotters95,fotters96,record10];
}, [records]);
const [attestations, prestationss] = useMemo(() => {
  let numAttestations = 0;
  let numPrestations = 0;
  const attestations = [];
  const prestationss = [];
 

  
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
  
    if (record.data === "20") {
      numAttestations++;
      const attestation = {
        id: numAttestations,
        content: []
      };
      attestations.push(attestation);
  
      for (let j = i + 1; j < records.length; j++) {
        const nextRecord = records[j];
        attestation.content.push(nextRecord);
  
        if (nextRecord.data === "80" || nextRecord.data === "50") {
          break;
        }
      }
  
      continue;
    }
  
    if (record.data === "50") {
      numPrestations++;
      const prestation = {
        id: numPrestations,
        content: []
      };
      prestationss.push(prestation);
  
      for (let j = i + 1; j < records.length; j++) {
        const nextRecord = records[j];
        prestation.content.push(nextRecord);
  
        if (nextRecord.data === "50" || nextRecord.data === "51"||nextRecord.data === "80") {
          break;
        }
      }
  
      continue;
    }
  }
  

  return [attestations, prestationss];
}, [records]);

const handleAttestationClick = (prestationId) => {
  setSelectedAttestation(prestationId);
};
const handlePrestationClick = (prestationId) => {
  setSelectedPrestation(prestationId);
};
const selectedPrestations = selectedAttestation
  ? prestationss.filter(p => p.attestationId === selectedAttestation)
  : [];
  
 
    const rec= records.slice(0,1)[0];
    const seg200300data= header.slice(0,1);
  

  const seg200= header.slice(1,14);
  const header200 = seg200.map((msg) => `${msg.description}`);
  const headerContent200 = seg200.map((msg) => `${msg.data}`);

  const seg300= header.slice(14,header.length);
  console.log(header.length);
  const header300 = seg300.map((msg) => `${msg.description}`);
  const headerContent300 = seg300.map((msg) => `${msg.data}`);
 



const [searchValue, setSearchValue] = useState("");
const [FilteredRecords, setFilteredRecords] = useState("");

const handleSearch = () => {
  if (searchTerm !== null) {
    const filteredRecords = records.filter(
      (record) =>
        record.desription !== null &&
        record.desription.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecords(filteredRecords);
  }
};


const [filteredData, setFilteredData] = useState([]);
const handleSearchsegment300 = () => {
 // const searchTerm2 = e.target.value.toLowerCase();

  const filteredRecords = seg300.filter(
    (header300) =>
    header300.description !== null &&
    header300.description.toLowerCase().includes(searchTerm2.toLowerCase())
  );

  setFilteredData(filteredRecords);
};

  return (
    
    
    <div style={{ width: '78%', overflowX: 'auto',marginLeft:'20%'}}>
            <NavBar></NavBar>
<br></br>
<br></br>
<br></br>
      <div>
      {records.length > 0 && (
        <div>
          <h6>entete {records[0].length}</h6>
        </div>
      )}
    </div>

    
      <br></br>
      <h6>segment 200</h6>
     
      <br></br>
      <TableContainer component={Paper} sx={{ maxWidth: 1200}}>
        <Table  stickyHeader>
          <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>
            <TableRow>
              {header200?.map((name) => (
              <TableCell style={{width: '200px'}} key={name}>{name}</TableCell>
            ))}
             
            </TableRow>
          </TableHead>
          <TableBody>
          {headerContent200?.map((cont) => (
              <TableCell style={{width: '200px'}} >{cont}</TableCell>
            ))}
          
              <TableRow >
             
              </TableRow>
           
          </TableBody>
        </Table>
      </TableContainer>
    
      <br></br>
      <br></br>
      <h6>segment 300</h6>
  

      <br></br>
      

      <input
  type="text"
  placeholder="Recherche..."
  value={searchTerm2}
  onChange={(e) => setSearchTerm2(e.target.value)}
/>

<button onClick={handleSearchsegment300}>Rechercher</button>
      <br></br>

<br />

<TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
  <Table stickyHeader>
    <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>
      <TableRow>
        {header300.map((record, index) => (
          <TableCell style={{ width: '200px' }} key={index}>
            {record}
          </TableCell>
        ))}
      </TableRow>
      
        
    </TableHead>
    <TableBody>
      <TableRow>
        {headerContent300.map((cont, index) => (
          <TableCell style={{ width: '200px' }} key={index}>
            {cont}
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

      <br></br>
      <br></br>
      <h5>details facture</h5>
      <h6>Enregistrement de type 10</h6>
      <input
  type="text"
  placeholder="Recherche..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

<button onClick={handleSearch}>Rechercher</button>
      <br></br>
     
      
<TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
  <Table stickyHeader>
    <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>
      <TableRow>
        {filteredRecords.map((record10) => (
          <TableCell style={{ width: '200px' }} key={record10.id}>
            {record10.data} {record10.desription}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  </Table>
</TableContainer>
      
      <br></br>
     
    
      
    
    
     
    
      <div>
    <h1>Attestations  </h1>
    <ul>
      {attestations.map(attestation => (
        <li key={attestation.id}>
          <button onClick={() => handleAttestationClick(attestation.id)}>
            Attestation {attestation.id}
          </button>
        </li>
      ))}
    </ul>

    {selectedAttestation && (
      <div>
             <ul>
      {prestationss.map(prestation => (
        <li key={prestation.id}>
          <button onClick={() => handlePrestationClick(prestation.id)}>
            prestation {prestation.id}
          </button>
        </li>
      ))}
    </ul>
       
        <TableContainer component={Paper} sx={{ maxWidth: 1200}}>
        <Table  stickyHeader>
        
          <TableBody>
          

          
              <TableRow >
                
               {attestations[selectedAttestation - 1].content.map(record => (
            <TableCell style={{width: '200px'}}   key={record.data}>{record.data}</TableCell>
        
          ))}
              </TableRow>
           
          </TableBody>
        </Table>
      </TableContainer>
      
        <h2>Prestations:</h2>
        
     
        <TableContainer component={Paper} sx={{ maxWidth: 1200}}>
        <Table  stickyHeader>
        
          <TableBody>
          

          
          <TableRow>
  {prestationss[selectedPrestation - 1] && prestationss[selectedPrestation - 1].content.map(record => (
    <TableCell style={{ width: '200px' }} key={record.data}>{record.data}</TableCell>
  ))}
</TableRow>

           
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )}
  </div>
 
  <br></br>
  <p>Enregistrement Type 90</p>
 
  <TableContainer component={Paper} sx={{ maxWidth: 10000}}>
        <Table  stickyHeader>
       
          
          <TableBody>
          

          
              <TableRow >
               
      {fotters90.map((footer, index) => (
        <div key={index}>
              {footer.content.map((record) => (
            <TableCell style={{width: '2000px'}}   key={record.id}>{record.data}    {record.desription}</TableCell>
          
        
          ))}
</div>
           ))} 
              </TableRow>
           
          </TableBody>
        </Table>
      </TableContainer>

<br></br>
<br></br>
<p>Bas de  Facture</p>
<br></br>
<br></br>


      <p>Enregistrement Type 95</p>
 
 <TableContainer component={Paper} sx={{ maxWidth: 1200}}>
       <Table  stickyHeader>
         
  
         
         <TableBody>
         

         
             <TableRow >
              
     {fotters95.map((footer, index) => (
       <div key={index}>
             {footer.content.map((record) => (
           <TableCell style={{width: '200px'}}   key={record.id}>{record.data} {record.desription}</TableCell>
       
         ))}
</div>
          ))} 
             </TableRow>
          
         </TableBody>
       </Table>
     </TableContainer>
     <p>Enregistrement Type 96</p>
 
 <TableContainer component={Paper} sx={{ maxWidth: 1200}}>
       <Table  stickyHeader>
         
         <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>


           <TableRow>

     {fotters96.map((footer, index) => (
       <div key={index}>
           {footer.content.map((record) => (
         <TableCell style={{width: '200px'}}   key={record.id}>{record.desription}</TableCell>
       
         ))}
</div>
          ))}    
       
           </TableRow>
         </TableHead>
         
         <TableBody>
         

         
             <TableRow >
              
     {fotters96.map((footer, index) => (
       <div key={index}>
             {footer.content.map((record) => (
           <TableCell style={{width: '200px'}}   key={record.id}>{record.data}</TableCell>
       
         ))}
</div>
          ))} 
             </TableRow>
          
         </TableBody>
       </Table>
     </TableContainer>
     <Footer></Footer>
    </div>
  );
  
}
export default Tableau920000