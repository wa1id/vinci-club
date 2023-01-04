
import React, { useReducer } from 'react';
import HeadingWithUnderline from '../Heading/HeadingWithUnderline';
import Input from './Input';
import Radio from './Radio';

interface IState {
  firstName: string;
  lastName: string;
  dob: string;
  gender: 'male' | 'female';
  instagramAccount: string;
  phoneNumber: string;
  emailAddress: string;
}

const InPersonForm = () => {
  const [state, dispatch] = useReducer<React.Reducer<IState, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      firstName: '',
      lastName: '',
      dob: '',
      gender: 'male',
      instagramAccount: '',
      phoneNumber: '',
      emailAddress: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  return (
    <div className='my-12'>
      <HeadingWithUnderline
        title='PERSOONLIJK'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='voornaam'
        name='voornaam'
        required
        value={state.firstName}
        onChange={handleChange}
      />
      <Input
        label='achternaam'
        name='achternaam'
        required
        value={state.lastName}
        onChange={handleChange}
      />
      <Input
        label='geboortedatum'
        name='geboortedatum'
        required
        value={state.dob}
        onChange={handleChange}
      />

      <div>
        <label
          htmlFor={'gender'}
          className={'capitalize font-semibold text-primary'}
        >
          Man/vrouw <sup>*</sup>
        </label>

        <div className='flex items-center gap-5'>
          <Radio
            label='man'
            name='gender'
            required
            value={state.gender}
            onChange={handleChange}
            type='radio'
          />
          <Radio
            label='vrouw'
            name='gender'
            required
            value={state.gender}
            onChange={handleChange}
            type='radio'
          />
        </div>
      </div>

      <Input
        label='Instagram account'
        name='instagramAccount'
        required
        value={state.instagramAccount}
        onChange={handleChange}
        placeholder='Indien je een account hebt, vul dan je gebruikersnaam in. Bijvoorbeeld @daverijkaard'
      />

      <Input
        label='Telefoonnummer'
        name='phoneNumber'
        required
        value={state.phoneNumber}
        onChange={handleChange}
      />

      <Input
        label='E-mailadres.'
        name='emailAddress'
        required
        value={state.emailAddress}
        onChange={handleChange}
      />

    </div>
  );
};

export default InPersonForm;
