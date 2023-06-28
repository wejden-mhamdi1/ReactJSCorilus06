import React, { useState } from 'react';
import axios from 'axios';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`http://localhost:8090/api/v1/auth/authenticate`, { email, password });
      const { token } = response.data;

      // Stocker le token dans le stockage local (localStorage)
      localStorage.setItem('token', token);

      // Effectuer une requête pour récupérer le rôle de l'utilisateur
      const roleResponse = await axios.get(`http://localhost:8090/api/v1/auth/user-role`, {
        headers: { Authorization: `${token}` }
      });
      const role = roleResponse.data;
      
      

      

      // Redirection en fonction du rôle
      if (role === 'USER') {
        window.location.href = '/home';
      } else if (role === 'ADMIN') {
        window.location.href = '/pie';
      }
    } catch (error) {
      setError('Échec de la connexion. Veuillez vérifier vos identifiants.');
    }
  };

  

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img src="./source/images/Capture.png" alt="easylo logo" style={{ width: '185px' }} />
                <h4 className="mt-1 mb-5 pb-1">Log in with your account to continue </h4>
              </div>
              <p>Email address</p>
              <MDBInput wrapperClass='mb-4'  id='form1' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <p>Password</p>
              <MDBInput wrapperClass='mb-4'  id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="text-center pt-1 mb-5 pb-1" onClick={handleLogin}>
                <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign IN</MDBBtn>
                <a className="text-muted" href="#!">Forgot password?</a>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn outline className='mx-2' color='danger'>
                  send message to Admin
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
          <MDBCol className="mb-4">
            <div className="d-flex align-items-center justify-content-center gradient-custom-4 h-100 mb-4 mt-n3">
              <img src="../assets/login2.png.png" alt="Image" style={{ marginTop: '-20px' }}/>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
  
  
}

export default Login;
