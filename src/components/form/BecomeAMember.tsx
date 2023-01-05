import React, { useReducer } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Button } from "../Button/Button";

interface IProps {}

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  interestedIn: {
    name: string;
    checked: boolean;
  }[];
  address: {
    street: string;
    city: string;
    zip: string;
  };
  referenceClub?: string;
  agree: boolean;
}

// TODO: i18

const BecomeAMember: React.FC<IProps> = () => {
  const [checkedError, setCheckedError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [state, dispatch] = useReducer<React.Reducer<IState, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      interestedIn: [
        {
          name: "Fitness",
          checked: false,
        },
        {
          name: "Boxing",
          checked: false,
        },
        {
          name: "Groepsessies",
          checked: false,
        },
        {
          name: "Personal Training",
          checked: false,
        },
        {
          name: "Ladies only fitness",
          checked: false,
        },
        {
          name: "Ladies only boxing",
          checked: false,
        },
      ],
      address: {
        street: "",
        city: "",
        zip: "",
      },
      referenceClub: "",
      agree: false,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  const handleInterestedIn = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { checked } = e.target;
    dispatch({
      interestedIn: state.interestedIn.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            checked,
          };
        }
        return item;
      }),
    });
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      address: {
        ...state.address,
        [name]: value,
      },
    });
  };

  const handleAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    dispatch({ agree: checked });
  };

  const handleReset = () => {
    dispatch({
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      interestedIn: [
        {
          name: "Fitness",
          checked: false,
        },
        {
          name: "Boxing",
          checked: false,
        },
        {
          name: "Groepsessies",
          checked: false,
        },
        {
          name: "Personal Training",
          checked: false,
        },
        {
          name: "Ladies only fitness",
          checked: false,
        },
        {
          name: "Ladies only boxing",
          checked: false,
        },
      ],
      address: {
        street: "",
        city: "",
        zip: "",
      },
      referenceClub: "",
      agree: false,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCheckedError(false);
    setSuccess(false);

    if (!state.agree) {
      setCheckedError(true);
      return;
    }

    setLoading(true);

    const templateParams = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      telephone: state.telephone,
      interestedIn: state.interestedIn
        .filter((item) => item.checked)
        .map((item) => item.name)
        .join(", "),
      address: `${state.address.street}, ${state.address.city}, ${state.address.zip}`,
      referenceClub: state.referenceClub,
    };

    // send mail to user
    emailjs
      .send(
        process.env.USER_EMAILJS_SERVICE_ID as string,
        process.env.USER_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.USER_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          toast.success("Wij hebben uw aanvraag ontvangen!");
          setSuccess(true);
          setLoading(false);
          handleReset();
        },
        (error) => {
          toast.error("Oops, er is iets misgeslopen.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="overflow-hidden p-5">
      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="firstName" className="font-semibold">
              Voornaam<sup>*</sup>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={state.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="font-semibold">
              Achternaam<sup>*</sup>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={state.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="font-semibold">
            E-mailadres<sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="telephone" className="font-semibold">
            Telefoonnummer<sup>*</sup>
          </label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            value={state.telephone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full ">
          <label htmlFor="interestedIn" className="font-semibold">
            Ik ben geïnteresseerd in
          </label>
          {state.interestedIn.map((item, index) => (
            <div key={index} className="flex items-center justify-start gap-2">
              <input
                type="checkbox"
                name="interestedIn"
                id={item.name}
                value={item.name}
                checked={item.checked}
                onChange={(e) => handleInterestedIn(e, index)}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="address" className="font-semibold">
            Uw adres<sup>*</sup>
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="street"
              id="street"
              value={state.address.street}
              onChange={handleAddress}
              placeholder="Straat + huisnummer"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-2 my-2">
            <div>
              <input
                type="text"
                name="city"
                id="city"
                value={state.address.city}
                onChange={handleAddress}
                placeholder="Gemeente"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="zip"
                id="zip"
                value={state.address.zip}
                onChange={handleAddress}
                placeholder="Postcode"
                required
              />
            </div>
          </div>
        </div>

        <div className="w-full ">
          <label className="font-semibold ">
            Naam of referentie van iemand die je kent bij Vinci Club
          </label>
          <input
            type="text"
            name="referenceClub"
            id="referenceClub"
            value={state.referenceClub}
            onChange={handleChange}
          />
        </div>

        <div className="w-full ">
          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={state.agree}
              onChange={handleAgree}
            />
            <label htmlFor={"agree"} className="agree">
              Ik ga akkoord met de{" "}
              <Link
                href="/terms-and-conditions"
                target="_blank"
                className="underline"
              >
                algemene voorwaarden
              </Link>{" "}
              en{" "}
              <Link href="/privacy" target="_blank" className="underline">
                privacybeleid
              </Link>
              <sup>*</sup>
            </label>
          </div>
          {checkedError && (
            <div className="text-red-500">
              Geef aan dat u de voorwaarden en het privacybeleid hebt gelezen en
              ermee akkoord gaat.
            </div>
          )}

          {success && (
            <div className="text-emerald-500">
              Je inschrijving is succesvol verzonden!
            </div>
          )}
        </div>

        <div className="w-full ">
          <Button loading={loading} variant="primary" type="submit">
            Registeren
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BecomeAMember;
