import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { BecomeMember } from "src/typings/members";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "POST") {
    const { lastName } = request.body;

    if (!lastName) {
      return response.status(400).json({ error: "lastname" });
    }

    try {
      const data = buildNotionRequest(request.body);

      await axios.post("https://api.notion.com/v1/pages", data, {
        headers: {
          Authorization: process.env.NOTION_SECRET,
          "Notion-Version": "2022-06-28",
        },
      });
      return response.status(200).json("Successfully added member");
    } catch (error) {
      return response.status(500).json({ error: "Something went wrong" });
    }
  } else {
    response.status(405).json({ error: "Method not allowed" });
  }
}

const buildNotionRequest = (data: BecomeMember) => {
  const {
    firstName,
    lastName,
    email,
    telephone,
    interestedIn,
    address,
    referenceClub,
  } = data;
  const { street, city, zip } = address;

  const removeUncheckedInterests = interestedIn.filter((item) => item.checked);
  const interests = removeUncheckedInterests.map(
    ({ checked, ...keepAttrs }) => keepAttrs
  );

  const newPage = {
    parent: {
      database_id: process.env.NOTION_VINCI_DB,
    },
    properties: {
      Achternaam: {
        title: [
          {
            text: {
              content: lastName,
            },
          },
        ],
      },
      Voornaam: {
        rich_text: [
          {
            text: {
              content: firstName,
            },
          },
        ],
      },
      "E-mail": {
        email: email,
      },
      Telefoon: {
        phone_number: telephone,
      },
      Interesses: {
        multi_select: interests,
      },
      Adres: {
        rich_text: [
          {
            text: {
              content: `${street}, ${zip} ${city}`,
            },
          },
        ],
      },
      Referentie: {
        rich_text: [
          {
            text: {
              content: referenceClub,
            },
          },
        ],
      },
    },
  };

  return newPage;
};
