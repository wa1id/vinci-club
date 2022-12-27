import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  // const {
  //   firstName,
  //   lastName,
  //   email,
  //   telephone,
  //   interestedIn,
  //   address,
  //   referenceClub,
  // } = req.body;

  let message = 'html_template';

  const mailOptions: MailDataRequired = {
    from: {
      name: 'Vinci Club', email: 'email@gmail.com'
    },
    to: 'email@gmail.com',
    subject: 'subject',
    html: message,
    templateId: process.env.CLIENT_TEMPLATE_ID,
  };

  console.log(JSON.stringify(mailOptions))

  try {
    await sgMail.send(mailOptions);
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default signup;
