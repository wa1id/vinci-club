import { CountdownItem } from "./CountdownItem";
import { CountdownSeparator } from "./CountdownSeparator";
import Image from "next/image";

export const Countdown = () => {
  return (
    <div className="flex">
      <div className="flex items-center h-24 mr-6">
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
        <div className="flex text-3xl">
          <CountdownItem number="05" label="DAY" />
          <CountdownSeparator />
          <CountdownItem number="12" label="HRS" />
          <CountdownSeparator />
          <CountdownItem number="05" label="MIN" />
          <CountdownSeparator />
          <CountdownItem number="05" label="SEC" />
        </div>
      </div>

      <div className="flex items-center h-24 ml-6">
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
