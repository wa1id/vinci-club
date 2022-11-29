import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
import Heading from 'src/components/Heading/Heading';

const Contact = () => {
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

      <form className='max-w-5xl m-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <input
            type='text'
            placeholder='first name'
            className='contact-form-input capitalize'
          />
          <input
            type='text'
            placeholder='last name'
            className='contact-form-input capitalize'
          />
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-4 gap-4'>
          <input
            type='email'
            placeholder='e-mail'
            className='contact-form-input capitalize'
          />
          <input
            type='text'
            placeholder='phone'
            className='contact-form-input capitalize'
          />
        </div>

        <div className='mt-4 gap-4 w-full'>
          <textarea
            placeholder='your message'
            className='contact-form-message-input capitalize w-full'
            rows={5}
          />
        </div>

        <button className='border-primary border-2 hover:bg-secondary text-primary flex items-center justify-center gap-2 px-12 py-4 rounded-full my-6 mx-auto text-[22px] uppercase transition-colors ease-in-out duration-200'>
          {/* TODO: i18 */}
          Submit <FiArrowUpRight />
        </button>
      </form>
    </div>
  );
}

export default Contact;