import React from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import { IInTakeFormState } from './InTakeForm';

const AddressForm = ({
  state,
  dispatch,
}: {
  state: IInTakeFormState;
  dispatch: React.Dispatch<any>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  return (
    <div className='my-20'>
      <HeadingWithUnderline
        title='ADRES'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='Straatnaam en huisnummer'
        name='streetNameAndHouseNumber'
        required
        value={state.streetNameAndHouseNumber}
        onChange={handleChange}
      />
      <Input
        label='Postcode'
        name='zipCode'
        required
        value={state.zipCode}
        onChange={handleChange}
      />
      <Input
        label='Woonplaats'
        name='placeOfResidence'
        required
        value={state.placeOfResidence}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddressForm;
