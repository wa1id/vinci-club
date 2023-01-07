export interface PersonalTrainer {
  image: string | StaticImageData;
  name: string;
  title: string;
  description: string;
  socials?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  placeholder?: boolean;
}
