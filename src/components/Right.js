import React from 'react';
import Timer from './Images/timer.png'
import Coins from './Images/coins.png'

function Right() {
  return (
    
    <div className='rightside'>
      
      <div class="card">
      <h4>Account Details</h4>
  <div class="card-body">
  {/* <button onClick="Local.js "type="button" class="btn btn-light">Local</button>
  <button type="button" class="btn btn-light">Swift</button>  <br/> */}
  <div class="container">
  <div class="row">
    <div class="col">
    <button type="button" class="btn bg-transparent btn-lg btn-block">Local</button>
    
    </div>
    <div class="col">
    <button type="button" class="btn bg-transparent btn-lg btn-block">Swift</button>
    </div>
  </div>
  </div>
    <p className='beneficiary'>Beneficiary</p>
    <h5 className='john'>John Doe</h5>
 <p className='beneficiary'>IBAN</p>
 <h5 className='num'>GWDF 6165 6542 6513 6515 9876</h5>
 <p className='beneficiary'>BIC</p>
 <h5 className='pay'>PAYVOO65136</h5>
 {/* <svg height="210" width="500">
  <line x1="10" y1="10" x2="200" y2="10" style="stroke:rgb(255,0,0);stroke-width:2" />
</svg> */}
 <div className='coins'><img src={Coins} alt="coins" />  Intermediary or sender's bank may charge you for international payments</div>
 <div className='timer'><img src={Timer} alt="timer" />  Transfers usually take 1 to 3 working days to appear on your PayVoo account</div>
<div  className='flag'><i class="bi bi-flag-fill"></i>  Only SWIFT transfers are accepted</div>
{/* <div><button className='close' class="w3-button w3-white w3-border w3-border-red w3-round-large">Close</button></div> */}
<button className='close' type="button" class="btn btn-outline-warning">close</button>
   </div>
  </div>
</div>
    
  );
}

export default Right;
