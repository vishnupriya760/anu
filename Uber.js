import React from 'react'
import{Row,Col}from 'react-bootstrap'
import img from'../images/img.jpg'
const Uber = () => {
  return (
    <div>
<Row>
    <Col className='ti'lg={1} md={6}>
    </Col>
   <  Col className='ti'lg={5}md={6}>
     <div className='gd'>
       <h2><b>Request a ride for now or later</b></h2><br></br>
       <p> Up to 50% off your first 5 Uber rides. T&Cs apply.*</p>
        <p>    *Valid within 15 days of signup.</p>
        <form>
                <input placeholder='Enter location'></input> <br></br> <br></br>
                 <input placeholder='Enter Destination'></input> 
               
        </form> <br></br>
        <div className='bn'>
         <button className='y' > See prices</button> 
         <button className='y1' > Schedule for later</button>

</div>
 </div>
    </Col>
    <Col className='ti'lg={5}md={6}>
     <img src={img} className='im'></img>
    
    
    
    </Col>
    <Col className='ti'lg={1}md={6}>
    </Col>
   
   
   
   
   
   
   
   
   
   
   
  










</Row>

    </div>
  )
}

export default Uber
