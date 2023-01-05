import React, { useReducer } from 'react';
import HeadingWithUnderline from '../Heading/HeadingWithUnderline';
import Input from './Input';

interface IState {
  lifeStyleOne: string;
  lifeStyleTwo: string;
  lifeStyleThree: string;
  lifeStyleFour: string;
  lifeStyleFive: string;
}

const LifeStyleForm = () => {
  const [state, dispatch] = useReducer<React.Reducer<IState, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      lifeStyleOne: '',
      lifeStyleTwo: '',
      lifeStyleThree: '',
      lifeStyleFour: '',
      lifeStyleFive: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };

  return (
    <div className='my-20'>
      <HeadingWithUnderline
        title='LEEFSTIJL'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='1. Wat voor werk doe je en is dit een zittend of actief beroep?'
        name='lifeStyleOne'
        required
        value={state.lifeStyleOne}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='2. Geef op een schaal van 1 tot 10 aan hoe stressvol je werk naar jouw mening is?'
        name='lifeStyleTwo'
        required
        value={state.lifeStyleTwo}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='3. Zijn er nog andere stressfactoren in je dagelijkse leven?'
        name='lifeStyleThree'
        required
        value={state.lifeStyleThree}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='4. Zijn er dingen die je graag doet (bijvoorbeeld hobby’s) en hoeveel tijd besteed je hier wekelijks aan?'
        name='lifeStyleThree'
        required
        value={state.lifeStyleFour}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='5. Hoeveel uur slaap je per nacht en word je moe of uitgerust wakker?'
        name='lifeStyleThree'
        required
        value={state.lifeStyleFour}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
    </div>
  );
};

export default LifeStyleForm;
