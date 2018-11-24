import React, { Component } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import '../../CSS/ModalTableSeat.css';

export default class ModalTableSeats extends Component {
	render() {
		return (
			<div>
				<Modal show={this.props.show} onHide={this.props.hide}>
					<Modal.Header closeButton>
						<Modal.Title>Reservar Asientos</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Mesa: {this.props.currentTable}</h4>
						<h4>Asientos:</h4>
						<Table responsive>
							<thead>
								<tr>
									<th>Asiento</th>
									<th>Accion</th>
									<th>Disponible</th>
									<th>Cuenta:</th>
								</tr>
							</thead>
							<tbody>
								{this.props.tables.map(
									seat =>
										seat.table === this.props.currentTable.toString() && (
											<tr key={seat.id} className={seat.free ? 'seat-free' : `${seat.reserved ? 'seat-reserved' : 'seat-paid'}`}>
												<td>{seat.seat}</td>
												<td>
													{' '}
													<button
														className={`select-button ${!seat.free ? 'cancel-button' : ''}`}
														disabled={seat.account !== this.props.user && seat.account !== '000000000' ? true : false}
														onClick={seat.free ? () => this.props.reserveSeat(seat.id) : () => this.props.cancelSeat(seat.id)}>
														{seat.free ? 'RESERVAR' : 'CANCELAR'}
													</button>
												</td>
												<td>{seat.free ? 'LIBRE' : `${seat.reserved ? 'RESERVADO' : 'PAGADO'}`}</td>
												<td>{seat.account === '000000000' ? '-' : seat.account}</td>
											</tr>
										)
								)}
							</tbody>
						</Table>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.props.addSeatsReserved}>Guardar</Button>
						<Button onClick={this.props.hide}>Cerrar</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
