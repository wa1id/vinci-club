import React, { useReducer } from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import RadioOrCheckBox from '../RadioOrCheckBox';

interface IState {
  backgroundOne: string;
  backgroundTwo: string;
  backgroundThree: string;
  backgroundFour: string;
  backgroundFive: string;
}

const BackgroundForm = () => {
  const [state, dispatch] = useReducer<React.Reducer<IState, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      backgroundOne: '',
      backgroundTwo: '',
      backgroundThree: '',
      backgroundFour: '',
      backgroundFive: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
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
        required
        value={state.backgroundOne}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='2. Hoe lang geleden heb je voor het laatst aan lichaamsbeweging/training gedaan?'
        name='backgroundTwo'
        required
        value={state.backgroundTwo}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='3. Indien je niet meer traint, wanneer en waarom ben je gestopt?'
        name='backgroundThree'
        required
        value={state.backgroundThree}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='4. Indien je traint, aan wat voor lichaamsbeweging doe je op dit moment?'
        name='backgroundThree'
        required
        value={state.backgroundFour}
        onChange={handleChange}
        hideRequiredIcon={true}
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
            required
            value={'0 keer per week'}
            onChange={handleChange}
            type='radio'
          />
          <RadioOrCheckBox
            label='1 tot 2 keer per week'
            name='backgroundFive'
            required
            value={'1 tot 2 keer per week'}
            onChange={handleChange}
            type='radio'
          />
          <RadioOrCheckBox
            label='3 tot 4 keer per week'
            name='backgroundFive'
            required
            value={'3 tot 4 keer per week'}
            onChange={handleChange}
            type='radio'
          />
          <RadioOrCheckBox
            label='5 tot 7 keer per week'
            name='backgroundFive'
            required
            value={'5 tot 7 keer per week'}
            onChange={handleChange}
            type='radio'
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundForm;
