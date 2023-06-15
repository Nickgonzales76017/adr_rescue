

import { h } from 'preact';
import style from './style.css';
import { Link } from 'preact-router/match';
const Faq = () => {
  return (
    <>
    <div class={style.home}>
      <div class={style.hero_services}>
        <div class={style.background_image}>
          <div class={style.content}>
            <h1><Link activeClassName={style.active} href="/" style={{ color: "#F7F0DC" }}>
              Home
            </Link>/FAQ</h1>
          </div>
        </div>
        <br/>
      </div>
    </div>
    <div class="container faq-section" >
		<h2>Basics Questions</h2>
		<div class="accordion" id="accordionExample">
			<div class="card">
				<div class="card-header" id="headingOne">
					<h5 class="mb-0">
						<i class="fa fa-plus"></i>
						<a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is lorem ipsum?</a>
					</h5>
				</div>

				<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
					<div class="card-body">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus vel felis tempor vulputate eu in libero. Donec mauris quam, congue euismod dui a, faucibus bibendum ex. Nullam non rutrum velit. Fusce ac vehicula ante. Vivamus pharetra luctus nibh sed aliquet. Aenean tristique massa quis odio sodales, hendrerit dictum risus semper.
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header" id="headingTwo">
					<h5 class="mb-0">
						<i class="fa fa-plus"></i>
						<a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What is Bootstrap?</a>
					</h5>
				</div>
				<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
					<div class="card-body">
						Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header" id="headingThree">
					<h5 class="mb-0">
						<i class="fa fa-plus"></i>
						<a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What is Lorem ipsum dolor sit amet?</a>
					</h5>
				</div>
				<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
					<div class="card-body">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lacus ut sem elementum volutpat at eu nisl. Pellentesque tincidunt sapien vel faucibus sagittis. Nullam id ipsum augue. Vivamus et justo in eros gravida suscipit at ac diam. Quisque quis enim nec nulla auctor bibendum. Proin et commodo lorem. Duis eget ligula turpis. Vestibulum maximus efficitur massa quis odio sodales. Donec convallis
					</div>
				</div>
			</div>
		</div>
    
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


export default Faq;