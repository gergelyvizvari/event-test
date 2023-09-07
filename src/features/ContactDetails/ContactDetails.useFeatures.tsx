import { useState } from 'react';
import { useDispatch, useEffectDispatch, useListener } from '../../EventHooks';
import { TContact } from '../ContactList/ContactList.types';
import { CONTACT_LIST_EVENTS } from '../ContactList/ContactList.events';
import { CONTACT_EDITOR_EVENTS } from '../ContractEditor/ContactEditor.events';

export function useFeatures() {
  const [contact, setContact] = useState<TContact | null>(null);

  useListener(CONTACT_LIST_EVENTS.ON_CONTACT_SELECTED, (contact: any) => setContact(contact));
  useEffectDispatch(CONTACT_LIST_EVENTS.GET_SELECTED_CONTACT);
  const dispatchOnEdit = useDispatch<TContact>(CONTACT_EDITOR_EVENTS.OPEN_CONTACT_EDITOR);

  return {
    contact,
    dispatchOnEdit,
  };
}
