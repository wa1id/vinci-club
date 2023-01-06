import React from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import RadioOrCheckBox from '../RadioOrCheckBox';
import { IInTakeFormState } from './InTakeForm';

const InPersonForm = ({
  state,
  dispatch,
}: {
  state: IInTakeFormState;
  dispatch: React.Dispatch<any>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ ...state, [name]: { value, error: false } });
  };

  return (
    <div className='my-20'>
      <HeadingWithUnderline
        title='PERSOONLIJK'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='voornaam'
        name='firstName'
        required
        value={state.firstName.value}
        error={state.firstName.error}
        onChange={handleChange}
      />
      <Input
        label='achternaam'
        name='lastName'
        required
        value={state.lastName.value}
        error={state.lastName.error}
        onChange={handleChange}
      />
      <Input
        label='geboortedatum'
        name='dob'
        required
        value={state.dob.value}
        error={state.dob.error}
        onChange={handleChange}
        type='datetime-local'
      />

      <div>
        <label
          htmlFor={'gender'}
          className={'capitalize font-semibold text-primary'}
        >
          Man/vrouw <sup>*</sup>
        </label>

        <div className='flex items-center flex-wrap gap-5'>
          <RadioOrCheckBox
            label='man'
            name='gender'
            required
            value={'man'}
            onChange={handleChange}
            type='radio'
            error={state.gender.error}
          />
          <RadioOrCheckBox
            label='vrouw'
            name='gender'
            required
            value={'vrouw'}
            onChange={handleChange}
            type='radio'
            error={state.gender.error}
          />
        </div>
      </div>

      <Input
        label='Instagram account'
        name='instagramAccount'
        value={state.instagramAccount.value}
        error={state.instagramAccount.error}
        onChange={handleChange}
        placeholder='Indien je een account hebt, vul dan je gebruikersnaam in. Bijvoorbeeld @daverijkaard'
      />

      <Input
        label='Telefoonnummer'
        name='phoneNumber'
        required
        value={state.phoneNumber.value}
        error={state.phoneNumber.error}
        onChange={handleChange}
      />

      <Input
        label='E-mailadres.'
        name='emailAddress'
        required
        value={state.emailAddress.value}
        error={state.emailAddress.error}
        onChange={handleChange}
      />
    </div>
  );
};

export default InPersonForm;
