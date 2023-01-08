import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API as string);

const intake = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    firstName,
    lastName,
    dob,
    gender,
    phoneNumber,
    emailAddress,
    streetNameAndHouseNumber,
    zipCode,
    placeOfResidence,
    goalOne,
    goalTwo,
    goalThree,
    goalFour, instagramAccount
  } = req.body;

  const mailOptions: MailDataRequired = {
    from: {
      name: 'Vinci Club',
      email: 'info@vinci-club.be'
    },
    to: 'info@vinci-club.be',
    templateId: 'd-e2032b26c2464dc4bfb8f39bf3cb756e',
    replyTo: emailAddress,
    dynamicTemplateData: {
      firstName,
      lastName,
      dob,
      gender,
      phoneNumber,
      streetNameAndHouseNumber,
      zipCode,
      placeOfResidence,
      goalOne,
      goalTwo,
      goalThree,
      goalFour, emailAddress, instagramAccount
    }
  };

  try {
    await sgMail.send(mailOptions);
    return res.status(201).json({ error: '' });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default intake;
