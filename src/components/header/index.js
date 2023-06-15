import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

export const RedHeader = () => (
	<header class={style.redHeader}>
	  <a href="/" class={style.logo} >
		<img src="../../assets/adr_logo_nav.png" alt="Preact Logo" height="50" width="232" style="background-color: #F7F0DC;overflow: hidden;" />
	  </a>
	  <nav>
		<Link activeClassName={style.active} href="/" style={{ color: "#F7F0DC"}}>
		  Home
		</Link>
		<Link activeClassName={style.active} href="/services" style={{ color: "#F7F0DC"}}>
		  Services
		</Link>
		<Link activeClassName={style.active} href="/pictures" style={{ color: "#F7F0DC" }}>
		  Gallery
		</Link>
		<Link activeClassName={style.active} href="/billing" style={{ color: "#F7F0DC" }}>
		  Pay Bill
		</Link>
		<Link activeClassName={style.active} href="/faq" style={{ color: "#F7F0DC" }}>
		  FAQ
		</Link>
		<Link activeClassName={style.active} href="/Scheduling" style={{ color: "#F7F0DC" }}>
		  Scheduling
		</Link>
		<Link activeClassName={style.active} href="/contact" style={{ color: "#F7F0DC"}}>
		  Contact
		</Link>
	  </nav>
	</header>
  );
  
  export const WhiteHeader = () => (
	<header class={style.whiteHeader}>
	  <nav style={{ color: "#190A03", marginLeft: "1rem" }}>
	  		<Link activeClassName={style.active} href="tel:4697324011" style={{ color: "#F7F0DC", marginLeft: "1rem" }}>
				<strong>Call:</strong> (469)-732-4011
			</Link>
	  		<Link activeClassName={style.active} href="mailto:service@automaticdoorrescue.com" style={{ color: "#F7F0DC", marginLeft: "1rem" }}>
			  <strong>Email:</strong> service@automaticdoorrescue.com
			</Link>
	  </nav>
	</header>
  );
  

const Header = () => (
  <>
	<WhiteHeader />
    <RedHeader />
  </>
);

export default Header;
