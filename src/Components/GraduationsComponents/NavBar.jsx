import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import '../../CSS/NavBar.css';

export default class NavBar extends Component {


	handleSelect = key => {
		switch (key) {
			case 1:
        this.props.showPayments();
      break;
			case 2:
        this.props.showTableSelection();
        break;
			case 3:
        this.props.showReservation();
        break;
			case 4:
        this.props.logout();
        break;
			default:
				console.log(key);
      break;
		}
	}

	render() {
		return (
			<Tabs defaultActiveKey={3} className="nav-bar-general" id="uncontrolled-tab-example" onSelect={this.handleSelect}>
				<Tab eventKey={1} title="Pagos"   />
				<Tab eventKey={2} title="Seleccion de asientos"  />
				<Tab eventKey={3} title="Reservacion" />
				<Tab eventKey={4} title="Cerrar sesion" />
			</Tabs>
		);
	}
}
