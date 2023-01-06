import React, { useReducer, useState } from 'react';
import { IInTakeFormState } from 'src/typings/intakeform';
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

  const validateFields = [
    'firstName',
    'lastName',
    'dob',
    'gender',
    'phoneNumber',
    'emailAddress',
    'streetNameAndHouseNumber',
    'zipCode',
    'placeOfResidence',
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams: Record<string, any> = {};

    // validate fields and set error
    for (const value of Object.entries(state)) {
      const [fieldName, data] = value;

      if (
        validateFields.includes(fieldName) &&
        data?.value === '' &&
        !['trainingFormThree', 'isAgree'].includes(fieldName)
      ) {
        dispatch({
          [fieldName]: {
            ...data,
            error: true,
          },
        });

        // redirect user to error field
        const a = document.createElement('a')
        a.href=`#${fieldName}`
        a.click()

        return;
      }
    }

    for (const value of Object.entries(state)) {
      const [fieldName, data] = value;

      if (
        validateFields.includes(fieldName) &&
        data?.value !== '' &&
        !['trainingFormThree', 'isAgree'].includes(fieldName)
      ) {
        dispatch({
          [fieldName]: {
            ...data,
            error: false,
          },
        });

        if (!['trainingFormThree', 'isAgree'].includes(fieldName)) {
          templateParams[fieldName] = data?.value;
        }
      }
    }

    if (!state.isAgree.value) {
      dispatch({
        isAgree: {
          ...state.isAgree,
          error: true,
        },
      });
      return;
    }

    const templateParamsWithTrainingFormThree = {
      ...templateParams,
      trainingFormThree: state.trainingFormThree
        .filter((item) => item.checked)
        .map((item) => item.name)
        .join(', '),
    };

    // filter out fields with undefined or no value
    console.log(templateParamsWithTrainingFormThree)
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

      <form onSubmit={handleSubmit}>
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
