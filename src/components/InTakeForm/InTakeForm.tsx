import React from 'react';
import HeadingWithUnderline from '../Heading/HeadingWithUnderline';
import AddressForm from './AddressForm';
import GoalForm from './GoalForm';
import InPersonForm from './InPersonForm';

const InTakeForm = () => {
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

      <InPersonForm />
      <AddressForm />
      <GoalForm />
    </section>
  );
};

export default InTakeForm;
