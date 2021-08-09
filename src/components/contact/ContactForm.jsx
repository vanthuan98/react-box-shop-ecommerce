import React from "react";
import "./Contact.scss";

const ContactForm = () => {
	return (
		<form className="contact__form">
			<div className="container">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="form__group">
								<label>
									Your Name <span>*</span>
								</label>
								<input type="text" name="contact-name" id="contactName" />
							</div>
							<div className="form__group">
								<label>
									Your Email <span>*</span>
								</label>
								<input type="email" name="contact-email" id="contactEmail" />
							</div>
							<div className="form__group">
								<label>Subject</label>
								<input type="text" name="contact-subject" id="contactSubject" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<div className="form__group">
								<label>Message</label>
								<textarea
									name="contact-message"
									id="contactMessage"
									cols="30"
									rows="10"
								></textarea>
							</div>
						</div>
					</div>
					<button className="contact__submit">SUBMIT</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
