import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey(process.env.SENDGRID_API as string);

const intake = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    firstName,
    lastName,
    dob,
    gender,
    instagramAccount,
    phoneNumber,
    emailAddress,

    // address form
    streetNameAndHouseNumber,
    zipCode,
    placeOfResidence,

    // goal form
    goalOne,
    goalTwo,
    goalThree,
    goalFour,

    // background form
    backgroundOne,
    backgroundTwo,
    backgroundThree,
    backgroundFour,
    backgroundFive,

    // lifestyle form
    lifeStyleOne,
    lifeStyleTwo,
    lifeStyleThree,
    lifeStyleFour,
    lifeStyleFive,

    // training form
    trainingFormOne,
    trainingFormTwo,
    trainingFormThree,
    trainingFormFour,

    // nutrition form
    nutritionOne,
    nutritionTwo,
    nutritionThree,
    nutritionFour,
    nutritionFive,
    nutritionSix,
    nutritionSeven,

    // medical background form
    medicalBackgroundOne,
    medicalBackgroundTwo,
    medicalBackgroundThree,
    medicalBackgroundFour,
    medicalBackgroundFive,
    medicalBackgroundSix,
    medicalBackgroundSeven,
    medicalBackgroundEight,
    medicalBackgroundNine,
    medicalBackgroundTen,
    medicalBackgroundEleven,
    medicalBackgroundTwelve
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
      instagramAccount,
      phoneNumber,
      emailAddress,

      // address form
      streetNameAndHouseNumber,
      zipCode,
      placeOfResidence,

      // goal form
      goalOne,
      goalTwo,
      goalThree,
      goalFour,

      // background form
      backgroundOne,
      backgroundTwo,
      backgroundThree,
      backgroundFour,
      backgroundFive,

      // lifestyle form
      lifeStyleOne,
      lifeStyleTwo,
      lifeStyleThree,
      lifeStyleFour,
      lifeStyleFive,

      // training form
      trainingFormOne,
      trainingFormTwo,
      trainingFormThree,
      trainingFormFour,

      // nutrition form
      nutritionOne,
      nutritionTwo,
      nutritionThree,
      nutritionFour,
      nutritionFive,
      nutritionSix,
      nutritionSeven,

      // medical background form
      medicalBackgroundOne,
      medicalBackgroundTwo,
      medicalBackgroundThree,
      medicalBackgroundFour,
      medicalBackgroundFive,
      medicalBackgroundSix,
      medicalBackgroundSeven,
      medicalBackgroundEight,
      medicalBackgroundNine,
      medicalBackgroundTen,
      medicalBackgroundEleven,
      medicalBackgroundTwelve
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
