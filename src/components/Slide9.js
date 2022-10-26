import React from 'react';
import mastercard from './Images/mastercard.png'

function Slide9() {
  return (
   
    <div>
      <div className='Slide9'>
      <a class="navbar-brand"><i class="bi bi-arrow-left"></i>Add Money</a>
      <p>Accounts/Add Money</p>
      <div class="row">
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4">
          <div class="card 1">
            <div class="card-body">
              <h5 class="card-title">How would you like to add money?</h5>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button"><i class="bi bi-plus-circle-fill"></i>Add debit or credit card</button>
                <button class="btn btn-light" type="button"><i class="bi bi-bank"></i>Transfer to your PayVoo account</button>
                <div class="card add bank">
                  <div class="card-body1">
                    <div className='cardnumber'>Card number</div>
                    <div className='info'><i class="bi bi-info-circle"></i></div>
                    <div className='num'>**** **** **** 6547</div>
                    <div className='bank'>Expresso Bank Ltd</div>
                    <div className='master'><img src={mastercard} /></div>
                  </div>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4">
                <div class="card add bank2">
                  <div class="card-body2">
                    <div className='cardnumber'>Card number</div>
                    <div className='info'><i class="bi bi-info-circle"></i></div>
                    <div className='num'>**** **** **** 6942</div>
                    <div className='bank'>Trailer Bank Ltd</div>
                    <div className='master'><img src={mastercard} /></div>
                  </div>
                </div>
                </div>
                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-4">
                <div class="card add bank3">
                  <div class="card-body3">
                    <div className='cardnumber'>Card number</div>
                    <div className='info'><i class="bi bi-info-circle"></i></div>
                    <div className='num'>**** **** **** 9872</div>
                    <div className='bank'>Yugestasto bank</div>
                    <div className='master'><img src={mastercard} /></div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Slide9;
