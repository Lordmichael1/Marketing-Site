import React from 'react'
import "./Consult.css"
import 'animate.css'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const Consult = () => {
  const navigate = useNavigate()


  const handleSubmit = () => {
    Swal.fire({
      title: "Successful!",
      text: "Message sent",
      icon: "success"
    });
    
    navigate("/")   
    
  }


  return (
    <div className="consult_container">
      <div className="img"></div>
      <div className="formbg">
        <div className="bg">
          <h5>Book Consultation 
          For free</h5>
        </div>
        <div className="left">
           <div className="form">
          <div>
          <h4>First Name</h4>
          <input type="text" required={true} />
          </div>
          <div>
          <h4>Last Name</h4>
          <input type="text" required={true} />
          </div>
          <div>
          <h4>Email</h4>
          <input type="email" name="" id="" required={true} />
          </div>
          <div>
          <h4>Phone Number</h4>
          <input type="tel" name="" id="" required={true} />
          </div>
          <div>
          <h4>What do you need help with?</h4>
          <input type="text" required={true} />
          </div>
        </div>
        <button className='btr' onClick={()=> handleSubmit()}>Submit</button>
        </div>
       
        
      </div>
    </div>
  )
}

export default Consult