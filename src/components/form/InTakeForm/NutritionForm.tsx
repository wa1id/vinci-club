import React from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import { IInTakeFormState } from 'src/typings/intakeform';

const NutritionForm = ({
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
        title='VOEDING'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='1. Hoeveel maaltijden en tussendoortjes eet je per dag?'
        name='nutritionOne'
        required={false}
        {...{ ...state.nutritionOne }}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='2. Hoeveel water drink je per dag?'
        name='nutritionTwo'
        required={false}
        {...{ ...state.nutritionTwo }}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='3. Ontbijt je iedere ochtend? Zo ja, wat eet je als ontbijt?'
        name='nutritionThree'
        required={false}
        {...{ ...state.nutritionThree }}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='4. Heb je enig idee van de hoeveelheid calorieën die je per dag eet? Zo ja, hoeveel?'
        name='nutritionFour'
        required={false}
        {...{ ...state.nutritionFour }}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='5. Wat zou je zelf “echt” willen veranderen aan jouw voedingspatroon?'
        name='nutritionFive'
        required={false}
        {...{ ...state.nutritionFive }}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='6. Zijn er op het gebied van voeding dingen die je echt niet lust?'
        name='nutritionSix'
        required={false}
        {...{ ...state.nutritionSix }}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='7. Heb je eventuele voedselallergieën? Zo ja, welke?'
        name='nutritionSeven'
        required={false}
        {...{ ...state.nutritionSeven }}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
    </div>
  );
};

export default NutritionForm;
