import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Modal,Form, Row, Col } from 'react-bootstrap';
import { addVideoCategoryAPI, deleteCategoryAPI, getAVideoAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';


function Category(dropVideoResponse) {

  const [categoryName ,setCategoryName]=useState("")
  const [allCategories,setAllCategories]=useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd =async()=>{
    if(categoryName){
      const result= await addVideoCategoryAPI({categoryName,allVideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()

      }else{
        alert(result.message)
      }
    }else{
      alert("please fill missing field")
    }
  }


  useEffect(()=>{
    getCategories()

  },[dropVideoResponse])

  const getCategories= async()=>{
    const {data}= await getVideoCategoryAPI()
    setAllCategories(data)
  }


  const removeCategory= async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }

  const dragOver=(e)=>{
    console.log("video card dragged over the category");
    e.preventDefault()
    
  }

  const videoDropped =async(e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
    console.log("video Id" + videoId,"dropped into the "+ categoryId);
    const {data} = await getAVideoAPI(videoId)
    // console.log(data);


    const selectedCategory = allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    
    const res =await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
    
    
  }

// console.log(allCategories);


const videoDragStarted=(e,videoId,categoryId)=>{
  let dataShare={videoId,categoryId}
  e.dataTransfer.setData("data",JSON.stringify(dataShare))
}

  

 
  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className='btn btn-info' >Add Category</button>
      </div>


      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
          
              <FloatingLabel controlId='floatingName' label="category " className='mb-3'>
              <Form.Control type="email" placeholder="Enter Catagory Name" onChange={(e=>setCategoryName(e.target.value))}/>
              </FloatingLabel>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>



      {

        allCategories?.length>0?allCategories.map(Category=>(

          <div className="border rounded p-4 m-3" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e,Category?.id)}>
          <div className="d-flex justufy-content-between align-items-center">
            <h5> {Category?.categoryName}</h5>
            <button className='btn' onClick={()=>removeCategory(Category?.id)}><i className='fa-solid fa-trash text-light'></i></button>
          </div>
          <Row>
            {
              Category?.allVideos?.length>0?Category?.allVideos.map(card=>(
                <Col sm={12} className='mb-3 p-1' draggable onDragStart={e=>videoDragStarted(e,card.id,Category.id)} >
                  <VideoCard video={card} insideCategory={true}/>
                </Col>
              )):null
            }
          </Row>
        </div>

        )): <p>Nothing To Display</p>
        
        
      }
    </>
  )
}

export default Category