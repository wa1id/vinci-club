import Head from "next/head";
import React from "react";
import Address from "src/components/Address/Address";
import ContactWithVinciClub from "src/components/ContactWithVinciClub/ContactWithVinciClub";
import ContactForm from "src/components/form/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contacteer ons - Vinci Club</title>
      </Head>
      <ContactWithVinciClub />
      <Address />
      <ContactForm />
    </>
  );
};

export default Contact;
