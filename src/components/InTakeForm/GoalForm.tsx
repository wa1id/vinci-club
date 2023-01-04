import React, { useReducer } from 'react';
import HeadingWithUnderline from '../Heading/HeadingWithUnderline';
import Input from './Input';

interface IState {
  goalOne: string;
  goalTwo: string;
  goalThree: string;
  goalFour: string;
}

const GoalForm = () => {
  const [state, dispatch] = useReducer<React.Reducer<IState, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      goalOne: '',
      goalTwo: '',
      goalThree: '',
      goalFour: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  return <div className='my-20'>
    <HeadingWithUnderline
      title='DOELSTELLING'
      lineClassName='w-40 p-[0.2rem]'
      size='medium'
    />
    <Input
      label='1. Noem in volgorde van belang wat jouw doelen zijn de komende periode?'
      name='goalOne'
      required
      value={state.goalOne}
      onChange={handleChange}
    />
    <Input
      label='2. Hoe denk jij dat ik jou het beste kan helpen om je doelen te bereiken?'
      name='goalTwo'
      required
      value={state.goalTwo}
      onChange={handleChange}
    />
    <Input
      label='3. Zijn er obstakels die het bereiken van je doelen in de weg kunnen staan?'
      name='goalThree'
      required
      value={state.goalThree}
      onChange={handleChange}
    />
    <Input
      label='4. Wat heeft je doen besluiten om nu met een Personal Trainer aan de slag te gaan?'
      name='goalFour'
      required
      value={state.goalFour}
      onChange={handleChange}
    />
  </div>
};

export default GoalForm;
