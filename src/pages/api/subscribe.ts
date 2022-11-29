import axios from 'axios';

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {

    const response = await axios.post(`https://us14.api.mailchimp.com/3.0/lists/72aafb93a7/members`, {
      email_address: email,
      status: 'subscribed',
  }, {
    headers: {
      Authorization: 'auth ca41313ee7983f687c4c6b2e2f1995ca-us14',
    }
  });

    if (response.status >= 400) {
      return res.status(400).json({
        error: 'There was an error subscribing to the newsletter, please try again.',
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
}