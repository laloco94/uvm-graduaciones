import React, { Component } from 'react';
import { Jumbotron, Table } from 'react-bootstrap';
import '../../CSS/Reservation.css';

export default class Reservation extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const status = this.props.pay1 && this.props.pay2 && this.props.pay3 && this.props.pay4;
		const seats = this.props.tables.filter(seat => seat.account === this.props.user);
		return (
			<React.Fragment>
				<Jumbotron id="container-reservation">
					<div className="res-data">
						<h3 className="t-name">{`ALUMNO: ${this.props.user} ${this.props.name}`}</h3>
						<h4 className="t-mail">{`Contacto: ${this.props.mail}`}</h4>
						<h4 className="t-state">{`Estado de pagos: ${status ? 'PAGADO' : 'PENDIENTE'}`}</h4>
						<h4 className="t-seats">{`Asientos Reservados:`}</h4>
					</div>
					<div className="res-table">
						<Table responsive>
							<thead>
								<tr>
									<th>Mesa</th>
									<th>Asiento</th>
								</tr>
							</thead>
							<tbody>
								{seats.map(seat => (
									<tr key={seat.id}>
										<td>{seat.table}</td>
										<td>{seat.seat}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</Jumbotron>
			</React.Fragment>
		);
	}
}
