import React from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import RadioOrCheckBox from '../RadioOrCheckBox';
import { IInTakeFormState } from './InTakeForm';

const BackgroundForm = ({
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
        title='ACHTERGROND'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='1. Heb je eerder een personal trainer gehad? Zo ja, wat zijn jouw ervaringen?'
        name='backgroundOne'
        required={false}
        {...{ ...state.backgroundOne }}
        onChange={handleChange}
        hideRequiredIcon
      />
      <Input
        label='2. Hoe lang geleden heb je voor het laatst aan lichaamsbeweging/training gedaan?'
        name='backgroundTwo'
        required={false}
        {...{ ...state.backgroundTwo }}
        onChange={handleChange}
        hideRequiredIcon
      />
      <Input
        label='3. Indien je niet meer traint, wanneer en waarom ben je gestopt?'
        name='backgroundThree'
        required={false}
        {...{ ...state.backgroundThree }}
        onChange={handleChange}
        hideRequiredIcon
      />
      <Input
        label='4. Indien je traint, aan wat voor lichaamsbeweging doe je op dit moment?'
        name='backgroundFour'
        required={false}
        {...{ ...state.backgroundFour }}
        onChange={handleChange}
        hideRequiredIcon
      />
      <div>
        <label
          htmlFor={'backgroundFive'}
          className={'capitalize text-primary'}
        >
          5. Hoe vaak train je nu per week?
        </label>

        <div className='flex items-center flex-wrap gap-5'>
          <RadioOrCheckBox
            label='0 keer per week'
            name='backgroundFive'
            required={false}
            value={'0 keer per week'}
            error={state.backgroundFive.error}
            onChange={handleChange}
            type='radio'
          />
          <RadioOrCheckBox
            label='1 tot 2 keer per week'
            name='backgroundFive'
            required={false}
            value={'1 tot 2 keer per week'}
            error={state.backgroundFive.error}
            onChange={handleChange}
            type='radio'
          />
          <RadioOrCheckBox
            label='3 tot 4 keer per week'
            name='backgroundFive'
            required={false}
            value={'3 tot 4 keer per week'}
            error={state.backgroundFive.error}
            onChange={handleChange}
            type='radio'
          />
          <RadioOrCheckBox
            label='5 tot 7 keer per week'
            name='backgroundFive'
            required={false}
            value={'5 tot 7 keer per week'}
            error={state.backgroundFive.error}
            onChange={handleChange}
            type='radio'
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundForm;
