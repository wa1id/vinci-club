import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Eemail is verplicht" });
  }

  try {
    const response = await axios.post(
      `https://us14.api.mailchimp.com/3.0/lists/72aafb93a7/members`,
      {
        email_address: email,
        status: "subscribed",
      },
      {
        headers: {
          Authorization: `auth ${process.env.MAILCHIMP_API_KEY}`,
        },
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error:
          "There was an error subscribing to the newsletter, please try again.",
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
