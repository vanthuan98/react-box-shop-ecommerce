import React from "react";
import ContactContent from "../components/contact/ContactContent";
import ContactForm from "../components/contact/ContactForm";
import ContactHeader from "../components/contact/ContactHeader";

const Contact = () => {
	return (
		<section className="contact">
			<ContactHeader />
			<ContactContent />
			<ContactForm />
		</section>
	);
};

export default Contact;
