import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
export default class ModalDoesntExist extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: this.props.show
    }
  }
	render() {
		return (
			<div>
				<Modal show={this.state.show} onHide={this.props.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Error</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>Cuenta invalida</h4>
						<p>La cuenta no existe.</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.props.handleClose}>Cerrar</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}
