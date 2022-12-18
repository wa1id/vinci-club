import { Fragment } from "react";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "./Button/Button";
import logo from "public/logo.svg";
import { useTranslation } from "next-i18next";

export default function Navbar() {
  const { t } = useTranslation("common");

  const navigationData = [
    { id: 1, name: t("The Club"), href: "#", disabled: true },
    {
      id: 2,
      name: t("Personal Training"),
      href: "#",
      disabled: true,
    },
    { id: 3, name: t("Group lessons"), href: "/calendar", disabled: true },
    // { id: 4, name: "Abonnementen", href: "#", disabled: true },
    // { id: 5, name: "Gezondheid", href: "#", disabled: true },
    // { id: 6, name: "Ladies only", href: "#", disabled: true },
    { id: 7, name: t("Contact"), href: "/contact", disabled: true },
  ];

  return (
    <Popover className="relative bg-white z-50">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-4 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Vinci Club</span>
              <Image style={{ maxWidth: "250px" }} src={logo} alt="logo" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
            {navigationData.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-primary hover:text-gray-400 transition-colors duration-200 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </Popover.Group>
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <Link href="/signup">
              <Button variant="primary">{t("Become member")}</Button>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image style={{ maxWidth: "150px" }} src={logo} alt="logo" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light">
                    <span className="sr-only">{t("Close menu")}</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                {navigationData.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <Link href="/signup">
                  <Button className="w-full text-center" variant="primary">
                    {t("Become member")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
