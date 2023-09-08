import { useState } from 'react';
import { useDispatch, useEffectDispatch, useListener } from '../../EventHooks';
import { CONTACT_LIST_EVENTS } from '../ContactList/ContactList.events';
import { CONTACT_EDITOR_EVENTS } from '../ContactEditor/ContactEditor.events';
import { TContact } from '../ContactList/ContactList.types';

export default function useFeatures() {
  const [contact, setContact] = useState<TContact | null>(null);

  const dispatchDeselectContact = useDispatch(CONTACT_LIST_EVENTS.DESELECT_CONTACT);
  const dispatchOpenEditContact = useDispatch(CONTACT_EDITOR_EVENTS.OPEN_CONTACT_EDITOR);

  useEffectDispatch(CONTACT_LIST_EVENTS.GET_SELECTED_CONTACT);
  useListener(CONTACT_LIST_EVENTS.ON_CONTACT_SELECTED, (contact: TContact | null) => setContact(contact));

  return {
    contact,
    dispatchDeselectContact,
    dispatchOpenEditContact,
  };
}
