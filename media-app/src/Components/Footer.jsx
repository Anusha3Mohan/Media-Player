import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
       <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='pt-5 pb-3'>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className=' mb-md-0'>
              <h5 className='fw-bolder text-start'><span className='text-warning' ><i className="fa-solid fa-video me-2"></i></span>Video Player</h5>
              <h6 className='text-start'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Voluptates accusantium consectetur minima dolorum quibusdam 
                sequi explicabo error dolorem voluptatum possimus facilis?</h6>


              
            </MDBCol>

            <MDBCol lg='2' md='6' className=' mb-md-0'>
              <h5 className='text-start fw-bolder'>Links</h5>

              <ul className='list-unstyled mb-0 text-start'>
                <li>
                  <a href='#!' className='text-white ' style={{textDecoration:"none"}}>
                    Landing Page
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'style={{textDecoration:"none"}} >
                    Home Page
                  </a>
                </li>
               
                <li>
                  <a href='#!' className='text-white' style={{textDecoration:"none"}}>
                    Watch History
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='2' md='6' className='mb-4 mb-md-0 text-start'>
              <h5 className='fw-bolder'>Guides</h5>

              <ul className='list-unstyled mb-0 text-start'>
                <li>
                  <a href='#!' className='text-white' style={{textDecoration:"none"}}>
                    React
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'style={{textDecoration:"none"}}>
                    React Bootstrap
                  </a>
                </li>
               
                <li>
                  <a href='#!' className='text-white' style={{textDecoration:"none"}}>
                    Bootswatch
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='5' md='6' className='mb-4 mb-md-0 text-start '>
              <h5 className='fw-bolder'>Contact Us</h5>

              <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-start'>
              

              <MDBCol md='5' start>
                <MDBInput contrast type='email' placeholder='Enter Your Email Id' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn  color='warning' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>



             
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' >
        © 2020 Copyright:
        <a className='text-white' href='#' style={{textDecoration:'none'}}>
          Media Player
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer