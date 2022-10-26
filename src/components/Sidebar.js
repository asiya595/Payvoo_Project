import React from 'react';
import Analytic from './Images/analytics.png'
import Accounts from './Images/accounts.png'
import Payments from './Images/Payment.png'
import Cards from './Images/cards.png'
import Settings from './Images/settings.png'

function Sidebar() {
  return (
    <div className='sidenav'>
      <ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">
        <img src={Accounts} alt="account" className='account'/><button type="button" className="account">Accounts</button>
        </a></li>
  <li class="nav-item">
    <a class="nav-link" href="#">
        {/* <img src={Analytic} alt="analyse" className='analyse'/>Analytics </a> */}
        <img src={Analytic} className="analyse"/><button type="button" className="analyse">Analytics</button>
        </a></li>
  
  <li class="nav-item">
    <a class="nav-link" href="#">
        <img src={Payments} alt="payment" className='payment'/><button type="button" className="payment">Payments</button></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
        <img src={Cards} alt="cards" className='cards'/><button type="button" className="cards">Cards</button></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
        <img src={Settings} alt="setting" className='setting'/><button type="button" className="cards">Settings</button></a>
  </li>
</ul>
    </div>
  );
}

export default Sidebar;
