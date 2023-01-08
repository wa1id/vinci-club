import Link from 'next/link';
import React from 'react';
import HeadingWithUnderline from 'src/components/Heading/HeadingWithUnderline';
import ErrorText from '../ErrorText';
import RadioOrCheckBox from '../RadioOrCheckBox';
import { IInTakeFormState } from 'src/typings/intakeform';
import { Button } from 'src/components/Button/Button';

const TermsAndConditionsForm = ({
  state,
  dispatch,
  loading
}: {
  state: IInTakeFormState;
  dispatch: React.Dispatch<any>;
  loading: boolean;
}) => {
  return (
    <div className="my-20">
      <HeadingWithUnderline
        title="ALGEMENE VOORWAARDEN"
        lineClassName="w-60 p-[0.2rem]"
        size="medium"
      />
      <p className="my-6">
        Ik heb dit formulier naar alle eerlijkheid ingevuld en ik ga akkoord met
        de{' '}
        <Link
          href="/terms-and-conditions"
          target="_blank"
          className="underline"
        >
          algemene voorwaarden
        </Link>{' '}
        en{' '}
        <Link href="/privacy" target="_blank" className="underline">
          privacybeleid
        </Link>
        <sup>*</sup>
      </p>

      {state.isAgree.error && (
        <ErrorText text="Geef aan dat u de voorwaarden en het privacybeleid hebt gelezen en ermee akkoord gaat." />
      )}

      <RadioOrCheckBox
        label="Ik ga akkoord met de algemene voorwaarden en het privacybeleid."
        type="checkbox"
        name="agree"
        checked={state.isAgree.value}
        onChange={() =>
          dispatch({
            isAgree: {
              value: !state.isAgree.value,
              error: false
            }
          })
        }
        required
        className="text-sm"
      />
      <div className="my-6">
        <Button loading={loading} variant="primary" type="submit">
          verstuur
        </Button>
      </div>
    </div>
  );
};

export default TermsAndConditionsForm;
