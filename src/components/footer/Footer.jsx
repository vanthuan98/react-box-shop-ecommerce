import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-address">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="address-info">
								<box-icon name="map" color="#ffffff"></box-icon>
								<span>868 Fake Street, New York</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="address-info">
								<box-icon name="phone-call" color="#ffffff"></box-icon>
								<span>(+84) 8 3555 3203</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="address-info">
								<box-icon name="mail-send" color="#ffffff"></box-icon>
								<span>support.theme-sky.com</span>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="address-info">
								<box-icon name="printer" color="#ffffff"></box-icon>
								<span>+1-212-9876543</span>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-nav">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="footer-nav-item">
								<h3>CUSTOMER SERVICE</h3>
								<ul className="item-nav">
									<li>
										<a href="/#">Search Terms</a>
									</li>
									<li>
										<a href="/#">Advanced Search</a>
									</li>
									<li>
										<a href="/#">Orders & Returns</a>
									</li>
									<li>
										<a href="/#">RSS</a>
									</li>
									<li>
										<a href="/#">Help & FAQs</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="footer-nav-item">
								<h3>CATEGORIES</h3>
								<ul className="item-nav">
									<li>
										<a href="/#">All Brands</a>
									</li>
									<li>
										<a href="/#">Fashion Clothing</a>
									</li>
									<li>
										<a href="/#">Cosmetics & Beauty</a>
									</li>
									<li>
										<a href="/#">Computers & Laptops</a>
									</li>
									<li>
										<a href="/#">Smartphones & Tablets</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="footer-nav-item">
								<h3>INFORMATION</h3>
								<ul className="item-nav">
									<li>
										<a href="/#">Frequently Asked Questions</a>
									</li>
									<li>
										<a href="/#">Terms & Conditions</a>
									</li>
									<li>
										<a href="/#">Customer Service</a>
									</li>
									<li>
										<a href="/#">Delivery Information</a>
									</li>
									<li>
										<a href="/#">Manufacturers</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="footer-nav-item">
								<h3>FOLLOW US</h3>
								<ul className="item-nav">
									<li>
										<a href="/#">
											<box-icon
												name="facebook"
												type="logo"
												color="#ffffff"
											></box-icon>
											<span>Facebook</span>
										</a>
									</li>
									<li>
										<a href="/#">
											<box-icon
												name="twitter"
												type="logo"
												color="#ffffff"
											></box-icon>
											<span>Twitter</span>
										</a>
									</li>
									<li>
										<a href="/#">
											<box-icon
												name="flickr-square"
												type="logo"
												color="#ffffff"
											></box-icon>
											<span>Flickr</span>
										</a>
									</li>
									<li>
										<a href="/#">
											<box-icon
												name="vimeo"
												type="logo"
												color="#ffffff"
											></box-icon>
											<span>Vimeo</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
