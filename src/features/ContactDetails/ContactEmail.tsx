import React from 'react';
import { TContact } from '../ContactList/ContactList.types';

export function ContactEmail({ contact }: { contact: TContact }) {
  return (
    <div className="grid grid-cols-2">
      <div>Email: </div>
      <div>{contact.email}</div>
    </div>
  );
}
