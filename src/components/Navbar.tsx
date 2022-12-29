import { Fragment, useState } from "react";
import Image from "next/image";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "./Button/Button";
import logo from "public/logo.svg";
import { useTranslation } from "next-i18next";
import { NextLink } from "./NextLink/NextLink";

export default function Navbar() {
  const { t } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationData = [
    // { id: 1, name: t("The Club"), href: "/club", disabled: true },
    { id: 4, name: "Prijzen", href: "/prijzen", disabled: true },
    // {
    //   id: 2,
    //   name: t("Personal Training"),
    //   href: "#",
    //   disabled: true,
    // },
    { id: 3, name: t("Group lessons"), href: "/calendar", disabled: true },

    // { id: 5, name: "Gezondheid", href: "#", disabled: true },
    // { id: 6, name: "Ladies only", href: "#", disabled: true },
    { id: 7, name: t("Contact"), href: "/contact", disabled: true },
  ];

  const club = [
    { name: "Kickboks", link: "/kickboks" },
    {
      name: "Ladies only",
      link: "/ladies-only",
    },
  ];

  return (
    <Popover className="relative bg-white z-50">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-4 xl:justify-start xl:space-x-10">
          <div className="flex justify-start xl:w-0 xl:flex-1">
            <Link href="/">
              <span className="sr-only">Vinci Club</span>
              <Image style={{ maxWidth: "250px" }} src={logo} alt="logo" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 xl:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover className="relative hidden xl:block">
            <Popover.Button className="text-primary hover:text-gray-400 transition-colors duration-200 ease-in-out">
              De Club
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-20 drop-shadow-2xl w-max">
                {({ close }) => (
                  <div className="flex flex-col text-primary bg-white rounded-md space-y-2 p-4 mt-2">
                    {club.map((item) => (
                      <NextLink
                        key={item.name}
                        href={item.link}
                        onClick={() => close()}
                      >
                        <div className="flex space-x-2 p-2 hover:bg-black hover:text-white rounded-md transition-all">
                          <span>{item.name}</span>
                        </div>
                      </NextLink>
                    ))}
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover.Group as="nav" className="hidden space-x-10 xl:flex">
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
          <div className="hidden items-center justify-end xl:flex xl:flex-1 xl:w-0">
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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition xl:hidden"
        >
          {({ close }) => (
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      style={{ maxWidth: "150px" }}
                      src={logo}
                      alt="logo"
                    />
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
                  <Disclosure>
                    {({ close }) => (
                      <>
                        <Disclosure.Button className="block rounded-md text-primary text-base font-medium w-full text-left">
                          De Club
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          <div className="flex flex-col bg-white rounded-md space-y-2 text-primary">
                            {club.map((item) => (
                              <NextLink
                                key={item.name}
                                href={item.link}
                                onClick={() => {
                                  close();
                                  setIsMenuOpen(false);
                                }}
                              >
                                <div className="flex space-x-2 p-2 hover:bg-gray-100 rounded-md">
                                  <span>{item.name}</span>
                                </div>
                              </NextLink>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {navigationData.map((item) => (
                    <NextLink
                      key={item.id}
                      href={item.href}
                      onClick={() => close()}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </NextLink>
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
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
