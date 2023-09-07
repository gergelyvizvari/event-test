import React, { useState } from 'react';
import { ContactEmail } from './ContactEmail';
import { ContactName } from './ContactName';
import { Box } from '../../components/Box';
import { useFeatures } from './ContactDetails.useFeatures';
import {ErrorBoundary} from '../../components/ErrorBoundary';

export function ContactDetails() {  
  const { contact, dispatchOnEdit } = useFeatures();

  if (!contact) return null;

  return (
    <Box>
      <ErrorBoundary>
      <div className="grid grid-cols-2">
        <div>
          <ContactName contact={contact} />
          <ContactEmail contact={contact} />
        </div>
        <button className="text-gray-500 hover:text-gray-700 ml-auto" onClick={() => dispatchOnEdit(contact)}>
          edit
        </button>
      </div>
      </ErrorBoundary>
    </Box>
  );
}
