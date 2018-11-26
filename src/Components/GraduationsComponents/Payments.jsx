import React, { Component } from 'react';
import { Table, Jumbotron, Label, ControlLabel, FormGroup, Radio, Button } from 'react-bootstrap';
import Checkout from './Checkout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { faMoneyBillAlt, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import '../../CSS/Payments.css';

library.add(faMoneyBillAlt);
library.add(faMoneyCheck);

export default class Payments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPayment: 1,
			paid: false,
			width: window.screen.width,
			option: 0,
			showPayment: false,
			enable: true
		};
	}

	componentDidMount() {
		if (this.props.pay1 === true && this.props.pay2 === true && this.props.pay3 === true && this.props.pay4 === true) {
			this.setState({ paid: true, enable: false });
		}

		if (this.props.pay1 === true) {
			this.setState({ currentPayment: 2 });
		}
		if (this.props.pay2 === true) {
			this.setState({ currentPayment: 3 });
		}
		if (this.props.pay3 === true) {
			this.setState({ currentPayment: 4 });
		}
		if (this.props.pay4 === true) {
			this.setState({ currentPayment: 4 });
		}
	}

	handleCurrentPayment = payment => this.setState({ currentPayment: payment });
	handleRadiosChecked = e => this.setState({ option: e.target.value });
	handleHidePayment = () => this.setState({ showPayment: false });

	submitPayment = e => {
		e.preventDefault();
		if (this.state.option === '1' || this.state.option === '2') {
			this.setState({ showPayment: true });
		}
	};

	currentPayment = () => {
		let payment = 0;
		if (this.props.pay1 === false) {
			payment = 1;
		}
		if (this.props.pay2 === false && this.props.pay1 === true) {
			payment = 2;
		}
		if (this.props.pay3 === false && this.props.pay2 === true) {
			payment = 3;
		}
		if (this.props.pay4 === false && this.props.pay3 === true) {
			payment = 4;
		}
		return payment;
	};

	render() {
		const client = {
			sandbox: 'UVM',
			production: 'ID'
		};
		const payment = this.currentPayment();
		return (
			<Jumbotron id="PaymentsContainer">
				<Label id="label-username" bsStyle="danger">
					{`ESTADO: ${this.props.pay1 === true && this.props.pay2 === true && this.props.pay3 === true && this.props.pay4 === true ? 'Todo esta pagado' : 'Faltan pagos'}`}
				</Label>
				<div className="table-container">
					<Table striped bordered condensed hover>
						<thead>
							<tr>
								<th>Nombre</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{this.props.name}</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div className="table-container">
					<Table striped bordered condensed hover>
						<thead>
							<tr>
								<th>Pago</th>
								<th>Estado</th>
								<th>Cantidad</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Pago 1</td>
								<td>{this.props.pay1 ? 'PAGADO' : 'PENDIENTE'}</td>
								<td>$ 500.00 MXN</td>
							</tr>
							<tr>
								<td>Pago 2</td>
								<td>{this.props.pay2 ? 'PAGADO' : 'PENDIENTE'}</td>
								<td>$ 500.00 MXN</td>
							</tr>
							<tr>
								<td>Pago 3</td>
								<td>{this.props.pay3 ? 'PAGADO' : 'PENDIENTE'}</td>
								<td>$ 500.00 MXN</td>
							</tr>
							<tr>
								<td>Pago 4</td>
								<td>{this.props.pay4 ? 'PAGADO' : 'PENDIENTE'}</td>
								<td>$ 500.00 MXN</td>
							</tr>
							<Label id="label-form" bsStyle="danger">
							PAGO
						</Label>
						<Checkout
							show={this.state.showPayment}
							hide={this.handleHidePayment}
							firstPayment={this.props.firstPayment}
							secondPayment={this.props.secondPayment}
							thirdPayment={this.props.thirdPayment}
              				fourthPayment={this.props.fourthPayment}
              				payment={payment}
							option={this.state.option}
							user={this.props.user}
							name={this.props.name}
							quantity={250}
						/>
						<div className="form-container">
							<form onSubmit={this.submitPayment}>
								<FormGroup>
									<ControlLabel id="lbl-method">Metodo de pago:</ControlLabel>
									<br />
									<div id="radio-container">
										<div id="radio-2">
											<FontAwesomeIcon id="radio-2-icon" icon="money-bill-alt" />
											<br />
											Deposito
											<br />
											<Radio name="radioGroup" value={2} inline onChange={this.handleRadiosChecked} />
										</div>
										
									</div>
								</FormGroup>
								{this.state.option === '3' ? <PaypalExpressBtn client={client} currency={'MXN'} total={this.state.quantity} /> : <Button type="submit">Continuar</Button>}
							</form>
						</div>
						</tbody>
						
					</Table>
				</div>
				{!(this.props.pay1 === true && this.props.pay2 === true && this.props.pay3 === true && this.props.pay4 === true) && (
					<React.Fragment>
						
					</React.Fragment>
				)}
			</Jumbotron>
		);
	}
}
