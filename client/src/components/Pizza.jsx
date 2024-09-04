import React,{useState} from 'react';
import {Button,Card,Row,Col,Modal} from 'react-bootstrap';
import { BiRupee } from "react-icons/bi";

const Pizza=({pizza})=>{
  const [varient,setVarient]=useState('small');
  const [quantity,setQuantity]=useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>
    <Card style={{ width: '18rem' , marginTop:'10px'}}>
      <Card.Img variant="top" src={pizza.image} style={{height:'200px',cursor:'pointer'}}
      onClick={handleShow}
      />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr/>
        <Card.Text>
         <Row>
           <Col md={6}>
            <h6>Varients</h6>
            <select
             value={varient}
             onChange={(e)=>setVarient(e.target.value)}
            >
                {pizza.varients.map(varient=>(
                    <option value={varient} onChange={(e)=>setVarient(e.target.value)}>{varient}</option>
                ))}
                
            </select>
           </Col>
           <Col md={6}>
            <h6>Quantity</h6>
            <select
            value={quantity}
            onChange={(e)=> setQuantity(e.target.value)}
            >
               {[...Array(10).keys()].map((v,i)=>(
               <option value={i+1}onChange={(e)=>setQuantity(e.target.value)}>{i+1}</option>
       ))}
                
            </select>
           </Col>
         </Row>
        </Card.Text>
          <Row>
               <Col md={6}>Price:{pizza.prices[0][varient]*quantity}<BiRupee/></Col> 
               <Col md={6}>
                <Button style={{backgroundColor:'black'}}>Add to cart</Button>
               </Col>
            </Row>  
      </Card.Body>
    </Card> 

     {/*modal*/}
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Card.Img variant="top" src={pizza.image} 
          style={{height:'250px'}}
             />
          </div>
        </Modal.Body>
          <div>
            <h5 style={{marginLeft:'10px'}}>Description: </h5>
            <h6 style={{marginLeft:'10px',marginBottom:'15px'}}>{pizza.description}</h6>
          </div>
      </Modal>
        </>
    )
}

export default  Pizza;
