import React, { useReducer } from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import { IInTakeFormState } from './InTakeForm';

const NutritionForm = ({
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
        title='VOEDING'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='1. Hoeveel maaltijden en tussendoortjes eet je per dag?'
        name='nutritionOne'
        required
        value={state.nutritionOne}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='2. Hoeveel water drink je per dag?'
        name='nutritionTwo'
        required
        value={state.nutritionTwo}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='3. Ontbijt je iedere ochtend? Zo ja, wat eet je als ontbijt?'
        name='nutritionThree'
        required
        value={state.nutritionThree}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='4. Heb je enig idee van de hoeveelheid calorieën die je per dag eet? Zo ja, hoeveel?'
        name='nutritionFour'
        required
        value={state.nutritionFour}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='5. Wat zou je zelf “echt” willen veranderen aan jouw voedingspatroon?'
        name='nutritionFive'
        required
        value={state.nutritionFive}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='6. Zijn er op het gebied van voeding dingen die je echt niet lust?'
        name='nutritionSix'
        required
        value={state.nutritionSix}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='7. Heb je eventuele voedselallergieën? Zo ja, welke?'
        name='nutritionSeven'
        required
        value={state.nutritionSeven}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
    </div>
  );
};

export default NutritionForm;
