import React, { useReducer } from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
import Heading from '../Heading/Heading';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {

  const [state, dispatch] = useReducer<React.Reducer<IState, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    }
  );

  const handleReset = () => {
    dispatch({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const templateParams = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      phone: state.phone,
      message: state.message,
    }

    // send mail to user
    emailjs
      .send(
        process.env.MANAGER_EMAILJS_SERVICE_ID as string,
        process.env.MANAGER_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.MANAGER_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          toast.success('Wij hebben je bericht ontvangen!');
          handleReset();
        },
        (error) => {
          toast.error('Oops, er is iets misgeslopen.');
        }
      );
  }



  return (
    <div className='bg-plan py-16 p-4 md:p-20 w-full text-center'>
      {/* TODO: i18 */}
      <Heading
        aboveHeading='Need quick advice?'
        belowHeading='consult us'
        headingClassName='text-primary'
        lineClassName='bg-secondary'
      />

      {/* TODO: i18 */}
      <p className='text-primary text-lg md:text-xl mt-8 max-w-3xl mx-auto'>
        We are always happy and available to help, so if you have any queries,
        feel free to message us and we’ll get back to you as soon as possible
      </p>

      <form className='max-w-5xl m-auto'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <input
            type='text'
            placeholder='first name'
            className='contact-form-input capitalize'
            name='firstName'
            value={state.firstName}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='last name'
            className='contact-form-input capitalize'
            name='lastName'
            value={state.lastName}
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-4 gap-4'>
          <input
            type='email'
            placeholder='e-mail'
            className='contact-form-input capitalize'
            name='email'
            value={state.email}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='phone'
            className='contact-form-input capitalize'
            name='phone'
            value={state.phone}
            onChange={handleChange}
          />
        </div>

        <div className='mt-4 gap-4 w-full'>
          <textarea
            placeholder='your message'
            className='contact-form-message-input capitalize w-full'
            rows={5}
            name='message'
            value={state.message}
            onChange={handleChange}
          />
        </div>

        <button className='border-primary border-2 hover:bg-secondary text-primary flex items-center justify-center gap-2 px-12 py-4 rounded-full my-6 mx-auto text-[22px] uppercase transition-colors ease-in-out duration-200'
          type='submit'
        >
          {/* TODO: i18 */}
          Submit <FiArrowUpRight />
        </button>
      </form>
    </div>
  );
}

export default ContactForm