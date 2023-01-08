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
