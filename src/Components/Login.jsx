import React, { Component } from 'react';
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import ModalBlocked from './LoginComponents/ModalBlocked';
import ModalDoesntExist from './LoginComponents/ModalDoesntExist';
import '../CSS/login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: this.props.users,
			account: '',
			password: '',
			loginAttempts: 0,
			loginError: false,
			loginBlocked: false,
			interacted: false,
			doesntExist: false
		};
	}

	componentDidMount() {
		localStorage.getItem('blocked') && this.setState({ loginBlocked: true });
	}

	submitLogin = e => {
		e.preventDefault();
		this.setState({ interacted: false });
		const userIndex = this.state.users.findIndex(user => user.account === this.state.account);
		if (userIndex === -1 || userIndex === undefined) {
			let newAttempts = this.state.loginAttempts;
			newAttempts++;
			this.setState({ loginAttempts: newAttempts, doesntExist: true });
			if (this.state.loginAttempts === 5) {
				localStorage.setItem('blocked', 'true');
				this.setState({ loginAttempts: 0, loginBlocked: true });
			}
		} else {
			const currentLoginData = this.state.users[userIndex];
			if (currentLoginData.pass === this.state.password) {
        localStorage.removeItem('blocked');
        const user = `${this.state.users[userIndex].fName} ${this.state.users[userIndex].sName} ${this.state.users[userIndex].fLast} ${this.state.users[userIndex].sLast}`;
        const mail = this.state.users[userIndex].mail;
        const pay1 = this.state.users[userIndex].pay1;
        const pay2 = this.state.users[userIndex].pay2;
        const pay3 = this.state.users[userIndex].pay3;
        const pay4 = this.state.users[userIndex].pay4;
        this.props.setUser(this.state.account);
        this.props.setName(user, mail, pay1, pay2, pay3, pay4);
				this.props.login();
			} else {
				let newAttempts = this.state.loginAttempts;
				newAttempts++;
				this.setState({ loginAttempts: newAttempts, loginError: true });
				if (this.state.loginAttempts === 5) {
					localStorage.setItem('blocked', 'true');
					this.setState({ loginAttempts: 0, loginBlocked: true });
				}
			}
		}
	};

	handleModalDoesntExist = () => this.setState({ doesntExist: false });
	getValidationStateAccount = () => (/^[0-9]{9,10}$/.test(this.state.account) === true ? 'success' : this.state.account.length === 0 ? null : 'error');
	handleChangeAccount = e => this.setState({ account: e.target.value, interacted: true });
	handleChangePassword = e => this.setState({ password: e.target.value });

	render() {
		return (
			<Grid id="Login">
				<Row style={{ height: '25%' }} />
				<Row>
					<Col xs={10} xsOffset={1} md={4} mdOffset={4} lg={4} lgOffset={4}>
						{this.state.doesntExist && <ModalDoesntExist show={this.state.doesntExist} handleClose={this.handleModalDoesntExist} />}
						{this.state.loginBlocked && <ModalBlocked show={this.state.loginBlocked} />}
						<div className="login-container">
							<form onSubmit={this.submitLogin}>
								<FormGroup controlId="formAccount" >
									<label style={{ textAlign: 'left' }} id="nameL"> Numero de Cuenta &ensp;</label>
									
									<FormControl type="text" id="name" value={this.state.account} placeholder="ingresa tu numero de cuenta" onChange={this.handleChangeAccount} required />
								</FormGroup>
								<FormGroup controlId="formPassword" validationState={this.state.loginError ? 'error' : null}>
									<label style={{ textAlign: 'left' }} id="passL">Contraseña &ensp;</label>
									{this.state.loginError && <ControlLabel> cuenta o contraseña incorrecta </ControlLabel>}
									<FormControl type="password" id="pass" value={this.state.password} placeholder="ingresa tu contraseña" onChange={this.handleChangePassword} required />
								</FormGroup>
								<Button type="submit" id="LoginButton">
									Acceder
								</Button>
							</form>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}
