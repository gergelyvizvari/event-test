import React from 'react';
import useFeatures from './Header.useFeatures';
import { If, Then } from 'react-if';

export default function Header() {
  const { contact, dispatchDeselectContact, dispatchOnEdit } = useFeatures();

  return (
    <div className="bg-slate-400 px-12 py-4 flex justify-between gap-4">
      <div>{contact?.name ?? 'No contact selected'}</div>
      <If condition={!!contact}>
        <Then>
          <button onClick={() => dispatchOnEdit(contact)} className="ml-auto">
            edit
          </button>
          <button onClick={dispatchDeselectContact} className="">
            X
          </button>
        </Then>
      </If>
    </div>
  );
}
