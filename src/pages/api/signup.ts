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

  const mailOptions: MailDataRequired = {
    from: {
      name: 'Vinci Club',
      email: 'info@vinci-club.be',
    },
    to: email,
    subject: 'Bedankt voor uw inschrijving bij Vinci Club',
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

  try {
    await sgMail.send(mailOptions);
    return res.status(201).json({ error: '' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default signup;
