import React, { Component } from 'react';
import NavBar from './GraduationsComponents/NavBar';
import TableSelection from './GraduationsComponents/TableSelection';
import Payments from './GraduationsComponents/Payments';
import Reservation from './GraduationsComponents/Reservation';
import Footer from './GraduationsComponents/Footer';
export default class Graduations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: this.props.user,
			userName: this.props.name,
			tables: this.props.tables,
			seatsReserved: [],
			showPayments: false,
			showTableSelection: false,
      showReservation: true,
      mail: this.props.mail,
			pay1: this.props.pay1,
			pay2: this.props.pay2,
			pay3: this.props.pay3,
			pay4: this.props.pay4
		};
	}

	componentDidMount() {
		const tables = this.props.tables;
		const reserved = tables.filter(seat => seat.account === this.state.currentUser);
		this.setState({ seatsReserved: reserved });
	}

	logoutHandler = () => this.props.logout();
	reservationHandler = () => this.setState({ showCarroussel: false, showPayments: false, showTableSelection: false, showReservation: true });
	carrousselHandler = () => this.setState({ showCarroussel: true, showPayments: false, showTableSelection: false, showReservation: false });
	paymentsHandler = () => this.setState({ showCarroussel: false, showPayments: true, showTableSelection: false, showReservation: false });
	tableSelectionHandler = () => this.setState({ showCarroussel: false, showPayments: false, showTableSelection: true, showReservation: false });

	render() {
		return (
			<div id="Graduaciones">
				<NavBar
					logout={this.logoutHandler}
					
					showPayments={this.paymentsHandler}
					showTableSelection={this.tableSelectionHandler}
					showReservation={this.reservationHandler}
				/>
				{this.state.showPayments && (
					<Payments
						user={this.state.currentUser}
						name={this.state.userName}
						mail={this.state.mail}
						pay1={this.props.pay1}
						pay2={this.props.pay2}
						pay3={this.props.pay3}
						pay4={this.props.pay4}
						firstPayment={this.props.firstPayment}
						secondPayment={this.props.secondPayment}
						thirdPayment={this.props.thirdPayment}
						fourthPayment={this.props.fourthPayment}
					/>
				)}
				{this.state.showTableSelection && (
					<TableSelection
						user={this.state.currentUser}
						tables={this.state.tables}
						reserveSeat={this.props.reserveSeat}
						paySeat={this.props.paySeat}
            cancelSeat={this.props.cancelSeat}
            enabled={this.props.pay1 && this.props.pay2}
            paid={this.props.pay1 && this.props.pay2 && this.props.pay3 && this.props.pay4}
					/>
				)}
				{this.state.showReservation && (
					<Reservation
						user={this.state.currentUser}
						pay1={this.props.pay1}
						pay2={this.props.pay2}
						pay3={this.props.pay3}
            pay4={this.props.pay4}
            name={this.state.userName}
            mail={this.state.mail}
            tables={this.props.tables}
					/>
				)}
				<Footer />
			</div>
		);
	}
}
