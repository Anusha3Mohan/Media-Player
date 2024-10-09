import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
 
function Landingpage() {
  
  const navigateByUrl=useNavigate()
  return (
    <div>

      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome To <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit blanditiis ipsam itaque reprehenderit voluptate Lorem
           ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, hic? Totam odio, atque vitae aliquid ducimus reprehenderit? 
           Rerum, fugiat praesentium. Nisi et dignissimos quis at voluptatibus rem similique deleniti suscipit. sunt labore eligendi hic nihil,
            quae at ut illum laudantium doloremque non pariatur. Non, ducimus similique.
          </p>
          <Button className="btn " onClick={()=>navigateByUrl('./home')} > Get Started</Button></Col>
        <Col lg={5} className='ms-5 mt-3'>
        <img src="https://i.pinimg.com/564x/36/97/f5/3697f5b64219427a7060a92ba49c0558.jpg" className='rounded' width={460} alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
        <h5>Features</h5>
       <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
       <Card style={{ width: '19rem' }} className='bg-primary'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/70/eb/0b/70eb0b53eb57c91db403928c5d02a19a.gif" width={'270px'} height={'270px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '19rem' }} className='bg-primary'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/be/f4/1a/bef41a7d5a877841bbf7d8f9f0d42f14.gif" width={'270px'} height={'270px'}  />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>  
      </Card.Body>
    </Card>


    <Card style={{ width: '19rem' }} className='bg-primary'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/4a/b4/a5/4ab4a5732ac26d31326c36c4138b3a34.gif" width={'270px'} height={'270px'}  />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
       </div>
      </div>

      <div className="container border rounded p-4 border-light mt-5 mb-5 d-flex justify-content-center align-items-center">
        <div className="col-lg-5">
          <h4 className='text-warning'>Simple,Powerful & Fast</h4>
          <h6 className='mb-5 mt-4'>
            <span className='text-warning'>Play Everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Expedita, voluptatibus? Suscipit nesciunt ex dolores id rerum non molestias voluptatem repudiandae sapiente quidem,
             error molestiae eaque soluta modi, eius fugiat quam?
          </h6>
          <h6 className='mb-5 mt-4'>
            <span className='text-warning'>Categorize Videos</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Expedita, voluptatibus? Suscipit nesciunt ex dolores id rerum non molestias voluptatem repudiandae sapiente quidem,
             error molestiae eaque soluta modi, eius fugiat quam?
          </h6 >
          <h6 className='mb-5 mt-4'>
            <span className='text-warning'>Managing Videos</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Expedita, voluptatibus? Suscipit nesciunt ex dolores id rerum non molestias voluptatem repudiandae sapiente quidem,
             error molestiae eaque soluta modi, eius fugiat quam?
          </h6>
        </div>

        <div className='col-lg-5 ms-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VAdGW7QDJiU?si=K1AYmbNyrmkN4Fri" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
         gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    





    </div>
  )
}

export default Landingpage