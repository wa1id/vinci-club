import React, { useReducer, useState } from 'react';
import HeadingWithUnderline from '../../Heading/HeadingWithUnderline';
import AddressForm from './AddressForm';
import BackgroundForm from './BackgroundForm';
import GoalForm from './GoalForm';
import InPersonForm from './InPersonForm';
import LifeStyleForm from './LifeStyleForm';
import MedicalBackgroundForm from './MedicalBackgroundForm';
import NutritionForm from './NutritionForm';
import TermsAndConditionsForm from './TermsAndConditionsForm';
import TrainingPlanForm from './TrainingPlanForm';

interface IFormFieldProps {
  value: string;
  error: boolean;
}

export interface IInTakeFormState {
  // in person form
  firstName: IFormFieldProps;
  lastName: IFormFieldProps;
  dob: IFormFieldProps;
  gender: IFormFieldProps;
  instagramAccount: IFormFieldProps;
  phoneNumber: IFormFieldProps;
  emailAddress: IFormFieldProps;

  // address form
  streetNameAndHouseNumber: IFormFieldProps;
  zipCode: IFormFieldProps;
  placeOfResidence: IFormFieldProps;

  // goal form
  goalOne: IFormFieldProps;
  goalTwo: IFormFieldProps;
  goalThree: IFormFieldProps;
  goalFour: IFormFieldProps;

  // background form
  backgroundOne: IFormFieldProps;
  backgroundTwo: IFormFieldProps;
  backgroundThree: IFormFieldProps;
  backgroundFour: IFormFieldProps;
  backgroundFive: IFormFieldProps;

  // lifestyle form
  lifeStyleOne: IFormFieldProps;
  lifeStyleTwo: IFormFieldProps;
  lifeStyleThree: IFormFieldProps;
  lifeStyleFour: IFormFieldProps;
  lifeStyleFive: IFormFieldProps;

  // training form
  trainingFormOne: IFormFieldProps;
  trainingFormTwo: IFormFieldProps;
  trainingFormThree: {
    name: string;
    checked: boolean;
  }[];
  trainingFormFour: IFormFieldProps;

  // nutrition form
  nutritionOne: IFormFieldProps;
  nutritionTwo: IFormFieldProps;
  nutritionThree: IFormFieldProps;
  nutritionFour: IFormFieldProps;
  nutritionFive: IFormFieldProps;
  nutritionSix: IFormFieldProps;
  nutritionSeven: IFormFieldProps;

  // medical background form
  medicalBackgroundOne: IFormFieldProps;
  medicalBackgroundTwo: IFormFieldProps;
  medicalBackgroundThree: IFormFieldProps;
  medicalBackgroundFour: IFormFieldProps;
  medicalBackgroundFive: IFormFieldProps;
  medicalBackgroundSix: IFormFieldProps;
  medicalBackgroundSeven: IFormFieldProps;
  medicalBackgroundEight: IFormFieldProps;
  medicalBackgroundNine: IFormFieldProps;
  medicalBackgroundTen: IFormFieldProps;
  medicalBackgroundEleven: IFormFieldProps;
  medicalBackgroundTwelve: IFormFieldProps;

  // terms and conditions form
  isAgree: {
    value: boolean;
    error: string;
  };
}

const InTakeForm = () => {
  const fieldValue = {
    value: '',
    error: false,
  };

  const [state, dispatch] = useReducer<React.Reducer<IInTakeFormState, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      firstName: fieldValue,
      lastName: fieldValue,
      dob: fieldValue,
      gender: {
        value: 'man',
        error: false,
      },
      instagramAccount: fieldValue,
      phoneNumber: fieldValue,
      emailAddress: fieldValue,
      streetNameAndHouseNumber: fieldValue,
      zipCode: fieldValue,
      placeOfResidence: fieldValue,
      goalOne: fieldValue,
      goalTwo: fieldValue,
      goalThree: fieldValue,
      goalFour: fieldValue,
      backgroundOne: fieldValue,
      backgroundTwo: fieldValue,
      backgroundThree: fieldValue,
      backgroundFour: fieldValue,
      backgroundFive: fieldValue,
      lifeStyleOne: fieldValue,
      lifeStyleTwo: fieldValue,
      lifeStyleThree: fieldValue,
      lifeStyleFour: fieldValue,
      lifeStyleFive: fieldValue,
      trainingFormOne: fieldValue,
      trainingFormTwo: fieldValue,
      trainingFormFour: fieldValue,
      trainingFormThree: [
        {
          name: 'Maandag',
          checked: false,
        },
        {
          name: 'Dinsdag',
          checked: false,
        },
        {
          name: 'Woensdag',
          checked: false,
        },
        {
          name: 'Donderdag',
          checked: false,
        },
        {
          name: 'Vrijdag',
          checked: false,
        },
        {
          name: 'Zaterdag',
          checked: false,
        },
        {
          name: 'Zondag',
          checked: false,
        },
      ],
      nutritionOne: fieldValue,
      nutritionTwo: fieldValue,
      nutritionThree: fieldValue,
      nutritionFour: fieldValue,
      nutritionFive: fieldValue,
      nutritionSix: fieldValue,
      nutritionSeven: fieldValue,
      medicalBackgroundOne: fieldValue,
      medicalBackgroundTwo: fieldValue,
      medicalBackgroundThree: fieldValue,
      medicalBackgroundFour: fieldValue,
      medicalBackgroundFive: fieldValue,
      medicalBackgroundSix: fieldValue,
      medicalBackgroundSeven: fieldValue,
      medicalBackgroundEight: fieldValue,
      medicalBackgroundNine: fieldValue,
      medicalBackgroundTen: fieldValue,
      medicalBackgroundEleven: fieldValue,
      medicalBackgroundTwelve: fieldValue,
      isAgree: {
        value: false,
        error: '',
      },
    }
  );

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
  };

  return (
    <section className='px-4 my-6'>
      <div className='mb-16'>
        <HeadingWithUnderline
          title='intake formulier'
          size='large'
        />
        <p className='md:text-xl  text-secondary uppercase mt-2'>{`Let's Go!`}</p>

        <p className='my-4'>
          Ben jij klaar om de meest fitte en zelfverzekerde versie van jezelf te
          worden? Vul onderstaande vragen dan zo eerlijk mogelijk in, zodat ik
          een goed beeld krijg van wie je bent en wat jouw doelen zijn. Het is
          belangrijk dat je dit formulier minimaal één dag voor aanvang van je
          intake ingevuld naar mij teruggestuurd hebt.
        </p>

        <p className='text-sm my-4'>
          Let op: indien een vraag niet van toepassing is op jouw situatie vul
          dan NVT in.
        </p>
      </div>

      <form>
        <InPersonForm {...{ state, dispatch }} />
        <AddressForm {...{ state, dispatch }} />
        <GoalForm {...{ state, dispatch }} />
        <BackgroundForm {...{ state, dispatch }} />
        <LifeStyleForm {...{ state, dispatch }} />
        <TrainingPlanForm {...{ state, dispatch }} />
        <NutritionForm {...{ state, dispatch }} />
        <MedicalBackgroundForm {...{ state, dispatch }} />
        <TermsAndConditionsForm {...{ state, dispatch }} />
      </form>
    </section>
  );
};

export default InTakeForm;
