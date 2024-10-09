import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar style={{backgroundColor:'black'}}>
        <Container>
          <Navbar.Brand href="" className='text-light'>
          <Link style={{textDecoration:"none",color:"white"}}>
          <i class="fa-solid fa-photo-film text-light"></i>&nbsp;
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
  )
}

export default Header
