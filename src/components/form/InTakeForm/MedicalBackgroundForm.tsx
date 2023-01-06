import React from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import Input from '../Input';
import { IInTakeFormState } from './InTakeForm';

const MedicalBackgroundForm = ({
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
        title='MEDISCHE ACHTERGROND'
        lineClassName='w-32 p-[0.2rem]'
        size='medium'
      />
      <Input
        label='1. Heb je op dit moment last van blessures? Zo ja, waar heb je last van?'
        name='medicalBackgroundOne'
        required
        value={state.medicalBackgroundOne}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='2. Heb je in het verleden ooit een ernstige blessure gehad? Zo ja, wat voor blessure(s)?'
        name='medicalBackgroundTwo'
        required
        value={state.medicalBackgroundTwo}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='3. Ben je in het verleden ooit geopereerd? Zo ja, wat voor operatie?'
        name='medicalBackgroundThree'
        required
        value={state.medicalBackgroundThree}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='4. Heb je last van een hoge bloeddruk?'
        name='medicalBackgroundFour'
        required
        value={state.medicalBackgroundFour}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='5. Heb je last van astma/bronchitis?'
        name='medicalBackgroundFive'
        required
        value={state.medicalBackgroundFive}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='6. Heb je in het verleden hartproblemen gehad?'
        name='medicalBackgroundSix'
        required
        value={state.medicalBackgroundSix}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='7. Heb je andere gezondheidsproblemen? Zo ja, welke?'
        name='medicalBackgroundSeven'
        required
        value={state.medicalBackgroundSeven}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='8. Gebruik je medicijnen? Zo ja, waarvoor?'
        name='medicalBackgroundEight'
        required
        value={state.medicalBackgroundEight}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='9. Heb je ooit een epileptische aanval gehad? Zo ja, wanneer voor het laatst?'
        name='medicalBackgroundNine'
        required
        value={state.medicalBackgroundNine}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='10. Heb je ooit een negatief sportadvies gehad van een arts? Zo ja, waarvoor?'
        name='medicalBackgroundTen'
        required
        value={state.medicalBackgroundTen}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='11. Rook je? Zo ja, hoeveel sigaretten per dag?'
        name='medicalBackgroundEleven'
        required
        value={state.medicalBackgroundEleven}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
      <Input
        label='12. Drink je alcohol? Zo ja, wat en hoeveel glazen per dag?'
        name='medicalBackgroundTwelve'
        required
        value={state.medicalBackgroundTwelve}
        onChange={handleChange}
        hideRequiredIcon={true}
      />
    </div>
  );
};

export default MedicalBackgroundForm;
