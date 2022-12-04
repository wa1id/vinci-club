export interface BecomeMember {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  interestedIn: {
    name: string;
    checked: boolean;
  }[];
  address: {
    street: string;
    city: string;
    zip: string;
  };
  referenceClub?: string;
  agree: boolean;
}
