import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API as string);

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, email, telephone, message } = req.body;

  const mailOptions: MailDataRequired = {
    from: {
      name: 'Vinci Club',
      email: 'info@vinci-club.be'
    },
    to: 'info@vinci-club.be',
    templateId: 'd-a83efccb727c43cca19eee0ebe8d16b0',
    replyTo: email,
    dynamicTemplateData: {
      firstName,
      lastName,
      email,
      telephone,
      message
    }
  };

  try {
    await sgMail.send(mailOptions);
    return res.status(201).json({ error: '' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default contact;
