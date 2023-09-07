import { useState } from 'react';
import { useEffectDispatch, useListener } from '../../EventHooks';
import { CONTACT_LIST_EVENTS } from '../ContactList/ContactList.events';
import { TContact } from '../ContactList/ContactList.types';

export function useFeatures() {
  const [contact, setContact] = useState<TContact | null>(null);

  useListener(CONTACT_LIST_EVENTS.ON_CONTACT_SELECTED, (contact: any) => setContact(contact));
  useEffectDispatch(CONTACT_LIST_EVENTS.GET_SELECTED_CONTACT);

  return {
    contact,
  };
}
