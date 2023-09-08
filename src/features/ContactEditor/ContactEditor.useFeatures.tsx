import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { CONTACT_EDITOR_EVENTS } from './ContactEditor.events';
import { useDispatch, useListener } from '../../EventHooks';
import { TContact } from '../ContactList/ContactList.types';
import { CONTACT_LIST_EVENTS } from '../ContactList/ContactList.events';

export function useFeatures() {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState<any>(null);

  useListener(CONTACT_EDITOR_EVENTS.OPEN_CONTACT_EDITOR, (contact: TContact) => {
    setContact(contact);
    setOpen(true);
  });

  const onUpdateDispatch = useDispatch(CONTACT_LIST_EVENTS.UPDATE_CONTACT);

  return {
    open,
    contact,
    setContact,
    setOpen,    
    onUpdateDispatch,
  };
}
