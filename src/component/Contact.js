// import React, { useState } from 'react';
import './contactPage.css';
import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  function handleSubmit() {

    setName('');
    setEmail('');
    setMessage('');
    
  }

  return (
   
    <MDBContainer lg  >
      <div className="container2">
        <MDBRow>

          <MDBCol sm='6'>
            <div style={{ paddingTop: '35px', paddingLeft: '50px', fontSize: '18px'}}>
              <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4' >
              <div className="form-column">
                <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px', fontSize: '35px' }} >Contact Us</h3>


                <MDBInput wrapperClass='mb-4 mx-5 w-75' label='Name' id='formControlLg' type='text' onChange={(e) => setName(e.target.value)} required size="lg" />
                <MDBInput wrapperClass='mb-4 mx-5 w-75' label='Email' id='formControlLg' type='text' onChange={(e) => setEmail(e.target.value)} required size="lg" />
                <MDBInput wrapperClass='mb-4 mx-5 w-75' label='Message' id='formControlLg' type='text' onChange={(e) => setMessage(e.target.value)} required size="lg" />

                <MDBBtn className="mb-4 px-5 mx-5 w-50" color='info' size='lg' onClick={handleSubmit} style={{backgroundColor:'#3cb043'}}>Submit</MDBBtn>
              </div>
            </div>
            </div>
          </MDBCol>
          
          <div className="image-column"> 
          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img src={require('../assest/contact.png')} alt="Login image" className="w-125" 
            style={{alignContent:'flex-end' ,height:'35rem', width:'28rem', maxWidth:'200%'}}/>
          </MDBCol>
          </div>
        </MDBRow>
        </div>
      </MDBContainer>
  );
}

export default Contact;

