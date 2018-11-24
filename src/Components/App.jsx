import React, { Component } from 'react';
import firebase from 'firebase';
import { DB_CONFIG } from '../base';
import Graduations from './Graduations';
import Login from './Login';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.app = firebase.initializeApp(DB_CONFIG);
		this.USERS = this.app
			.database()
			.ref()
			.child('USERS');
		this.TABLES = this.app
			.database()
			.ref()
			.child('TABLES');
		this.state = {
			users: [],
			tables: [],
			currentUser: null,
			isLogged: false,
			username: '',
			userMail: ''
		};
	}

	//CRUDS
	componentDidMount() {
		//USERS ADDED
		this.USERS.on('child_added', snap => {
			const users = this.state.users;
			users.push({
				id: snap.key,
				fName: snap.val().fName,
				sName: snap.val().sName,
				fLast: snap.val().fLast,
				sLast: snap.val().sLast,
				pass: snap.val().pass,
				mail: snap.val().mail,
				account: snap.val().account,
				pay1: snap.val().pay1,
				pay2: snap.val().pay2,
				pay3: snap.val().pay3,
				pay4: snap.val().pay4
			});
			this.setState({ users: users });
		});
		//USERS UPDATED
		this.USERS.on('child_changed', snap => {
			const users = this.state.users;
			let newUser = snap.val();
			newUser.id = snap.key;
			const indexToUpdate = users.findIndex(user => user.id === snap.key);
			users.splice(indexToUpdate, 1, newUser);
			this.setState({ users: users });
		});

		//SEATS ADDED
		this.TABLES.on('child_added', snap => {
			const tables = this.state.tables;
			tables.push({
				id: snap.key,
				seat: snap.val().seat,
				table: snap.val().table,
				free: snap.val().free,
				reserved: snap.val().reserved,
				paid: snap.val().paid,
				account: snap.val().account
			});
			this.setState({ tables: tables });
		});
		//SEATS UPDATED
		this.TABLES.on('child_changed', snap => {
			const tables = this.state.tables;
			let newSeat = snap.val();
			newSeat.id = snap.key;
			const indexToUpdate = tables.findIndex(seat => seat.id === snap.key);
			tables.splice(indexToUpdate, 1, newSeat);
			this.setState({ tables: tables });
		});
	}

	paySeat = key => {
		const tables = this.state.tables;
		const currentSeat = tables.find(seat => seat.id === key);
		const update = {};
		update['/TABLES/' + key] = {
			account: this.state.currentUser,
			seat: currentSeat.seat,
			table: currentSeat.table,
			free: false,
			reserved: false,
			paid: true
		};
		this.app
			.database()
			.ref()
			.update(update);
	};

	reserveSeat = key => {
		const tables = this.state.tables;
		const currentSeat = tables.find(seat => seat.id === key);
		const update = {};
		update['/TABLES/' + key] = {
			account: this.state.currentUser,
			seat: currentSeat.seat,
			table: currentSeat.table,
			free: false,
			reserved: true,
			paid: false
		};
		this.app
			.database()
			.ref()
			.update(update);
	};

	cancelSeat = key => {
		const tables = this.state.tables;
		const currentSeat = tables.find(seat => seat.id === key);
		const update = {};
		update['/TABLES/' + key] = {
			account: '000000000',
			seat: currentSeat.seat,
			table: currentSeat.table,
			free: true,
			reserved: false,
			paid: false
		};
		this.app
			.database()
			.ref()
			.update(update);
	};

	firstPayment = () => {
		const users = this.state.users;
		const currentUser = users.find(user => user.account === this.state.currentUser);
		const update = {};
		update['/USERS/' + currentUser.id] = {
			account: currentUser.account,
			fName: currentUser.fName,
			sName: currentUser.sName,
			fLast: currentUser.fLast,
			sLast: currentUser.sLast,
			pass: currentUser.pass,
			mail: currentUser.mail,
			pay1: true,
			pay2: false,
			pay3: false,
			pay4: false
		};
		this.app
			.database()
			.ref()
			.update(update);
	};

	secondPayment = () => {
		const users = this.state.users;
		const currentUser = users.find(user => user.account === this.state.currentUser);
		const update = {};
		update['/USERS/' + currentUser.id] = {
			account: currentUser.account,
			fName: currentUser.fName,
			sName: currentUser.sName,
			fLast: currentUser.fLast,
			sLast: currentUser.sLast,
			pass: currentUser.pass,
			mail: currentUser.mail,
			pay1: true,
			pay2: true,
			pay3: false,
			pay4: false
		};
		this.app
			.database()
			.ref()
			.update(update);
	};

	thirdPayment = () => {
		const users = this.state.users;
		const currentUser = users.find(user => user.account === this.state.currentUser);
		const update = {};
		update['/USERS/' + currentUser.id] = {
			account: currentUser.account,
			fName: currentUser.fName,
			sName: currentUser.sName,
			fLast: currentUser.fLast,
			sLast: currentUser.sLast,
			pass: currentUser.pass,
			mail: currentUser.mail,
			pay1: true,
			pay2: true,
			pay3: true,
			pay4: false
		};
		this.app
			.database()
			.ref()
			.update(update);
	};

	fourthPayment = () => {
		const users = this.state.users;
		const currentUser = users.find(user => user.account === this.state.currentUser);
		const update = {};
		update['/USERS/' + currentUser.id] = {
			account: currentUser.account,
			fName: currentUser.fName,
			sName: currentUser.sName,
			fLast: currentUser.fLast,
			sLast: currentUser.sLast,
			pass: currentUser.pass,
			mail: currentUser.mail,
			pay1: true,
			pay2: true,
			pay3: true,
			pay4: true
		};
		this.app
			.database()
			.ref()
			.update(update);
	};
	// fourthPayment = () => {
	// 	var sleepTime = new Date().getTime() + 12000;
	// 	while (new Date().getTime() <= sleepTime) {}
	// 	this.fourthPaymentReal();
	// };
	loginHandler = () => this.setState({ isLogged: true });
	logoutHandler = () => this.setState({ isLogged: false });

	currentUserHandler = account => this.setState({ currentUser: account });
	userHandler = (name, mail, p1, p2, p3, p4) => this.setState({ username: name, userMail: mail, pay1: p1, pay2: p2, pay3: p3, pay4: p4 });

	render() {
		const index = this.state.users.findIndex(user => user.account === this.state.currentUser);
		return (
			<div className="App">
				{this.state.isLogged ? (
					<Graduations
						logout={this.logoutHandler}
						tables={this.state.tables}
						reserveSeat={this.reserveSeat}
						cancelSeat={this.cancelSeat}
						paySeat={this.paySeat}
						user={this.state.currentUser}
						name={this.state.username}
						mail={this.state.userMail}
						pay1={this.state.users[index].pay1}
						pay2={this.state.users[index].pay2}
						pay3={this.state.users[index].pay3}
						pay4={this.state.users[index].pay4}
						firstPayment={this.firstPayment}
						secondPayment={this.secondPayment}
						thirdPayment={this.thirdPayment}
						fourthPayment={this.fourthPayment}
					/>
				) : (
					<Login users={this.state.users} login={this.loginHandler} setUser={this.currentUserHandler} setName={this.userHandler} />
				)}
			</div>
		);
	}
}
