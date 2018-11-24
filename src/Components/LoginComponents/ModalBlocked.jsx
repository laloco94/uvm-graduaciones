import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class ModalBlocked extends Component {
  constructor(props) {
    super(props);
    this.state = { time: {}, seconds: 70 };
    this.timer = 0;
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startTimer();
  }

  startTimer = () => {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds === 0) { 
      clearInterval(this.timer);
      localStorage.removeItem("blocked");
      window.location.reload();
    }
  }

  render() {
    return (
      <Modal show={this.props.show} >
      <Modal.Header>
        <Modal.Title>Acceso Bloqueado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Su acceso ha sido temporalmente bloqueado</h4>
        <p>Debido a un numero de intentos de acceso maximo alcanzados el acceso a su cuenta
           ha sido denegado por motivos de seguridad. Por favor intente de nuevo en cuanto
           el tiempo de espera haya terminado.</p>
        <h4> { this.state.time.m < 10 ? "0" + this.state.time.m : this.state.time.m } : { this.state.time.s < 10 ? "0" + this.state.time.s : this.state.time.s } </h4> 
      </Modal.Body>
    </Modal>
    )
  }
}
