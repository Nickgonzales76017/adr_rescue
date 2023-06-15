

import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router/match';
const Services = () => {
  return (
    <div class={style.home}>
      <div class={style.hero_services}>
        <div class={style.background_image}>
          <div class={style.content}>
            <h1><Link activeClassName={style.active} href="/" style={{ color: "#F7F0DC"}}>
		  Home
		</Link>/Services</h1>
          </div>
        </div>
        <strong style={{color:'white'}}>This is some text.</strong>
      </div>
      <div style=" color: #003049; font-weight: bold"><p>WE SERVICE THE FOLLOWING DOOR TYPES AS WELL AS REPAIR OR REPLACE DOOR HARDWARE</p></div>
      <section class={style.resources}>
        <div class={style.resourceContainer}>
          <Resource
            title="Automatic Sliding Doors"
            description=""
            link="https://preactjs.com/tutorial/"
            backgroundImage="../../assets/manual_door.jpg"
          />
        </div>
        <div class={style.resourceContainer}>
          <Resource
            title="Manual/Swing Doors"
            description=""
            link="https://preactjs.com/guide/v10/differences-to-react"
            backgroundImage="../../assets/automatic_sliding_door.jpg"
          />
        </div>
        <div class={style.resourceContainer} >
          <Resource
            title="Telescopic/Bi-Fold Doors"
            description=""
            link="https://github.com/preactjs/preact-cli#preact-cli--"
            backgroundImage="../../assets/bifold.jpg"
          />
        </div>
      </section>
      <div style="border-top: 1vw solid #fdf0d5; color: #003049; font-weight: bold"></div>
      <h3 class="text-center" style="color:#003049"><u>Our Applications Include</u></h3>
      <hr />
      <div style="display:flex; width:100vw; height:100vh;color:#003049">

        <div style="flex:1; margin:0 0 0 4vw">

          <ul class="list-group">
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Commercial Office Buildings</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Grocery Stores</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Property Management Buildings</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Hotels/Motels</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Financial Institutions</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Educational Institutions</b></li>
          </ul>
        </div>
        <div style="flex:1;">
          <ul class="list-group">
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Retail Stores/Strip Malls</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Nursing Homes/Assisted Living</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Government Facilities</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Car Dealerships</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Fast Food/Fine Dining Restaurants</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>And More</b></li>
          </ul>
        </div>

        <div style="flex:1;">
          <div style="display:grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr);">
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
              <i class="fa fa-hammer fa-3x"></i>
              <span style="margin-top:10px;color:#c1121f"><b>Text 1</b></span>
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
              <i class="fa fa-building fa-3x"></i>
              <span style="margin-top:10px;"><b>Text 2</b></span>
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
              <i class="fa fa-tools fa-3x"></i>
              <span style="margin-top:10px;"><b>Text 3</b></span>
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
              <i class="fa fa-hammer fa-3x"></i>
              <span style="margin-top:10px;color:#c1121f"><b>Text 4</b></span>
            </div>
          </div>
        </div>

        <div style="flex:1;">
          <ul class="list-group">
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Retail Stores/Strip Malls</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Nursing Homes/Assisted Living</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Government Facilities</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Car Dealerships</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Fast Food/Fine Dining Restaurants</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>And More</b></li>
          </ul>
        </div>

        <div style="flex:1;">
          <ul class="list-group">
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Retail Stores/Strip Malls</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Nursing Homes/Assisted Living</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Government Facilities</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Car Dealerships</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>Fast Food/Fine Dining Restaurants</b></li>
            <li class="list-group-item" style={{ backgroundColor: '#F7F0DC', width: '15vw' }}><b>And More</b></li>
          </ul>
        </div>

      </div>



    </div>

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


export default Services;