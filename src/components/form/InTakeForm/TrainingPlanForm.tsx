import React from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import RadioOrCheckBox from '../RadioOrCheckBox';
import { IInTakeFormState } from './InTakeForm';

const TrainingPlanForm = ({
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

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { checked, name, value } = e.target;

    dispatch({
      trainingFormThree: state.trainingFormThree.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            checked,
          };
        }
        return item;
      }),
    });
  };

  return (
    <div className='my-20'>
      <HeadingWithUnderline
        title='TRAININGSPLAN'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='1. Hoeveel tijd heb je beschikbaar per training en hoe vaak per week wil je trainen?'
        name='trainingFormOne'
        required={false}
        {...{ ...state.trainingFormOne }}
        onChange={handleChange}
        hideRequiredIcon
      />
      <Input
        label='2. Hoeveel keer PT wil je per week inplannen?'
        name='trainingFormTwo'
        required={false}
        {...{ ...state.trainingFormTwo }}
        onChange={handleChange}
        hideRequiredIcon
      />

      <div>
        <label
          htmlFor={'trainingFormThree'}
          className={'capitalize text-primary'}
        >
          3. Wat zijn voor jou de beste dagen om te trainen?
        </label>

        <div className='flex items-center flex-wrap gap-5'>
          {state.trainingFormThree.map((item, index) => (
            <RadioOrCheckBox
              key={index}
              label={item.name}
              name='trainingFormThree'
              required={false}
              id={item.name}
              value={item.name}
              checked={item.checked}
              onChange={(e) => handleCheckbox(e, index)}
              type='checkbox'
            />
          ))}
        </div>
      </div>

      <Input
        label='4. Heb je voorkeursdagen en tijden om onze afspraken in te plannen?'
        name='trainingFormFour'
        required={false}
        {...{ ...state.trainingFormFour }}
        onChange={handleChange}
        hideRequiredIcon
      />
    </div>
  );
};

export default TrainingPlanForm;
