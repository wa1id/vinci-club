import React, { useReducer } from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import RadioOrCheckBox from '../RadioOrCheckBox';

interface IState {
  trainingFormOne: string;
  trainingFormTwo: string;
  trainingFormThree: {
    name: string;
    checked: boolean;
  }[];
  trainingFormFour: string;
}

const days: Record<string, string> = {
  monday: 'Maandag',
  tuesday: 'Dinsdag',
  wendesday: 'Woensdag',
  thursday: 'Donderdag',
  friday: 'Vrijdag',
  saturday: 'Zaterdag',
  sunday: 'Zondag',
};

const TrainingPlanForm = () => {
  const [state, dispatch] = useReducer<React.Reducer<IState, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      trainingFormOne: '',
      trainingFormTwo: '',
      trainingFormFour: '',
      trainingFormThree: [
        {
          name: 'monday',
          checked: false,
        },
        {
          name: 'tuesday',
          checked: false,
        },
        {
          name: 'wendesday',
          checked: false,
        },
        {
          name: 'thursday',
          checked: false,
        },
        {
          name: 'friday',
          checked: false,
        },
        {
          name: 'saturday',
          checked: false,
        },
        {
          name: 'sunday',
          checked: false,
        },
      ],
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  const handleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { checked } = e.target;
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
        required
        value={state.trainingFormOne}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='2. Hoeveel keer PT wil je per week inplannen?'
        name='trainingFormTwo'
        required
        value={state.trainingFormTwo}
        onChange={handleChange}
        hideRequiredIcon={true}
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
              label={days[item.name]}
              name='trainingFormThree'
              required
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
        required
        value={state.trainingFormFour}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
    </div>
  );
};

export default TrainingPlanForm;
