import React, {  useReducer } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import {
  USER_EMAILJS_PUBLIC_KEY,
  USER_EMAILJS_SERVICE_ID,
  USER_EMAILJS_TEMPLATE_ID,
} from "src/constants";
import { toast } from "react-toastify";

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
  startDate: string;
  alreadyMember: "yes" | "no";
  referenceClub?: string;
  agree: boolean;
}

const BecomeAMember: React.FC<IProps> = () => {
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
          name: "Group Sessions",
          checked: false,
        },
        {
          name: "Personal Training",
          checked: false,
        },
      ],
      address: {
        street: "",
        city: "",
        zip: "",
      },
      startDate: "",
      alreadyMember: "no",
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
  }

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
          name: "Group Sessions",
          checked: false,
        },
        {
          name: "Personal Training",
          checked: false,
        },
      ],
      address: {
        street: "",
        city: "",
        zip: "",
      },
      startDate: "",
      alreadyMember: "no",
      referenceClub: "",
      agree: false,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      startDate: state.startDate,
      alreadyMember: state.alreadyMember,
      referenceClub: state.referenceClub,
    };

    // send mail to user
    emailjs
      .send(
        USER_EMAILJS_SERVICE_ID as string,
        USER_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        USER_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("Something went wrong");
        }
      );
    handleReset();
  };

  return (
    <div className="shadow overflow-hidden sm:rounded-lg p-4">
      <h1 className="text-3xl font-bold text-gray-900 uppercase my-4">
        Become a Member
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid gap-5"
      >
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label
              htmlFor="firstName"
              className="font-semibold"
            >
              First Name
              <sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={state.firstName}
              onChange={handleChange}
              className="block w-full flex-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="font-semibold"
            >
              Last Name <sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={state.lastName}
              onChange={handleChange}
              className="block w-full flex-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <div className="">
          <label
            htmlFor="email"
            className="font-semibold"
          >
            Email address <sup className="text-red-500">*</sup>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={handleChange}
            className="block w-full flex-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4"
            placeholder="Email"
            required
          />
        </div>

        <div className="">
          <label
            htmlFor="telephone"
            className="font-semibold"
          >
            Telephone <sup className="text-red-500">*</sup>
          </label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            value={state.telephone}
            onChange={handleChange}
            className="block w-full flex-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4"
            placeholder="Telephone"
            required
          />
        </div>

        <div className="w-full ">
          <label
            htmlFor="interestedIn"
            className="font-semibold"
          >
            Interested In <sup className="text-red-500">*</sup>
          </label>
          {state.interestedIn.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start gap-2"
            >
              <input
                type="checkbox"
                name="interestedIn"
                id={item.name}
                value={item.name}
                checked={item.checked}
                onChange={(e) => handleInterestedIn(e, index)}
                className="block rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4 "
              />
              <label
                htmlFor={item.name}
                className=""
              >
                {item.name}
              </label>
            </div>
          ))}
        </div>

        <div>
          <label
            htmlFor="address"
            className="font-semibold"
          >
            Your address <sup className="text-red-500">*</sup>
          </label>
          <div className="mt-2">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              name="street"
              id="street"
              value={state.address.street}
              onChange={handleAddress}
              className="block w-full flex-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4"
              placeholder="Street"
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
                className="block w-full flex-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4"
                placeholder="City"
                required
              />
              <label
                htmlFor="city"
                className="text-xs font-semibold"
              >
                City
              </label>
            </div>
            <div>
              <input
                type="text"
                name="zip"
                id="zip"
                value={state.address.zip}
                onChange={handleAddress}
                className="block w-full flex-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4"
                placeholder="State"
                required
              />
              <label
                htmlFor="state"
                className="text-xs font-semibold"
              >
                Zip/ Postal
              </label>
            </div>
          </div>
        </div>

        <div className="">
          <label
            htmlFor="startDate"
            className="font-semibold"
          >
            Start from <sup className="text-red-500">*</sup>
          </label>
          <p className="text-xs mt-2">
            When would you like to start at Sportclub hel Eiland?
          </p>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={state.startDate}
            onChange={handleChange}
            className="block w-full flex-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4"
          />
        </div>

        <div className="w-full ">
          <label className="font-semibold">
            Have you already been a member of Sportclub hel Eilland?{" "}
            <sup className="text-red-500">*</sup>
          </label>
          <div className="flex items-center justify-start gap-2 mt-2">
            <input
              type="radio"
              name="alreadyMember"
              id="alreadyMember"
              value="yes"
              checked={state.alreadyMember === "yes"}
              onChange={handleChange}
              className="block rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4 "
            />
            <label htmlFor={"alreadyMember"}>Yes</label>
          </div>

          <div>
            <div className="flex items-center justify-start gap-2">
              <input
                type="radio"
                name="alreadyMember"
                id="alreadyMember"
                value="no"
                checked={state.alreadyMember === "no"}
                onChange={handleChange}
                className="block rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4 "
              />
              <label htmlFor={"alreadyMember"}>No</label>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <label className="font-semibold ">
            {" "}
            Name or reference of a club member you know?
          </label>
          <input
            type="text"
            name="referenceClub"
            id="referenceClub"
            value={state.referenceClub}
            onChange={handleChange}
            className="block w-full flex-1 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4 mt-2"
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
              className="block rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-1 px-4 "
            />
            <label
              htmlFor={"agree"}
              className="agree"
            >
              I agree to the privacy policy{" "}
              <sup className="text-red-500">*</sup>
            </label>
          </div>
        </div>

        <p className="border border-gray-200 text-xs px-4 py-2 border-r-8 ">
          You can read our privacy policy{" "}
          <Link
            href="/terms-and-conditions"
            className="underline"
          >
            here
          </Link>
        </p>

        <div className="w-full ">
          <button
            type="submit"
            className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BecomeAMember;
