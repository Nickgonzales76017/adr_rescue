import { h } from 'preact';
import { Router } from 'preact-router';

import Header, { RedHeader, WhiteHeader } from './header/index';
import ContactModal from './contact_modal/index';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Pictures from '../routes/pictures';
import Services from '../routes/services';
import About from '../routes/about';
import Faq from '../routes/faq';
import Billing from '../routes/billing';

const App = () => (
	<div id="app">
		<Header />
		<ContactModal />
		<main>
			<Router>
				<Home path="/" />
				<Pictures path="/pictures" />
				<Billing path="/billing" />
				<Services path="/services" />
				<About path="/about" />
				<Faq path="/faq" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
		</main>
	</div>
);

export default App;
