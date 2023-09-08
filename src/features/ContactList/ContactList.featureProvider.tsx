import React, { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { TContact } from './ContactList.types';
import { useDispatch, useEffectDispatch, useListener } from '../../EventHooks';
import { CONTACT_EDITOR_EVENTS } from '../ContactEditor/ContactEditor.events';
import { CONTACT_LIST_EVENTS } from './ContactList.events';

import { contacts as mockedContacts } from './ContactList.mock';

const contactListContext = createContext<any>({});

export function ListFeatureProvider({children}:PropsWithChildren) {
  const [contacts, setContacts] = useState<TContact[]>([]);
  const [selectedContact, setSelectedContact] = useState<TContact | null>(null);

  const updateSingleContact = (data: TContact) => {
    const newContacts = contacts.map((contact) => (contact.id === data.id ? data : contact));
    setContacts(newContacts);
    dispatchOnContactSelected(data);
  };

  // feature dispatchers
  const dispatchOnContactSelected = useDispatch(CONTACT_LIST_EVENTS.ON_CONTACT_SELECTED);
  const dispatchOnEdit = useDispatch(CONTACT_EDITOR_EVENTS.OPEN_CONTACT_EDITOR);

  // feature listeners
  useListener(CONTACT_LIST_EVENTS.GET_SELECTED_CONTACT, () => dispatchOnContactSelected(selectedContact));
  useListener(CONTACT_LIST_EVENTS.DESELECT_CONTACT, () => setSelectedContact(null));
  useListener(CONTACT_LIST_EVENTS.UPDATE_CONTACT, (data: TContact) => updateSingleContact(data));  
  useEffect(() => dispatchOnContactSelected(selectedContact), [selectedContact]);

  // initial state
  useEffect(() => {
    setContacts(mockedContacts);
    setSelectedContact(mockedContacts[3]);
  }, []);

  return (
    <contactListContext.Provider value={{
      contacts,
      selectedContact,
      onContactSelect:(contact: any) => setSelectedContact(contact),
      dispatchOnEdit,      
    }}>
      {children}
    </contactListContext.Provider>
  )
}

export function useListContext() {
  const context = React.useContext(contactListContext);
  if (context === undefined) {
    throw new Error('useProvider must be used within a FeatureProvider');
  }
  return context;
}