import React, { Component } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
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
						<Modal.Title id="lbl-check-1">{this.props.option ===  'Datos para realizar un deposito'}</Modal.Title>
					</Modal.Header>
					{this.props.option === '1' ? (
						<Modal.Body>
							
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
