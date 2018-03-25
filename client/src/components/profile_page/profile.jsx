import React from 'react';
import Navbar from '../navbar/Navbar.jsx'
import axios from 'axios';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state ={

		}
	}

	render() {
		return (
				<div>
					<Navbar />
					Profile
				</div>
		)
	}
}

export default Profile;