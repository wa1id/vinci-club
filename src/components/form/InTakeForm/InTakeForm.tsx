import React, { useReducer } from 'react';
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

export interface IInTakeFormState {
  // in person form
  firstName: string;
  lastName: string;
  dob: string;
  gender: 'man' | 'vrouw';
  instagramAccount: string;
  phoneNumber: string;
  emailAddress: string;

  // address form
  streetNameAndHouseNumber: string;
  zipCode: string;
  placeOfResidence: string;

  // goal form
  goalOne: string;
  goalTwo: string;
  goalThree: string;
  goalFour: string;

  // background form
  backgroundOne: string;
  backgroundTwo: string;
  backgroundThree: string;
  backgroundFour: string;
  backgroundFive: string;

  // lifestyle form
  lifeStyleOne: string;
  lifeStyleTwo: string;
  lifeStyleThree: string;
  lifeStyleFour: string;
  lifeStyleFive: string;

  // training form
  trainingFormOne: string;
  trainingFormTwo: string;
  trainingFormThree: {
    name: string;
    checked: boolean;
  }[];
  trainingFormFour: string;

  // nutrition form
  nutritionOne: string;
  nutritionTwo: string;
  nutritionThree: string;
  nutritionFour: string;
  nutritionFive: string;
  nutritionSix: string;
  nutritionSeven: string;

  // medical background form
  medicalBackgroundOne: string;
  medicalBackgroundTwo: string;
  medicalBackgroundThree: string;
  medicalBackgroundFour: string;
  medicalBackgroundFive: string;
  medicalBackgroundSix: string;
  medicalBackgroundSeven: string;
  medicalBackgroundEight: string;
  medicalBackgroundNine: string;
  medicalBackgroundTen: string;
  medicalBackgroundEleven: string;
  medicalBackgroundTwelve: string;

  // terms and conditions form
  isAgree: boolean;
}

const InTakeForm = () => {
  const [state, dispatch] = useReducer<React.Reducer<IInTakeFormState, any>>(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      firstName: 'Sanjeev',
      lastName: '',
      dob: '',
      gender: 'man',
      instagramAccount: '',
      phoneNumber: '',
      emailAddress: '',
      streetNameAndHouseNumber: '',
      zipCode: '',
      placeOfResidence: '',
      goalOne: '',
      goalTwo: '',
      goalThree: '',
      goalFour: '',
      backgroundOne: '',
      backgroundTwo: '',
      backgroundThree: '',
      backgroundFour: '',
      backgroundFive: '',
      lifeStyleOne: '',
      lifeStyleTwo: '',
      lifeStyleThree: '',
      lifeStyleFour: '',
      lifeStyleFive: '',
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
      nutritionOne: '',
      nutritionTwo: '',
      nutritionThree: '',
      nutritionFour: '',
      nutritionFive: '',
      nutritionSix: '',
      nutritionSeven: '',
      medicalBackgroundOne: '',
      medicalBackgroundTwo: '',
      medicalBackgroundThree: '',
      medicalBackgroundFour: '',
      medicalBackgroundFive: '',
      medicalBackgroundSix: '',
      medicalBackgroundSeven: '',
      medicalBackgroundEight: '',
      medicalBackgroundNine: '',
      medicalBackgroundTen: '',
      medicalBackgroundEleven: '',
      medicalBackgroundTwelve: '',
      isAgree: false,
    }
  );

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

      <InPersonForm {...{ state, dispatch }} />
      <AddressForm {...{ state, dispatch }} />
      <GoalForm {...{ state, dispatch }} />
      <BackgroundForm {...{ state, dispatch }} />
      <LifeStyleForm {...{ state, dispatch }} />
      <TrainingPlanForm {...{ state, dispatch }} />
      <NutritionForm {...{ state, dispatch }} />
      <MedicalBackgroundForm {...{ state, dispatch }} />
      <TermsAndConditionsForm {...{ state, dispatch }} />
    </section>
  );
};

export default InTakeForm;
