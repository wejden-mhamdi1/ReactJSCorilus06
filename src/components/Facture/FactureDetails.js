import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import NavBar from '../MédecinTemplate/NavBar';
import './facture.css';
function FactureDetails() {
    const [data, setData] = useState('');
    const { id } = useParams();
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(`http://localhost:8089/facture/get/${id}`);
        setData(result.data);
      };
      fetchData();
    }, [id]);
  
   
  
    return (
      <div>
      <NavBar></NavBar>
      <div className='container' style={{   width: '50%', height: '50%' ,marginLeft: '400px',}}>
      




<div className="col-md-12">
  <div className="row">
    <div className="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
      <div className="row">
        <div className="receipt-header">
          <div className="col-xs-6 col-sm-6 col-md-6">
            <div className="receipt-left"></div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 text-right">
            <div className="receipt-right">
              <h5>Company Name.</h5>
              <h6><p>{data.nom_Cabinet}</p></h6>
              <p>+1 3649-6589 <i className="fa fa-phone"></i></p>
              <p>{data.nom_Cabinet}@gmail.com <i className="fa fa-envelope-o"></i></p>
              <p>USA <i className="fa fa-location-arrow"></i></p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="receipt-header receipt-header-mid">
          <div className="col-xs-8 col-sm-8 col-md-8 text-left">
            <div className="receipt-right">
              <h5>Customer Name </h5>
              <p>{data.nom_patient}</p>
           
              <p><b>Email :</b> {data.nom_patient}@gmail.com</p>
            
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4">
            <div className="receipt-left">
              <h3>INVOICE # 102</h3>
            </div>
          </div>
        </div>
      </div>

      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-md-9">Frais de consultation</td>
              <td className="col-md-3"><i className="fa fa-inr"></i> {data.frais_consultation}</td>
            </tr>
            <tr>
              <td className="col-md-9">Frais supplimentaire</td>
              <td className="col-md-3"><i className="fa fa-inr"></i> {data.frais_supplimentaire}</td>
            </tr>
            <tr>
              <td className="col-md-9">Frais de suivi</td>
              <td className="col-md-3"><i className="fa fa-inr"></i> {data.frais_suivi}</td>
            </tr>
            <tr>
              <td className="col-md-9">Montant Assurance</td>
              <td className="col-md-3"><i className="fa fa-inr"></i> {data.montant_assurance}</td>
            </tr>
            <tr>
              <td className="col-md-9">Montant Mutualité</td>
              <td className="col-md-3"><i className="fa fa-inr"></i> {data.montant_mutualite}</td>
            </tr>
            <tr>
              <td className="text-right">
                <p>
                  <strong>La mutualité: </strong>
                </p>
                <p>
                  <strong>Mode de payement: </strong>
                </p>
               
              </td>
              <td>
                <p>
                  <strong><i className="fa fa-inr"></i> {data.mutualite}</strong>
                </p>
                <p>
                  <strong><i className="fa fa-inr"></i> {data.mode_payement}</strong>
                </p>
              
              
              </td>
            </tr>
            <tr>
              <td className="text-right">
                <h2>
                  <strong>Total: </strong>
                </h2>
              </td>
              <td className="text-left text-danger">
                <h2>
                  <strong><i className="fa fa-inr"></i> {data.montant_total}</strong>
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="receipt-header receipt-header-mid receipt-footer">
          <div className="col-xs-8 col-sm-8 col-md-8 text-left">
            <div className="receipt-right">
              <p><b>Date :</b> {data.date_facture}</p>
              <h5 style={{ color: 'rgb(140, 140, 140)' }}>signature</h5>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</div>




       </div>
       </div>
       
    );
  }

export default FactureDetails;
