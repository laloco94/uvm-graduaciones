import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button, Label } from 'react-bootstrap';
import ModalTableSeats from './ModalTableSeats';
import '../../CSS/TableSelection.css';
export default class TableSelection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSeatsModal: false,
			currentTable: 0,
			seatsReserved: this.props.seatsReserved,
			tables: this.props.tables,
			user: this.props.user,
			m1Free: true,
			m2Free: true,
			m3Free: true,
			m4Free: true,
			m5Free: true,
			m6Free: true,
			m7Free: true,
			m8Free: true,
			m9Free: true,
			m10Free: true,
			m11Free: true,
			m12Free: true,
			m13Free: true,
			m14Free: true,
			m15Free: true,
			m16Free: true,
			m17Free: true,
			m18Free: true,
			m19Free: true,
			m20Free: true
		};
	}

	seatsReservedHandler = seats => this.setState({ seatsReserved: seats });

	componentDidMount() {
		let t1F = true;
		let t2F = true;
		let t3F = true;
		let t4F = true;
		let t5F = true;
		let t6F = true;
		let t7F = true;
		let t8F = true;
		let t9F = true;
		let t10F = true;
		let t11F = true;
		let t12F = true;
		let t13F = true;
		let t14F = true;
		let t15F = true;
		let t16F = true;
		let t17F = true;
		let t18F = true;
		let t19F = true;
		let t20F = true;
		const table1 = this.props.tables.filter(table => table.table === '1');
		const table2 = this.props.tables.filter(table => table.table === '2');
		const table3 = this.props.tables.filter(table => table.table === '3');
		const table4 = this.props.tables.filter(table => table.table === '4');
		const table5 = this.props.tables.filter(table => table.table === '5');
		const table6 = this.props.tables.filter(table => table.table === '6');
		const table7 = this.props.tables.filter(table => table.table === '7');
		const table8 = this.props.tables.filter(table => table.table === '8');
		const table9 = this.props.tables.filter(table => table.table === '9');
		const table10 = this.props.tables.filter(table => table.table === '10');
		const table11 = this.props.tables.filter(table => table.table === '11');
		const table12 = this.props.tables.filter(table => table.table === '12');
		const table13 = this.props.tables.filter(table => table.table === '13');
		const table14 = this.props.tables.filter(table => table.table === '14');
		const table15 = this.props.tables.filter(table => table.table === '15');
		const table16 = this.props.tables.filter(table => table.table === '16');
		const table17 = this.props.tables.filter(table => table.table === '17');
		const table18 = this.props.tables.filter(table => table.table === '18');
		const table19 = this.props.tables.filter(table => table.table === '19');
		const table20 = this.props.tables.filter(table => table.table === '20');

		const table1Taken = table1.filter(table => table.account !== '000000000');
		const table2Taken = table2.filter(table => table.account !== '000000000');
		const table3Taken = table3.filter(table => table.account !== '000000000');
		const table4Taken = table4.filter(table => table.account !== '000000000');
		const table5Taken = table5.filter(table => table.account !== '000000000');
		const table6Taken = table6.filter(table => table.account !== '000000000');
		const table7Taken = table7.filter(table => table.account !== '000000000');
		const table8Taken = table8.filter(table => table.account !== '000000000');
		const table9Taken = table9.filter(table => table.account !== '000000000');
		const table10Taken = table10.filter(table => table.account !== '000000000');
		const table11Taken = table11.filter(table => table.account !== '000000000');
		const table12Taken = table12.filter(table => table.account !== '000000000');
		const table13Taken = table13.filter(table => table.account !== '000000000');
		const table14Taken = table14.filter(table => table.account !== '000000000');
		const table15Taken = table15.filter(table => table.account !== '000000000');
		const table16Taken = table16.filter(table => table.account !== '000000000');
		const table17Taken = table17.filter(table => table.account !== '000000000');
		const table18Taken = table18.filter(table => table.account !== '000000000');
		const table19Taken = table19.filter(table => table.account !== '000000000');
		const table20Taken = table20.filter(table => table.account !== '000000000');

		table1Taken.length === table1.length ? (t1F = false) : (t1F = true);
		table2Taken.length === table2.length ? (t2F = false) : (t2F = true);
		table3Taken.length === table3.length ? (t3F = false) : (t3F = true);
		table4Taken.length === table4.length ? (t4F = false) : (t4F = true);
		table5Taken.length === table5.length ? (t5F = false) : (t5F = true);
		table6Taken.length === table6.length ? (t6F = false) : (t6F = true);
		table7Taken.length === table7.length ? (t7F = false) : (t7F = true);
		table8Taken.length === table8.length ? (t8F = false) : (t8F = true);
		table9Taken.length === table9.length ? (t9F = false) : (t9F = true);
		table10Taken.length === table10.length ? (t10F = false) : (t10F = true);
		table11Taken.length === table11.length ? (t11F = false) : (t11F = true);
		table12Taken.length === table12.length ? (t12F = false) : (t12F = true);
		table13Taken.length === table13.length ? (t13F = false) : (t13F = true);
		table14Taken.length === table14.length ? (t14F = false) : (t14F = true);
		table15Taken.length === table15.length ? (t15F = false) : (t15F = true);
		table16Taken.length === table16.length ? (t16F = false) : (t16F = true);
		table17Taken.length === table17.length ? (t17F = false) : (t17F = true);
		table18Taken.length === table18.length ? (t18F = false) : (t18F = true);
		table19Taken.length === table19.length ? (t19F = false) : (t19F = true);
		table20Taken.length === table20.length ? (t20F = false) : (t20F = true);

		this.setState({
			m1Free: t1F,
			m2Free: t2F,
			m3Free: t3F,
			m4Free: t4F,
			m5Free: t5F,
			m6Free: t6F,
			m7Free: t7F,
			m8Free: t8F,
			m9Free: t9F,
			m10Free: t10F,
			m11Free: t11F,
			m12Free: t12F,
			m13Free: t13F,
			m14Free: t14F,
			m15Free: t15F,
			m16Free: t16F,
			m17Free: t17F,
			m18Free: t18F,
			m19Free: t19F,
			m20Free: t20F
		});
	}

	callModal1 = () => this.setState({ showSeatsModal: true, currentTable: 1 });
	callModal2 = () => this.setState({ showSeatsModal: true, currentTable: 2 });
	callModal3 = () => this.setState({ showSeatsModal: true, currentTable: 3 });
	callModal4 = () => this.setState({ showSeatsModal: true, currentTable: 4 });
	callModal5 = () => this.setState({ showSeatsModal: true, currentTable: 5 });
	callModal6 = () => this.setState({ showSeatsModal: true, currentTable: 6 });
	callModal7 = () => this.setState({ showSeatsModal: true, currentTable: 7 });
	callModal8 = () => this.setState({ showSeatsModal: true, currentTable: 8 });
	callModal9 = () => this.setState({ showSeatsModal: true, currentTable: 9 });
	callModal10 = () => this.setState({ showSeatsModal: true, currentTable: 10 });
	callModal11 = () => this.setState({ showSeatsModal: true, currentTable: 11 });
	callModal12 = () => this.setState({ showSeatsModal: true, currentTable: 12 });
	callModal13 = () => this.setState({ showSeatsModal: true, currentTable: 13 });
	callModal14 = () => this.setState({ showSeatsModal: true, currentTable: 14 });
	callModal15 = () => this.setState({ showSeatsModal: true, currentTable: 15 });
	callModal16 = () => this.setState({ showSeatsModal: true, currentTable: 16 });
	callModal17 = () => this.setState({ showSeatsModal: true, currentTable: 17 });
	callModal18 = () => this.setState({ showSeatsModal: true, currentTable: 18 });
	callModal19 = () => this.setState({ showSeatsModal: true, currentTable: 19 });
	callModal20 = () => this.setState({ showSeatsModal: true, currentTable: 20 });

	closeModal = () => this.setState({ showSeatsModal: false });

	render() {
		return (
			<Jumbotron id="TableSelectionContainer">
				{this.props.paid ? (
					<ModalTableSeats
						show={this.state.showSeatsModal}
						hide={this.closeModal}
						user={this.state.user}
						currentTable={this.state.currentTable}
						tables={this.state.tables}
						reserveSeat={this.props.paySeat}
						cancelSeat={this.props.cancelSeat}
						addSeatsReserved={this.props.addSeatsReserved}
					/>
				) : (
					<ModalTableSeats
						show={this.state.showSeatsModal}
						hide={this.closeModal}
						user={this.state.user}
						currentTable={this.state.currentTable}
						tables={this.state.tables}
						reserveSeat={this.props.reserveSeat}
						cancelSeat={this.props.cancelSeat}
						addSeatsReserved={this.props.addSeatsReserved}
					/>
				)}

				{!this.props.enabled && (
					<Label id="lbl-title" bsStyle="danger">
						AUN NO HAS PAGADO EL 50% DE LA RESERVACION
					</Label>
				)}
				{!this.props.enabled ? (
					<Grid>
						
						<Row id="row1">
							<Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
								<Button disabled onClick={this.callModal1} className={`tableButton ${this.state.m1Free ? 'table-free' : 'table-full'}`}>
									1
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal2} className={`tableButton ${this.state.m2Free ? 'table-free' : 'table-full'}`}>
									2
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal3} className={`tableButton ${this.state.m3Free ? 'table-free' : 'table-full'}`}>
									3
								</Button>
							</Col>
							
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal4} className={`tableButton ${this.state.m4Free ? 'table-free' : 'table-full'}`}>
									4
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal5} className={`tableButton ${this.state.m5Free ? 'table-free' : 'table-full'}`}>
									5
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal6} className={`tableButton ${this.state.m6Free ? 'table-free' : 'table-full'}`}>
									6
								</Button>
							</Col>
						</Row>

						<Row id="row2">
							<Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
								<Button disabled onClick={this.callModal7} className={`tableButton ${this.state.m7Free ? 'table-free' : 'table-full'}`}>
									7
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal8} className={`tableButton ${this.state.m8Free ? 'table-free' : 'table-full'}`}>
									8
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal9} className={`tableButton ${this.state.m9Free ? 'table-free' : 'table-full'}`}>
									9
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal10} className={`tableButton2 ${this.state.m10Free ? 'table-free' : 'table-full'}`}>
									10
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal11} className={`tableButton2 ${this.state.m11Free ? 'table-free' : 'table-full'}`}>
									11
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal12} className={`tableButton2 ${this.state.m12Free ? 'table-free' : 'table-full'}`}>
									12
								</Button>
							</Col>
						</Row>
						<Row id="row3">
							<Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
								<Button disabled onClick={this.callModal13} className={`tableButton2 ${this.state.m13Free ? 'table-free' : 'table-full'}`}>
									13
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal14} className={`tableButton2 ${this.state.m14Free ? 'table-free' : 'table-full'}`}>
									14
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal15} className={`tableButton2 ${this.state.m15Free ? 'table-free' : 'table-full'}`}>
									15
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal16} className={`tableButton2 ${this.state.m16Free ? 'table-free' : 'table-full'}`}>
									16
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal17} className={`tableButton2 ${this.state.m17Free ? 'table-free' : 'table-full'}`}>
									17
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal18} className={`tableButton2 ${this.state.m18Free ? 'table-free' : 'table-full'}`}>
									18
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal19} className={`tableButton2 ${this.state.m19Free ? 'table-free' : 'table-full'}`}>
									19
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button disabled onClick={this.callModal20} className={`tableButton2 ${this.state.m20Free ? 'table-free' : 'table-full'}`}>
									20
								</Button>
							</Col>
						</Row>
					</Grid>
				) : (
					<Grid>
						<Row id="row1">
							<Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
								<Button onClick={this.callModal1} className={`tableButton ${this.state.m1Free ? 'table-free' : 'table-full'}`}>
									1
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal2} className={`tableButton ${this.state.m2Free ? 'table-free' : 'table-full'}`}>
									2
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal3} className={`tableButton ${this.state.m3Free ? 'table-free' : 'table-full'}`}>
									3
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal4} className={`tableButton ${this.state.m4Free ? 'table-free' : 'table-full'}`}>
									4
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal5} className={`tableButton ${this.state.m5Free ? 'table-free' : 'table-full'}`}>
									5
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal6} className={`tableButton ${this.state.m6Free ? 'table-free' : 'table-full'}`}>
									6
								</Button>
							</Col>
						</Row>

						<Row id="row2">
							<Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
								<Button onClick={this.callModal7} className={`tableButton ${this.state.m7Free ? 'table-free' : 'table-full'}`}>
									7
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal8} className={`tableButton ${this.state.m8Free ? 'table-free' : 'table-full'}`}>
									8
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal9} className={`tableButton ${this.state.m9Free ? 'table-free' : 'table-full'}`}>
									9
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal10} className={`tableButton2 ${this.state.m10Free ? 'table-free' : 'table-full'}`}>
									10
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal11} className={`tableButton2 ${this.state.m11Free ? 'table-free' : 'table-full'}`}>
									11
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal12} className={`tableButton2 ${this.state.m12Free ? 'table-free' : 'table-full'}`}>
									12
								</Button>
							</Col>
						</Row>

						<Row id="row3">
							<Col xs={1} xsOffset={0} sm={1} smOffset={2} md={1} mdOffset={2} lg={1} lgOffset={2}>
								<Button onClick={this.callModal13} className={`tableButton2 ${this.state.m13Free ? 'table-free' : 'table-full'}`}>
									13
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal14} className={`tableButton2 ${this.state.m14Free ? 'table-free' : 'table-full'}`}>
									14
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal15} className={`tableButton2 ${this.state.m15Free ? 'table-free' : 'table-full'}`}>
									15
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal16} className={`tableButton2 ${this.state.m16Free ? 'table-free' : 'table-full'}`}>
									16
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal17} className={`tableButton2 ${this.state.m17Free ? 'table-free' : 'table-full'}`}>
									17
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal18} className={`tableButton2 ${this.state.m18Free ? 'table-free' : 'table-full'}`}>
									18
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal19} className={`tableButton2 ${this.state.m19Free ? 'table-free' : 'table-full'}`}>
									19
								</Button>
							</Col>
							<Col xs={1} sm={1} md={1} lg={1}>
								<Button onClick={this.callModal20} className={`tableButton2 ${this.state.m20Free ? 'table-free' : 'table-full'}`}>
									20
								</Button>
							</Col>
						</Row>
					</Grid>
				)}
			</Jumbotron>
		);
	}
}
