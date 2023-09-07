import React from 'react';
import { Box } from '../../components/Box';
import { useListFeatures } from './ContactList.useFeatures';
import clsx from 'clsx';

const className = {
  contactRow: `border b-2 rounded-md p-4 gap-2 hover:bg-gray-200 cursor-pointer flex justify-between`,
  button: `text-gray-500 hover:text-gray-700`,
};

export function ContactList() {
  const { contacts, selectedContact, onContactSelect, dispatchOnEdit } = useListFeatures();

  return (
    <Box>
      <div className="grid gap-1">
        {contacts.map((contact) => {
          const isSelected = selectedContact?.id === contact.id;

          return (
            <div key={contact.id} className={clsx(className.contactRow, isSelected && 'bg-gray-200')} onClick={() => onContactSelect(contact)}>
              <div>
                <div>{contact.name}</div>
                <div>{contact.email}</div>
              </div>
              <button className={className.button} type="button" onClick={() => dispatchOnEdit(contact)}>
                edit
              </button>
            </div>
          );
        })}
      </div>
    </Box>
  );
}
