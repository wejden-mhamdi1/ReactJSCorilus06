
import React, { useState, useEffect, useMemo ,useRef} from 'react';
import { Alert, AlertTitle } from '@mui/material';
import axios from 'axios';
import { Await, useParams } from 'react-router-dom';
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@mui/material';
import TableScrollButton from '@mui/material/TabScrollButton';
import './Table.css';
import NavBar from './MédecinTemplate/NavBar';
import Footer from './MédecinTemplate/Footer';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import Menu from '@mui/material/Menu';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import i18next from 'i18next';
    const Tableau920099 = () => {
  const [header, setHeader] = useState([]);
  const [erreur, setErreur] = useState([]);
  const [records, setRecords] = useState([]);
  const { id } = useParams();
  const [selectedAttestation, setSelectedAttestation] = useState(null);
  const [selectedPrestation, setSelectedPrestation] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const [selectedAttestationId, setSelectedAttestationId] = useState(null);

  const [age, setAge] = React.useState('');


  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  

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
      const translatedRecords = response.data.map(record => {
        const translatedDescription = t(record.desription);
        return { ...record, translatedDescription };
      });
      setRecords(translatedRecords);
      //console.log(records);
    })
    .catch(error => {
      console.error(error);
    });

  }
  function getErreur(){
    axios.get(`http://localhost:8089/iderr/${id}`) 
    .then(response => {
      const translatedRecords = response.data.map(record => {
        const translatedDescription = t(record.description);
        return { ...record, translatedDescription };
      });
      setErreur(translatedRecords);
      console.log("eer"+response.data);
    })
    .catch(error => {
      console.error(error);
    });

  }

  function getMessagesHeader(){
    axios.get(`http://localhost:8089/id/${id}`) // Remplacez '/students' par l'URL de votre endpoint pour récupérer les étudiants
    .then(response => {
      const translatedRecords = response.data.map(record => {
        const translatedDescription = t(record.description);
        return { ...record, translatedDescription };
      });
      setHeader(translatedRecords);
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



const seg200= header.slice(1,14);
const header200 = seg200.map((msg) => `${msg.translatedDescription}`);
const headerContent200 = seg200.map((msg) => `${msg.data}`);

const seg300= header.slice(14,header.length);
console.log(header.length);
const header300 = seg300.map((msg) => `${msg.translatedDescription}`);
const headerContent300 = seg300.map((msg) => `${msg.data}`);

  useEffect(() => {
    if (prestationss[selectedPrestation - 1]) {
      prestationss[selectedPrestation - 1].content.forEach(record => {
        const a = erreur.find(erreurs => erreurs.codeError);
        if (a && a.codeError.substring(2, 4) === record.nom_zone.substring(4, 6)) {
          setRecordData(record.data);
          setDescriptionData(record.translatedDescription);
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


const [recordData, setRecordData] = useState(null);
const [descriptionData, setDescriptionData] = useState(null);
const [isSegment200Visible, setSegment200Visible] = useState(true);

  const handleSegment200Click = () => {
    setSegment200Visible(!isSegment200Visible);
  };
  const [isSegment300Visible, setSegment300Visible] = useState(true);

  const handleSegment300Click = () => {
    setSegment300Visible(!isSegment200Visible);
  };
  const [isSegment10Visible, setSegment10Visible] = useState(true);

  const handleSegment10Click = () => {
    setSegment10Visible(!isSegment200Visible);
  };
  const [isSegment90Visible, setSegment90Visible] = useState(true);

  const handleSegment90Click = () => {
    setSegment90Visible(!isSegment200Visible);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const logout = () => {
    localStorage.clear(); 
    window.location.href = '/';
  };
  
  function onClickLogout(setting) {
    if (setting === 'logout') {
      logout();
    }
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
 
    <div>
      
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
     <nav class="navbar navbar-expand-lg navbar-white bg-white " >
             
            
    <div class="container">
   
        <a href="" class="navbar-brand"><img src="../source/images/Capture.png" alt="corilus logo"/></a>

        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#easylo" type="button">
            <span class="bi bi-list"></span>
        </button>

        <div class="collapse navbar-collapse" id="easylo">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"> <a class="nav-link text-dark" href="/home">Home</a> </li>
                <IconButton
  aria-label="account of current user"
  aria-controls="menu-appbar"
  aria-haspopup="true"
  onClick={handleMenu}
  color="inherit"
>
  <AccountCircle />
</IconButton>
<button onClick={() => handleClick('nl')}>
  Nederlands
</button>


                <label for="b"></label>

                <div>
          
              <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            onClickLogout('logout');
            handleClose();
          }}
        >
          Logout
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
     
      </Menu>
      
              </div>

             

              
               
            </ul>
            
        </div>
        
    </div>

</nav>
      
       
      
<br></br>
<br></br>
<br></br>


       <div style={{ width: '78%', overflowX: 'auto',marginLeft:'20%'}}>
     
  
       {erreur.map((erreurs) => (
          <TableCell style={{ width: '700', color:'red' }} key={erreurs.id}>
          <p>  {erreurs.frenshDescription}</p> 
          <p> {t('de type Erreur')}</p> {erreurs.errorNature}
          

          </TableCell>
        ))}
       <br></br>
       <h5 onClick={handleSegment200Click}>Segment 200</h5>
      {isSegment200Visible && (
        <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
          <Table stickyHeader>
            <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>
              <TableRow>
                {header200?.map((name) => (
                  <TableCell style={{ width: '200px' }} key={name}>
                    {name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {headerContent200?.map((cont) => (
                <TableCell style={{ width: '200px' }}>{cont}</TableCell>
              ))}
              <TableRow></TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <br></br>
      <h5 onClick={handleSegment300Click}>Segment 300</h5>
      {isSegment300Visible && (
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
      )}
<br></br>
      <br></br>
      <h5>{t('details facture')}</h5>
      <br></br>
      <br></br>
      
      <div>
     
      
      <input
  type="text"
  placeholder="Recherche..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
<button onClick={handleSearch}>{t('Rechercher')}</button>
      <br></br>
      <br></br>
      <h5 onClick={handleSegment10Click}>{t('Enregistrement de type')} 10</h5>
      {isSegment10Visible && (
        <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
          <Table stickyHeader>
            <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>
              <TableRow>
                {filteredRecords.map(record10 => {
                  const matchingErreur = erreur.find(erreurs => erreurs.codeError === record10.data);
                  return (
                    <TableCell style={{ width: '1000px' }} key={record10.id}>
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
                {filteredRecords.map(record10 => (
                  <TableCell style={{ width: '1000px' }} key={record10.id}>
                    {record10.translatedDescription}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}


    
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
           {record.translatedDescription}
           
          
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
                    {record.translatedDescription}
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
  {('show error')}
</button>
  <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  <p>{('le code')} : {recordData && <span style={{ color: 'red' }}>{recordData}</span>}</p>  <strong> <p>la description :  {descriptionData && <span style={{ color: 'red' }}>{descriptionData}</span>}</p></strong>
</Alert>
 
 
 
</div>

</div>

    </div>
  )}
</div>


  <br></br>

 
  <h5 onClick={handleSegment90Click}>Enregistrement de Type  90</h5>
      {isSegment90Visible && (
        <TableContainer component={Paper} sx={{ maxWidth: 10000 }}>
          <Table stickyHeader>
            <TableHead scrollButtons={true} allowScrollButtonsMobile={true} ScrollButtonComponent={TableScrollButton}>
              <TableRow>
                {fotters90.map((footer, index) => (
                  <div key={index}>
                    {footer.content.map(record => (
                      <TableCell style={{ width: '2000px' }} key={record.id}>
                        {record.translatedDescription}
                      </TableCell>
                    ))}
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
      )}

    


  </div>
      <br></br>
   </div>
   <Footer></Footer>
    </div>
  );
  
};



  

export default Tableau920099;
