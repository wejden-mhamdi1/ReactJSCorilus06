
import React, { useState, useEffect, useMemo ,useRef} from 'react';
import { Alert, AlertTitle } from '@mui/material';

import axios from 'axios';
import { Await, useParams } from 'react-router-dom';
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@mui/material';
import TableScrollButton from '@mui/material/TabScrollButton';
import './Table.css';
import NavBar from './MédecinTemplate/NavBar';
import Footer from './MédecinTemplate/Footer';
import { red } from '@mui/material/colors';
    const Tableau920099 = () => {
  const [header, setHeader] = useState([]);
  const [erreur, setErreur] = useState([]);
  const [data, setData] = useState(null);
  const [records, setRecords] = useState([]);
  const { id } = useParams();
  const [selectedAttestation, setSelectedAttestation] = useState(null);
  const [selectedPrestation, setSelectedPrestation] = useState(null);
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
  
  function getRecordList(){
    axios.get(`http://localhost:8089/zone/id/${id}`) 
    .then(response => {
      setRecords(response.data);
    })
    .catch(error => {
      console.error(error);
    });

  }
  function getErreur(){
    axios.get(`http://localhost:8089/iderr/${id}`) 
    .then(response => {
      setErreur(response.data);
      console.log("eer"+response.data);
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
  
  const filteredRecords = filterRecords();
  const [filteredData, setFilteredData] = useState([]);

 
  
  const rec= records.slice(0,1)[0];
  const seg200300data= header.slice(0,1);


const seg200= header.slice(1,14);
const header200 = seg200.map((msg) => `${msg.description}`);
const headerContent200 = seg200.map((msg) => `${msg.data}`);

const seg300= header.slice(14,header.length);
console.log(header.length);
const header300 = seg300.map((msg) => `${msg.description}`);
const headerContent300 = seg300.map((msg) => `${msg.data}`);
const recordzone = records.map((msg) => `${msg.nom_zone}`);
const rejet = erreur.map((msg) => `${msg.codeError}`);

  
  useEffect(() => {
    if (prestationss[selectedPrestation - 1]) {
      prestationss[selectedPrestation - 1].content.forEach(record => {
        const a = erreur.find(erreurs => erreurs.codeError);
        if (a && a.codeError.substring(2, 4) === record.nom_zone.substring(4, 6)) {
          setRecordData(record.data);
          setDescriptionData(record.desription);
        }
      });
    }
  
    getMessagesHeader();
    getErreur();
    getRecordList()
   
    
     
   },[prestationss, erreur, selectedPrestation], [id]);
  const [highlightButton, setHighlightButton] = useState(false);

   const tableRef = useRef(null);
const scrollToError = (errorId) => {
  const errorElement = document.getElementById(`erreur-${errorId}`);
  if (errorElement && tableRef.current) {
    errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
/*function verifierSubstrings(record, erreur) {
  const zoneSubstring = record.nom_zone.substring(4, 6);
  const errSubstring = erreur.codeError.substring(2, 4);
  const b = zoneSubstring === errSubstring;

  return (
    <p>la valeur cherchée est {b.toString()}</p>
  );
}*/
function verifierSubstrings() {
  const matchedRecords = [];

  for (let i = 0; i < records.length; i++) {
    const recordzone = records[i]?.nom_zone;
    const rejet = erreur[i]?.codeError;

    if (recordzone && rejet && recordzone.length >= 6 && rejet.length >= 4) {
      const zoneSubstring = recordzone.substring(4, 6);
      const errSubstring = rejet.substring(2, 4);

      if (zoneSubstring === errSubstring) {
        matchedRecords.push(records[i].data);
      }
    }
  }

  return matchedRecords;
}
const [recordData, setRecordData] = useState(null);
const [descriptionData, setDescriptionData] = useState(null);
const matchedRecordData = verifierSubstrings();
  return (
    
    <div>
      
      <NavBar></NavBar>
      
<br></br>
<br></br>
<br></br>


       <div style={{ width: '78%', overflowX: 'auto',marginLeft:'20%'}}>
     
  
       {erreur.map((erreurs) => (
          <TableCell style={{ width: '700', color:'red' }} key={erreurs.id}>
          <p>  {erreurs.frenshDescription}</p> <p>de type Erreur</p> {erreurs.errorNature}
          

          </TableCell>
        ))}
       <br></br>
      <h6>segment 200</h6>
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
      <h6>segment 300</h6>
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
      <div>
     
      
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
        {filteredRecords.map(record10 => {
          const matchingErreur = erreur.find(erreurs => erreurs.codeError === record10.data);
          return (
            <TableCell style={{ width: '100px' }} key={record10.id}>
              {record10.data} 
              {matchingErreur && (
                <p style={{ color: 'red' }}>{matchingErreur.frenshDescription}</p>
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
      {filteredRecords.map(record10 => {
         
          return (
            <TableCell style={{ width: '100px' }} key={record10.id}>
               {record10.desription}
              
            </TableCell>
          );
        })}
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>


    
<div>
  <h1>Attestations</h1>
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

      <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
  <Table stickyHeader>
  <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>
      <TableRow>
      {attestations[selectedAttestation - 1].content.map(record => {
       
       return (
         <TableCell style={{ width: '200px' }} key={record.data}>
           {record.desription}
           
          
         </TableCell>
       );
     })}
   </TableRow>
      
        
    </TableHead>
    <TableBody>
      <TableRow>
        {attestations[selectedAttestation - 1].content.map(record => {
          const matchingErreur = erreur.find(erreurs => erreurs.codeError === record.data);
          return (
            <TableCell style={{ width: '200px' }} key={record.data}>
              {record.data}
              {matchingErreur && (
                <div key={matchingErreur.id} id={`erreur-${matchingErreur.id}`}>
                  <p style={{ color: 'red' }}>{matchingErreur.frenshDescription}</p>
                </div>
              )}
              <TableCell style={{ width: '200px' }} key={record.data}>
                
              </TableCell>
            </TableCell>
          );
        })}
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>


<h2>Prestations:</h2>

<div ref={tableRef}>
  <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
    <Table stickyHeader>
    <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>
      <TableRow>
      {prestationss[selectedPrestation - 1] &&
            prestationss[selectedPrestation - 1].content.map(record => {
             
              return (
                  <TableCell style={{ width: '200px' }} key={record.data}>
                    {record.desription}
                  </TableCell>
              
              );
            })}
      </TableRow>
     
        
    </TableHead>
      <TableBody>
        <TableRow>
          {prestationss[selectedPrestation - 1] &&
            prestationss[selectedPrestation - 1].content.map(record => {
              const matchingErreur = erreur.find(erreurs => erreurs.codeError === record.data);
    
              return (
                <TableCell style={{ width: '200px' }} key={record.data}>
                  
                  {record.data}
                  {matchingErreur &&  (
                    <div key={matchingErreur.id} id={`erreur-${matchingErreur.id}`}>
                      <p style={{ color: 'red' }}>{matchingErreur.frenshDescription}</p>
                    </div>

                  )}
                   
                  
                    
                  
                </TableCell>
              );
            })}
        </TableRow>
        <TableRow>
        
      </TableRow>
      </TableBody>
     
    </Table>

  </TableContainer>

  <div>
  <button
  onClick={() => {
    scrollToError(erreur[0].id);
    setHighlightButton(true);
  }}
  className={highlightButton ? 'highlighted-button' : ''}
>
  Aller à l'erreur
</button>
  <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  <p>le code : {recordData && <span style={{ color: 'red' }}>{recordData}</span>}</p>  <strong> <p>la description :  {descriptionData && <span style={{ color: 'red' }}>{descriptionData}</span>}</p></strong>
</Alert>
 
 
 
</div>

</div>

    </div>
  )}
</div>


  <br></br>
  <p>Enregistrement Type 90</p>
 
  <TableContainer component={Paper} sx={{ maxWidth: 10000 }}>
  <Table stickyHeader>
  <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>
      <TableRow>
      {fotters90.map((footer, index) => (
          <div key={index}>
            {footer.content.map(record => {
             
              return (
                <TableCell style={{ width: '2000px' }} key={record.id}>
                 {record.desription}
              
                </TableCell>
              );
            })}
          </div>
        ))}
      </TableRow>
      
        
    </TableHead>
    <TableBody>
      <TableRow>
        {fotters90.map((footer, index) => (
          <div key={index}>
            {footer.content.map(record => {
              const matchingErreur = erreur.find(erreurs => erreurs.codeError === record.data);
              return (
                <TableCell style={{ width: '2000px' }} key={record.id}>
                  {record.data} {record.desription}
                  {matchingErreur && (
                    <p style={{ color: 'red' }}>{matchingErreur.frenshDescription}</p>
                  )}
                </TableCell>
              );
            })}
          </div>
        ))}
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

    


  </div>
      <br></br>
   </div>
   <Footer></Footer>
    </div>
  );
};



  

export default Tableau920099;
