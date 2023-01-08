import React from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import RadioOrCheckBox from '../RadioOrCheckBox';
import { IInTakeFormState } from 'src/typings/intakeform';

const InPersonForm = ({
  state,
  dispatch
}: {
  state: IInTakeFormState;
  dispatch: React.Dispatch<any>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ ...state, [name]: { value, error: false } });
  };

  return (
    <div className="my-20">
      <HeadingWithUnderline
        title="PERSOONLIJK"
        lineClassName="w-32 p-[0.2rem]"
        size="medium"
      />
      <Input
        label="Voornaam"
        name="firstName"
        value={state.firstName.value}
        error={state.firstName.error}
        onChange={handleChange}
        required
      />
      <Input
        label="Achternaam"
        name="lastName"
        value={state.lastName.value}
        error={state.lastName.error}
        onChange={handleChange}
        required
      />
      <Input
        label="Geboortedatum"
        name="dob"
        value={state.dob.value}
        error={state.dob.error}
        onChange={handleChange}
        type="date"
        required
      />

      <div>
        <label htmlFor={'gender'} className={'font-semibold text-primary'}>
          Man/vrouw <sup>*</sup>
        </label>

        <div className="flex items-center flex-wrap gap-5">
          <RadioOrCheckBox
            label="man"
            name="gender"
            value={'man'}
            onChange={handleChange}
            type="radio"
            error={state.gender.error}
            checked={state.gender.value === 'man'}
          />
          <RadioOrCheckBox
            label="vrouw"
            name="gender"
            value={'vrouw'}
            onChange={handleChange}
            type="radio"
            error={state.gender.error}
            checked={state.gender.value === 'vrouw'}
          />
        </div>
      </div>

      <Input
        label="Instagram account"
        name="instagramAccount"
        value={state.instagramAccount.value}
        error={state.instagramAccount.error}
        onChange={handleChange}
      />

      <Input
        label="Telefoonnummer"
        name="phoneNumber"
        value={state.phoneNumber.value}
        error={state.phoneNumber.error}
        onChange={handleChange}
        required
      />

      <Input
        label="E-mailadres"
        name="emailAddress"
        value={state.emailAddress.value}
        error={state.emailAddress.error}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default InPersonForm;
