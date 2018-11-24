import React, { Component } from 'react';
import '../../CSS/Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer class="site-footer">
				<div class="container">
					<div class="row">
						<div class="col-sm-12 col-md-6">
							<h6>GRADUACION Universidad del Valle de Mexico</h6>
							<p class="text-justify">
								Felicidades!
								Todo esfuerzo, tiene su recompesa y aumnque el camino no fue facil, lo lograste. <br/>
								Eres un campeón de la vida.
							</p>
						</div>
						<div class="col-xs-6 col-md-3">
							<h6>Categories</h6>
							<ul class="footer-links">
								<li>
									<a href="https://www.facebook.com/UVMcampusSanRafael/">facebook</a>
								</li>
								<li>
									<a href="https://www.instagram.com/explore/locations/213383639/uvm-campus-san-rafael/">instagram</a>
								</li>
								<li>
									<a href="https://www.facebook.com/UVMcampusSanRafael/">twitter</a>
								</li>

							</ul>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-sm-6 col-xs-12">
							<p class="copyright-text">
								Copyright &copy; 2018 All Rights Reserved by
								<a href="#"> Alvarado Cortes</a>.
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
