import axios from 'axios';
import React, { useReducer, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { IContact } from 'src/typings/contact';
import Heading from '../Heading/Heading';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
  message: '',
};

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [state, dispatch] = useReducer<React.Reducer<IContact, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    initialState
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  const handleReset = () => dispatch({ ...initialState });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // send mail to user
    axios
      .post('/api/contact', state)
      .then((result) => {
        toast.success('Wij hebben uw aanvraag ontvangen!');
        setSuccess(true);
        handleReset();
      })
      .catch((err) => {
        toast.error('Oops, er is iets misgeslopen.');
      });
  };

  return (
    <div
      id='contacform'
      className='bg-plan py-16 p-4 md:p-20 w-full text-center'
    >
      {/* TODO: i18 */}
      <Heading
        aboveHeading='Een vraag?'
        belowHeading='contacteer ons'
        headingClassName='text-primary'
        lineClassName='bg-secondary'
      />

      {/* TODO: i18 */}
      <p className='text-primary text-lg md:text-xl mt-8 max-w-3xl mx-auto'>
        We zijn altijd bereid om te helpen, dus als je vragen hebt, aarzel dan
        niet om ons een bericht te sturen en we nemen zo snel mogelijk contact
        met u op.
      </p>

      <form
        className='max-w-5xl m-auto'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <input
            type='text'
            placeholder='Voornaam'
            className='contact-form-input capitalize'
            required
            name='firstName'
            value={state.firstName}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Achternaam'
            className='contact-form-input capitalize'
            name='lastName'
            value={state.lastName}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-4 gap-4'>
          <input
            type='email'
            placeholder='E-mailadres'
            className='contact-form-input'
            required
            name='email'
            value={state.email}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Telefoonnummer'
            className='contact-form-input capitalize'
            name='telephone'
            value={state.telephone}
            onChange={handleChange}
          />
        </div>

        <div className='mt-4 gap-4 w-full'>
          <textarea
            placeholder='Uw bericht'
            className='contact-form-message-input w-full'
            rows={5}
            required
            name='message'
            value={state.message}
            onChange={handleChange}
          />
        </div>

        <div className='mt-4 gap-4 w-full'>
          {success && (
            <div className='text-emerald-500'>
              Je inschrijving is succesvol verzonden!
            </div>
          )}
        </div>

        <button className='border-primary border-2 hover:bg-secondary text-primary flex items-center justify-center gap-2 px-12 py-4 rounded-full my-6 mx-auto text-[22px] uppercase transition-colors ease-in-out duration-200'>
          {/* TODO: i18 */}
          Verzenden <FiArrowUpRight />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
