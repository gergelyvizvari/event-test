import React from 'react';
import useFeatures from './Header.useFeatures';
import { If, Then } from 'react-if';

export default function Header() {
  const { contact, dispatchDeselectContact, dispatchOpenEditContact } = useFeatures();

  return (
    <div className="bg-slate-400 px-12 py-4 flex justify-between gap-4">
      <div>{contact?.name ?? 'No contact selected'}</div>
      <If condition={!!contact}>
        <Then>
          <button onClick={() => dispatchOpenEditContact(contact)} className='ml-auto mr-2'>
            edit
          </button>
          <button onClick={dispatchDeselectContact}>
            Close
          </button>
        </Then>
      </If>
    </div>
  );
}
