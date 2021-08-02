import React from "react";
import "./Contact.css";

const ContactContent = () => {
	return (
		<div className="contact__content">
			<div className="container">
				<div className="contact__content__header">
					<h4>YOU’RE WELCOME</h4>
					<h1>KEEP IN TOUCH</h1>
					<span className="divided"></span>
					<p>
						Effect significant free expression rural development vaccine focus
						on impact our ambitions. <br /> Marginalized communities results
						local solutions Kony 2012 outcomes connect eradicate partnership.
					</p>
				</div>
				<div className="contact__content__info">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="contact__content__info__wrap">
								<div>
									<box-icon name="map" color="rgba(255,185,0,0.69)"></box-icon>
									<span>OFFICE ADDRESS</span>
								</div>
								<p>
									Your Name Road, London, <br /> United of Kingdom
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="contact__content__info__wrap">
								<div>
									<box-icon
										name="phone"
										type="solid"
										color="rgba(255,185,0,0.69)"
									></box-icon>
									<span>PHONE NUMBERS</span>
								</div>
								<p>
									(+84) 8 3555 3203 <br /> (+84) 8 3777 3203
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="contact__content__info__wrap">
								<div>
									<box-icon
										name="mail-send"
										color="rgba(255,185,0,0.69)"
									></box-icon>
									<span>EMAIL ADDRESS</span>
								</div>
								<p>
									themesky.info@gmail.com <br /> support.info@gmail.com
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="contact__content__info__wrap">
								<div>
									<box-icon
										name="printer"
										color="rgba(255,185,0,0.69)"
									></box-icon>
									<span>FAX NUMBERS</span>
								</div>
								<p>+1-212-9876543</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactContent;
