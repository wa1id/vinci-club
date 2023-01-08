import React from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import { IInTakeFormState } from 'src/typings/intakeform';

const LifeStyleForm = ({
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
        title='LEEFSTIJL'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='1. Wat voor werk doe je en is dit een zittend of actief beroep?'
        name='lifeStyleOne'
        required={false}
        {...{ ...state.lifeStyleOne }}
        onChange={handleChange}
        hideRequiredIcon
      />
      <Input
        label='2. Geef op een schaal van 1 tot 10 aan hoe stressvol je werk naar jouw mening is?'
        name='lifeStyleTwo'
        required={false}
        {...{ ...state.lifeStyleTwo }}
        onChange={handleChange}
        hideRequiredIcon
      />
      <Input
        label='3. Zijn er nog andere stressfactoren in je dagelijkse leven?'
        name='lifeStyleThree'
        required={false}
        {...{ ...state.lifeStyleThree }}
        onChange={handleChange}
        hideRequiredIcon
      />
      <Input
        label='4. Zijn er dingen die je graag doet (bijvoorbeeld hobby’s) en hoeveel tijd besteed je hier wekelijks aan?'
        name='lifeStyleFour'
        required={false}
        {...{ ...state.lifeStyleFour }}
        onChange={handleChange}
        hideRequiredIcon
      />
      <Input
        label='5. Hoeveel uur slaap je per nacht en word je moe of uitgerust wakker?'
        name='lifeStyleFive'
        required={false}
        {...{ ...state.lifeStyleFive }}
        onChange={handleChange}
        hideRequiredIcon
      />
    </div>
  );
};

export default LifeStyleForm;
