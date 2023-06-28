import axios from 'axios' ;
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import Footer from '../MédecinTemplate/Footer';
import NavBar from '../MédecinTemplate/NavBar';


const EMPLOYEE_API_URL="http://localhost:8089/facture/all";
export default function FactureList() {
    const [Facturees,setFacturees]=  useState('');

    const deleteEmployee=async(id)=>{
      try {
        await axios.delete(`http://localhost:8089/facture/delete/${id}`).then(res =>{
          Facturees= Facturees.filter(item => item.id !==id);
          setFacturees(Facturees);
          alert("Employee deleted successfully !");


        })
        
      } catch (error) {
        console.log(error);
        
      }
      Show()
    };
    const Show=()=>{
      axios.get("http://localhost:8080/api/v1/facturees").then(response =>{
        const Facturees= response.data;
        setFacturees(Facturees)
      })
    }
    function EmployeeList(){
        axios.get(EMPLOYEE_API_URL).then(
            response =>{
                const Facturees= response.data;
                setFacturees(Facturees);
                
                
            })
    }
    
    function handleClick() {
        window.location.href = '/ADDFacture';
      }
    
    useEffect(()=>{
        EmployeeList()
        
    },[]
    )
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: ' date_facture',
          headerName: ' date_facture',
          width: 150,
          
         
        },
        {
          field: 'nom_Cabinet',
          headerName: 'nom_Cabinet',
          width: 150,
          
        },
        {
          field: 'nom_patient',
          headerName: 'nom_patient',
          width: 150,
          
        },
        {
            field: 'frais_consultation',
            headerName: 'frais_consultation',
            width: 150,
            
          },
          {
            field: 'frais_supplimentaire',
            headerName: 'frais_supplimentaire',
            width: 150,
            
          },
          {
            field: 'frais_suivi',
            headerName: 'frais_suivi',
            width: 150,
            
          },
          {
            field: 'montant_assurance',
            headerName: 'montant_assurance',
            width: 150,
            
          },
          {
            field: 'montant_mutualite',
            headerName: 'montant_mutualite',
            width: 150,
            
          },
          {
            field: 'montant_total',
            headerName: 'montant_total',
            width: 150,
            
          },
          {
            field: 'mode_payement',
            headerName: 'mode_payement',
            width: 150,
            
          },
          {
            field: 'mutualite',
            headerName: 'mutualite',
            width: 150,
            
        
         
          renderCell:(params)=>{
            return(
              <Box>
              <a onClick={(e) => { deleteEmployee(params.id, e) }} style={{ marginRight: '10px' }}>delete</a>
              <a href={'/updateFacture/' + `${params.row.id}`} style={{ marginRight: '10px' }}>Edit</a>
              <a href={'/getoneFacture/' + `${params.row.id}`} style={{ marginRight: '10px' }}>show</a>
            </Box>
            
            
            )
          }
        },

       ];
      console.log(Facturees);
      
      const rows =Facturees ? Facturees?.map((e)=>{
      
        return{

          id: e.id,
          date_facture: e.date_facture,
          nom_Cabinet: e.nom_Cabinet,
          nom_patient: e.nom_patient,
          frais_consultation:e.frais_consultation, 
          frais_supplimentaire:e.frais_supplimentaire, 
          frais_suivi:e.frais_suivi, 
          montant_assurance:e.montant_assurance, 
          montant_mutualite:e.montant_mutualite,
          montant_total :e.montant_total,
          mode_payement:e.mode_payement,
          
          mutualite :e.mutualite
          
          
          
          
          
        }}):[];
       
    
        
       
      
      
  return (
 


<div style={{marginTop:50, marginLeft:'30px'}}>
<NavBar></NavBar>
<br></br>
<br></br>
<br></br>
    <button onClick={handleClick} class="btn btn-primary mb-2" >Add Facture</button>

    

    <Box sx={{ height: 400, width: '80%', marginLeft: '300px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <Footer></Footer>
    </div>
  );
}

  