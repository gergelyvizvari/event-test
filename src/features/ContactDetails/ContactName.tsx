import React from 'react';
import { TContact } from '../ContactList/ContactList.types';


export function ContactName({ contact }: { contact: TContact }) {
  return (
    <div className="grid grid-cols-2">
      <div>Name</div>
      <div>{contact.name}</div>
    </div>
  );
}
