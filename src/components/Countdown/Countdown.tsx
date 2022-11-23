import { CountdownItem } from "./CountdownItem";
import { CountdownSeparator } from "./CountdownSeparator";
import Image from "next/image";

export const Countdown = () => {
  return (
    <div className="flex grow justify-center">
      <div className="hidden sm:flex items-center h-24 mr-6">
        <Image
          className="scale-x-[-1]"
          width={30}
          height={30}
          style={{ height: "fit-content", maxWidth: "fit-content" }}
          src="/chevron.png"
          alt=""
        />
      </div>
      <div className="flex justify-center font-drukwide text-primary-light">
        <div className="grid grid-cols-2 gap-6 sm:gap-0 sm:flex text-3xl">
          <CountdownItem number="05" label="DAY" />
          <CountdownSeparator />
          <CountdownItem number="12" label="HRS" />

          <CountdownSeparator />

          <CountdownItem number="05" label="MIN" />
          <CountdownSeparator />
          <CountdownItem number="05" label="SEC" />
        </div>
      </div>

      <div className="hidden sm:flex items-center h-24 ml-6">
        <Image
          width={30}
          height={30}
          style={{ height: "fit-content", maxWidth: "fit-content" }}
          src="/chevron.png"
          alt=""
        />
      </div>
    </div>
  );
};
