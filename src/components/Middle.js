import React from 'react';

function Middle() {
  return (
    <div>
    <div className='start'> <p><i class="bi bi-arrow-left"></i> Add Money</p></div>
   <div className='next'><p>Accounts/Add Money</p></div>
   <div className='other'></div>
    {/* <div className='middle'> */} 
    <div className='main'>
  <div class="card">
  <div class="card-body">
    <h4 class="card-title">How would you like to add money</h4>
    
    <a href="#" class="card-text"><i class="bi bi-plus-circle-fill">Add debit or credit card</i></a>
   <br/>
   <div class="card bg-primary text-white">
   <div class="card-body"><i class="bi bi-bank"></i>  Transfer to PayVoo account</div>
   </div>
  </div>
</div>
    </div>
    </div>
  
  );
}
export default Middle;
