import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { CONTACT_EDITOR_EVENTS } from './ContactEditor.events';
import { useDispatch, useListener } from '../../EventHooks';
import { TContact } from '../ContactList/ContactList.types';
import { CONTACT_LIST_EVENTS } from '../ContactList/ContactList.events';

export function ContactEditor() {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState<any>(null);

  useListener(CONTACT_EDITOR_EVENTS.OPEN_CONTACT_EDITOR, (contact: TContact) => {
    setContact(contact);
    setOpen(true);
  });

  const onUpdateDispatch = useDispatch(CONTACT_LIST_EVENTS.UPDATE_CONTACT);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mb-2 text-center">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-3 text-gray-900">
                      Edit contract
                    </Dialog.Title>
                    <div className="mt-4 gap-4 grid grid-cols-1">
                      <input
                        type="text"
                        value={contact?.name}
                        onChange={(e) => {
                          setContact({ ...contact, name: e.target.value });
                        }}
                        placeholder="name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      />
                      <input
                        type="text"
                        value={contact?.email}
                        onChange={(e) => {
                          setContact({ ...contact, email: e.target.value });
                        }}
                        placeholder="name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-4 mt-4">
                  <button
                    type="button"
                    className="w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(false)}
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    className=" w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => {
                      onUpdateDispatch(contact);
                      setOpen(false);
                    }}
                  >
                    save
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
