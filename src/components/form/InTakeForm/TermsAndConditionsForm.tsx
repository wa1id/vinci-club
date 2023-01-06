import React from 'react';
import HeadingWithUnderline from 'src/components/Heading/HeadingWithUnderline';
import RadioOrCheckBox from '../RadioOrCheckBox';
import { IInTakeFormState } from './InTakeForm';

const TermsAndConditionsForm = ({
  state,
  dispatch,
}: {
  state: IInTakeFormState;
  dispatch: React.Dispatch<any>;
}) => {
  return (
    <div className='my-20'>
      <HeadingWithUnderline
        title='ALGEMENE VOORWAARDEN'
        lineClassName='w-60 p-[0.2rem]'
        size='medium'
      />
      <p className='my-6'>
        Ik heb dit formulier naar alle eerlijkheid ingevuld en ik ga akkoord met
        de algemene voorwaarden. <sup>*</sup>
      </p>
      <RadioOrCheckBox
        label='Ik ga akkoord met de algemene voorwaarden.'
        type='checkbox'
        name='agree'
        checked={state.isAgree}
        onChange={() => dispatch({ isAgree: !state.isAgree })}
        required
        className='text-sm'
      />
      <div className='my-6'>
        <button className='bg-primary text-base md:text-lg text-white px-6 py-3 uppercase'>
          verstuur
        </button>
      </div>
      <p className='text-sm italic'>
        KLIK HIER voor het doornemen van de algemene voorwaarden (je wordt
        doorverwezen naar een nieuwe pagina, zodat jij je ingevulde gegevens
        niet verliest).
      </p>
    </div>
  );
};

export default TermsAndConditionsForm;
