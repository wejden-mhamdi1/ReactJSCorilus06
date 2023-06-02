import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import React, {  useEffect } from 'react';
import axios from 'axios';
import Bar from "./scenes/bar";
import Form from "./scenes/form";

import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";

import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
//
import UploadComponent from './components/UploadComponent';
import Footer from './components/MédecinTemplate/Footer';
import NavBar from './components/MédecinTemplate/NavBar';
import ShowFileCrypted from './components/ShowFileCrypted';
import HomeComponent from './components/MédecinTemplate/HomeComponent'
import { BrowserRouter as Router, Redirect ,Navigate} from 'react-router-dom'



import FileSplited from './components/FileSplited';
import ShowFileDeCrypted from './components/ShowFileDecrypted';
import TableauFile from './components/TableauFile';
import Tabledemande from './components/Tabledemande';
import Consultation from'./components/Consultation/Consultation';
import ConsultationList from './components/Consultation/ConsultationList';
import UpdateConsultation from './components/Consultation/UpdateConsultation';
import ConsultationDetails from './components/Consultation/ConsultationDetails';
import Facture from'./components/Facture/Facture';
import FactureList from './components/Facture/FactureList';
import UpdateFacture from './components/Facture/UpdateFacture';
import FactureDetails from './components/Facture/FactureDetails';
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import Tableau920000 from "./components/Tableau920000";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Switch } from 'react-router-dom';
import Tableau920099 from "./components/Tableau920099";
import Tableau920999 from "./components/Tableau920999";
import Tableau920900 from "./components/Tableau920900";

import AllStat  from "./components/Statistiques/allstat";

function App() {
/* const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
         
          const roleResponse = await axios.get(`http://localhost:8081/api/v1/auth/user-role`, {
            headers: { Authorization: `${token}` }
          });
          const role = roleResponse.data;
          
          setUserRole(role);
          console.log(role);
        }else {
          // Gérer le cas où le token est manquant
          setUserRole(null);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération du rôle de l\'utilisateur:', error);
        // Gérez l'erreur ici
        setUserRole(null);
        
      }
    };

    fetchUserRole();
  }, []);*/

  const userRole = 'USER';
 //const userRole = useSelector((state) => state.user.role);
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div>
    <Router>
       
       
            
            <div className="container">
                <Routes>
                 
                    <Route path='/' element={< Login/>} />
                   <Route path='/Register' element={< Register/>} />
                    {userRole === 'USER' && (
                      <>
              
               <Route path='/login' element={< Login/>} />
               <Route path='/home'  element={<HomeComponent />} />
               <Route path='/upload' element={< UploadComponent/>} />
               <Route path='/t99/:id' element={< Tableau920099/>} />
               <Route path='/t00/:id' element={< Tableau920000/>} />
               <Route path='/t999/:id' element={< Tableau920999/>} />
               <Route path='/t900/:id' element={< Tableau920900/>} />
               <Route path='s' element={< AllStat/>} />
                      <Route path='/list/showcrypted/:id' element={< ShowFileCrypted/>} />
                      <Route path='/list/showdecrypted/:id' element={< ShowFileDeCrypted/>} />
                      <Route path='/list/Split/:id' element={< FileSplited/>} />
                      <Route path='/list/uploadFile' element={< TableauFile/>} />
                      
                      <Route path='/ADDConsultation' element={< Consultation/>} />
                      <Route path='/listConsultation' element={< ConsultationList/>} />
                      <Route path='/updateConsultation/:id' element={< UpdateConsultation/>} />
                      <Route path='/getone/:id' element={< ConsultationDetails/>} />
                      <Route path='/ADDfacture' element={< Facture/>} />
                      <Route path='/listFacture' element={< FactureList/>} />
                      <Route path='/updateFacture/:id' element={< UpdateFacture/>} />
                      <Route path='/getoneFacture/:id' element={< FactureDetails/>} />
                      <Route path="/calendar" element={<Calendar />} />
                    
                {/* <Route path='/list/:id' element={< Tabledemande/>} />*/}
                 
          
           
                   
              
                    </>
                    )}
                    {userRole === 'ADMIN' && (
                    
                        <>
                         <Route path='/Register' element={< Register/>} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />

        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
       
        <Route path="/faq" element={<FAQ />} />
       
        
        <Route path='/list/uploadFile' element={< TableauFile/>} />
        <Route path='/upload' element={< UploadComponent/>} />
         <Route path='/t99/:id' element={< Tableau920099/>} />
         <Route path='/t00/:id' element={< Tableau920000/>} />
         <Route path='/t999/:id' element={< Tableau920999/>} />
         <Route path='/t900/:id' element={< Tableau920900/>} />
                        </>
                    )}
                     <Route path="/" element={<Navigate to="/" />} />
                   
                  
                </Routes>
           </div>
           
           
       
    </Router>
  </div>
 
         );
}


export default App;

          
          
        

