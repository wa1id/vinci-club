import { CountdownItem } from "./CountdownItem";
import { CountdownSeparator } from "./CountdownSeparator";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export const Countdown = () => {
  const { t } = useTranslation("common");
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
          <CountdownItem number={0} label={t("Day")} />
          <CountdownSeparator />
          <CountdownItem number={0} label={t("Hrs")} />

          <CountdownSeparator />

          <CountdownItem number={0} label={t("Min")} />
          <CountdownSeparator />
          <CountdownItem number={0} label={t("Sec")} />
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
