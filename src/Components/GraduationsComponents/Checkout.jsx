import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl, ProgressBar, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import '../../CSS/Checkout.css';

export default class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			percentage: 0
		};
		this.progress = 0;
		this.counter = null;
	}

	startTimer = () => {
		this.counter = setInterval(() => {
			this.progress += 10;
			this.setState({ percentage: this.progress });
		}, 1000);
	};

	handleCardChange = e => this.setState({ card: e.target.value });
	handleMailChange = e => this.setState({ mail: e.target.value });
	handleDateChange = e => this.setState({ date: e.target.value });
	handleCodeChange = e => this.setState({ code: e.target.value });
	handelSubmit = e => {
		e.preventDefault();
		this.startTimer();
		this.setState({ isLoading: true });
		switch (this.props.payment) {
			case 1:
				this.props.firstPayment();
				break;
			case 2:
				this.props.secondPayment();
				break;
			case 3:
				this.props.thirdPayment();
				break;
			case 4:
				this.props.fourthPayment();
				break;
			default:
				console.log(this.props.payment);
				break;
		}
		setTimeout(() => {
			this.setState({ isLoading: false, percentage: 0 });
			this.progress = 0;
			clearInterval(this.counter);
			this.props.hide();
		}, 11000);
	};

	render() {
		return (
			<div>
				<Modal show={this.props.show} onHide={this.props.hide}>
					<Modal.Header closeButton>
						<Modal.Title id="lbl-check-1">{this.props.option === '1' ? 'Ingresar Datos de Cobro' : 'Datos para realizar un deposito'}</Modal.Title>
					</Modal.Header>
					{this.props.option === '1' ? (
						<Modal.Body>
							<form onSubmit={this.handelSubmit}>
								<h4 className="lbl-check">{`Pago: ${this.props.payment}`}</h4>
								<h4 className="lbl-check">{`Cuenta: ${this.props.user}`}</h4>
								<h4 className="lbl-check">{`Alumno: ${this.props.name}`}</h4>
								<h4 className="lbl-check">{`Monto a pagar: $ ${this.props.quantity} MXN`}</h4>
								<h4 className="lbl-check">{`Correo de facturación: ${this.props.mail}`}</h4>
								<div className="icons-container">
									<div className="icon-1">
										<FontAwesomeIcon id="icon1" icon={Brands.faCcAmex} />
									</div>
									<div className="icon-2">
										<FontAwesomeIcon id="icon2" icon={Brands.faCcMastercard} />
									</div>
									<div className="icon-3">
										<FontAwesomeIcon id="icon3" icon={Brands.faCcVisa} />
									</div>
								</div>
								<FormGroup>
									<FormControl type="number" value={this.state.card} placeholder="tarjeta..." onChange={this.handleCardChange} required />
								</FormGroup>
								<div className="code-container">
									<div className="icon-date">
										<FormGroup>
											<FormControl id="date" type="text" value={this.state.date} placeholder="MM/YY" onChange={this.handleDateChange} required />
										</FormGroup>
									</div>
									<div className="icon-code">
										<FormGroup>
											<FormControl id="code" type="number" value={this.state.code} placeholder="CVC" onChange={this.handleCodeChange} required />
										</FormGroup>
									</div>
								</div>
								{!this.state.isLoading ? (
									<Button id="btn-submit" type="submit" bsStyle="danger">
										Pagar
									</Button>
								) : (
									<ProgressBar active bsStyle="info" now={this.state.percentage} />
								)}
							</form>
						</Modal.Body>
					) : (
						<Modal.Body>
							<div className="container-transfer">
								<Table responsive>
									<tbody>
										<tr>
											<td className="trans-title">Beneficiario</td>
											<td className="trans-data">Univerdidad del Valle de Mexico Campus San Rafael</td>
										</tr>
										<tr>
											<td className="trans-title">Banco</td>
											<td className="trans-data">Banamex</td>
										</tr>
										<tr>
											<td className="trans-title">Cuenta</td>
											<td className="trans-data">0443010597</td>
										</tr>
										<tr>
											<td className="trans-title">ABB</td>
											<td className="trans-data">BCMRMXMMPYM</td>
										</tr>
										<tr>
											<td className="trans-title">Concepto</td>
											<td className="trans-data">Graduacion 2014-2018</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Modal.Body>
					)}
					<Modal.Footer>
						{!this.state.isLoading && (
							<Button bsStyle="danger" id="btn-close" onClick={this.props.hide}>
								Cerrar
							</Button>
						)}
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
