import React from 'react';
import Timer from './Images/timer.png'
import Coins from './Images/coins.png'


function Center() {
    return (
        <div className='Slide7'>
            <div className="container-fluid">
                <div class="row g-3" >

                <div className='col-4 col-md-4 col-lg-4'>
                        <div className='start'> <p><i class="bi bi-arrow-left"></i> Add Money</p></div>
                        <div className='next'><p>Accounts/Add Money</p></div>        
  <div class="card">
    <div class="card-body">How would you like to add money</div>
    <a href="#" class="card-text"><i class="bi bi-plus-circle-fill">Add debit or credit card</i></a>
                                <br />
  </div>


                    {/* {/*
                        <div class="card ">
                            <div class="card-body2"><h4 class="card-title">How would you like to add money</h4>
                                
                                <div class="card bg-primary text-white">
                                
                                    <div class="card-body1"><i class="bi bi-bank"></i>  Transfer to PayVoo account</div>
                                
                                </div>
                            </div>
                        </div>
                        </div> */}
                        {/* <div className='col-8 col-md-8 col-lg-8'>
                            <div class="card">
                                <h4>Account Details</h4>
                                <div class="card-body">
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
                                    <div className='coins'><img src={Coins} alt="coins" />  Intermediary or sender's bank may charge you for international payments</div>
                                    <div className='timer'><img src={Timer} alt="timer" />  Transfers usually take 1 to 3 working days to appear on your PayVoo account</div>
                                    <div className='flag'><i class="bi bi-flag-fill"></i>  Only SWIFT transfers are accepted</div>
                                    <button className='close' type="button" class="btn btn-outline-warning">close</button>

                                </div>
                            </div>
                        </div> */} 
                </div>
            </div>
        </div>
        </div>
    );
}

export default Center;
