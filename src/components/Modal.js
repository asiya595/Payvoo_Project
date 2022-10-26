import React from 'react';
// import addmoney from '.Image/adding.png'



function Modal() {
  return (
    <div>
    <dialog open className='modalcheck'>
     
       <img src="adding.png"/>
    <h5>Add 10 or more</h5>
  <p>Before we hook up with an account, you need to add money. You can spend or withdraw this money later.</p>
  <button className='skip' type="button" class="btn btn-outline-warning">Skip</button> 
  <button className='money' type="button" class="btn btn-warning"> Add Money </button>
  
  
</dialog>
</div>
  
  )
}
export default Modal;
