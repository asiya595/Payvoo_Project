import React from 'react';

function Local() {
  return (
    <div>
      <div className='rightside'>
      
      <div class="card">
      <h4>Account Details</h4>
  <div class="card-body">
  <button type="button" class="btn btn-light">Local</button>
  <button type="button" class="btn btn-light">Swift</button>  <br/>
    <p className='beneficiary'>Beneficiary</p>
    <h5 className='john'>John Doe</h5>
 <p className='beneficiary'>Account</p>
 <h5 className='num'>25451843254</h5>
 <p className='beneficiary'>Sort Code</p>
 <h5 className='pay'>05-254518-578458</h5>
 {/* <svg height="210" width="500">
  <line x1="10" y1="10" x2="200" y2="10" style="stroke:rgb(255,0,0);stroke-width:2" />
</svg> */}
 <div className='coins'><img src={Coins} alt="coins" /> Use this personal current account to get salary and to pay bills</div>
 <div className='timer'><img src={Timer} alt="timer" /> Transfers usually take a few hours to appear on your PayVoo account</div>
<div  className='flag'><i class="bi bi-flag-fill"></i>  Only local transfers are accepted. For international transfers, Please use the SWIFT details found above</div>
{/* <div><button className='close' class="w3-button w3-white w3-border w3-border-red w3-round-large">Close</button></div> */}
<button className='close' type="button" class="btn btn-outline-warning">close</button>
   </div>
  </div>
</div>
    </div>
  );
}

export default Local;
