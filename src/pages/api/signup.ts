import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API as string);

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    firstName,
    lastName,
    email,
    telephone,
    interestedIn,
    address,
    referenceClub,
  } = req.body;

  const userMailOptions: MailDataRequired = {
    from: {
      name: 'Vinci Club',
      email: 'info@vinci-club.be',
    },
    to: email,
    templateId: 'd-499d3dc411d94157bb39052aa415fc53',
    dynamicTemplateData: {
      firstName,
      lastName,
      telephone,
      interestedIn,
      address,
      referenceClub,
    },
  };

  const managerMailOptions: MailDataRequired = {
    from: {
      name: `${firstName} ${lastName}`,
      email: 'info@vinci-club.be',
    },
    to: 'info@vinci-club.be',
    templateId: 'd-f3f5f195d5324f1ea71d2b4e67bd4a57',
    replyTo: email, 
    dynamicTemplateData: {
      firstName,
      lastName,
      telephone,
      interestedIn,
      address,
      referenceClub,
    },
  };

  try {
    await sgMail.send(userMailOptions);
    await sgMail.send(managerMailOptions);

    return res.status(201).json({ error: '' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default signup;
