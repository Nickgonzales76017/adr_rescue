

import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router/match';
const Billing = () => {
  return (
    <>
    <div class={style.home}>

        <h1 class="text-center">Billing Information</h1>
        <hr />
        <form action="/charge" method="post" id="payment-form">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="card">
                        <div class="card-header">
                            <h4>Billing Address</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="name">Name on Card</label>
                                <input type="text" class="form-control" id="name" name="name" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" class="form-control" id="email" name="email" required />
                            </div>
                            <div class="form-group">
                                <label for="address">Address Line 1</label>
                                <input type="text" class="form-control" id="address" name="address" required />
                            </div>
                            <div class="form-group">
                                <label for="city">City</label>
                                <input type="text" class="form-control" id="city" name="city" required />
                            </div>
                            <div class="form-group">
                                <label for="state">State / Province / Region</label>
                                <input type="text" class="form-control" id="state" name="state" required />
                            </div>
                            <div class="form-group">
                                <label for="zip">Postal Code / ZIP</label>
                                <input type="text" class="form-control" id="zip" name="zip" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mx-auto">
                    <div class="card">
                        <div class="card-header">
                            <h4>Payment Method</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="card-number">Card Number</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" class="cc-image" /></span>
                                    </div>
                                    <input type="text" class="form-control" id="card-number" name="card-number" required />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="expiry-date">Expiry Date</label>
                                <input type="text" class="form-control" id="expiry-date" name="expiry-date" placeholder="MM / YY" required />
                            </div>
                            <div class="form-group">
                                <label for="cvv">CVV Code</label>
                                <input type="text" class="form-control" id="cvv" name="cvv" placeholder="123" required />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <button type="submit" class="btn btn-primary btn-block">Make Payment</button>
        </form>
    </div>
  
  </>
  );
};

const Resource = props => {
  return (
    <a href={props.link} class={style.resource} style={{ backgroundImage: `url(${props.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '33.33vw', height: '18.33vw' }}>
      <h2 style={{ margin: '5vw 2vw 0 2vw', border: '2px black solid', backgroundColor: '#F7F0DC' }}>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};


export default Billing;