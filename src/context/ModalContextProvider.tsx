import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useContext, useRef, useState } from 'react';
import { Button } from 'src/components/Button/Button';

type UseModalShowReturnType = {
  show: boolean;
  setShow: (value: boolean) => void;
  onHide: () => void;
};

const useModalShow = (): UseModalShowReturnType => {
  const [show, setShow] = useState(false);

  const handleOnHide = () => {
    setShow(false);
  };

  return {
    show,
    setShow,
    onHide: handleOnHide
  };
};

type ModalContextType = {
  showConfirmation: (
    title: string,
    message: string | JSX.Element
  ) => Promise<boolean>;
};

type ConfirmationModalContextProviderProps = {
  children: React.ReactNode;
};

const ConfirmationModalContext = React.createContext<ModalContextType>(
  {} as ModalContextType
);

const ModalContextProvider: React.FC<
  ConfirmationModalContextProviderProps
> = props => {
  const { setShow, show, onHide } = useModalShow();
  const [content, setContent] = useState<{
    title: string;
    message: string | JSX.Element;
  } | null>();
  const resolver = useRef<Function>();

  const handleShow = (
    title: string,
    message: string | JSX.Element
  ): Promise<boolean> => {
    setContent({
      title,
      message
    });
    setShow(true);
    return new Promise(function (resolve) {
      resolver.current = resolve;
    });
  };

  const modalContext: ModalContextType = {
    showConfirmation: handleShow
  };

  const handleOk = () => {
    resolver.current && resolver.current(true);
    onHide();
  };

  const handleCancel = () => {
    resolver.current && resolver.current(false);
    onHide();
  };

  return (
    <ConfirmationModalContext.Provider value={modalContext}>
      {props.children}

      {content && (
        <Transition appear show={show} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={handleCancel}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="div"
                      className="text-xl font-medium leading-6 text-gray-900"
                    >
                      {content.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p>{content.message}</p>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Button variant="primary" onClick={handleOk}>
                        OK
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </ConfirmationModalContext.Provider>
  );
};

const useModalContext = (): ModalContextType =>
  useContext(ConfirmationModalContext);

export { useModalShow, useModalContext };

export default ModalContextProvider;
