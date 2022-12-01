import { FC } from "react";
import Link from "next/link";

interface Props {
  label?: string | null;
}

export const SocialFollows: FC<Props> = ({ label }) => {
  return (
    <div className="flex items-center pb-12">
      {label && (
        <>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.671 8.76679L8.94773 16.8669L2.28356e-06 16.8669L6.87563 8.76679L9.13541e-07 0.446978L8.94773 0.133023L16.671 8.76679Z"
              fill="#BDD3E3"
            />
          </svg>

          <div className="uppercase font-bold text-primary-light text-lg mx-4">
            {label}
          </div>
        </>
      )}

      <div className="flex space-x-4">
        <Link
          href="https://www.instagram.com/vinci_club/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full group hover:bg-primary-lighter cursor-pointer transition-colors ease-in-out duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary-lighter group-hover:text-primary transition-colors"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
        </Link>

        <Link
          href="https://www.facebook.com/profile.php?id=100087136536172"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full group hover:bg-primary-lighter cursor-pointer transition-colors ease-in-out duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary-lighter group-hover:text-primary transition-colors"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};
