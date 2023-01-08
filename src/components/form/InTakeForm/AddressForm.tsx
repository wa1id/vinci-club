import React from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import { IInTakeFormState } from 'src/typings/intakeform';

const AddressForm = ({
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
        title="ADRES"
        lineClassName="w-32 p-[0.2rem]"
        size="medium"
      />
      <Input
        label="Straatnaam en huisnummer"
        name="streetNameAndHouseNumber"
        value={state.streetNameAndHouseNumber.value}
        error={state.streetNameAndHouseNumber.error}
        onChange={handleChange}
      />
      <Input
        label="Postcode"
        name="zipCode"
        value={state.zipCode.value}
        error={state.zipCode.error}
        onChange={handleChange}
      />
      <Input
        label="Woonplaats"
        name="placeOfResidence"
        value={state.placeOfResidence.value}
        error={state.placeOfResidence.error}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddressForm;
