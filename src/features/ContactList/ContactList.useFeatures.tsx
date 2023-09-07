import { useEffect, useState } from 'react';
import { useDispatch, useListener } from '../../EventHooks';

import { CONTACT_EDITOR_EVENTS } from '../ContractEditor/ContactEditor.events';
import { CONTACT_LIST_EVENTS } from './ContactList.events';

import { TContact } from './ContactList.types';
import { contacts as mockedContacts } from './ContactList.mock';

export function useListFeatures() {
  const [contacts, setContacts] = useState<TContact[]>([]);
  const [selectedContact, setSelectedContact] = useState<TContact | null>(null);

  const onContactSelect = (contact: any) => setSelectedContact(contact);

  // feature dispatchers
  const dispatchOnContactSelected = useDispatch(CONTACT_LIST_EVENTS.ON_CONTACT_SELECTED);
  const dispatchOnEdit = useDispatch(CONTACT_EDITOR_EVENTS.OPEN_CONTACT_EDITOR);

  // feature listeners
  useListener(CONTACT_LIST_EVENTS.GET_SELECTED_CONTACT, () => dispatchOnContactSelected(selectedContact));
  useListener(CONTACT_LIST_EVENTS.DESELECT_CONTACT, () => setSelectedContact(null));
  useListener(CONTACT_LIST_EVENTS.UPDATE_CONTACT, (data: TContact) => {
    const newContacts = contacts.map((contact) => (contact.id === data.id ? data : contact));
    setContacts(newContacts);
    dispatchOnContactSelected(data);
  });

  useEffect(() => dispatchOnContactSelected(selectedContact), [selectedContact]);

  useEffect(() => {
      setContacts(mockedContacts);
      setSelectedContact(mockedContacts[3]);
  }, []);

  return {
    contacts,
    selectedContact,
    onContactSelect,
    dispatchOnEdit,
  };
}
