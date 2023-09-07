import React from 'react';
import { ContactList } from './features/ContactList/ContactList';
import { ContactDetails } from './features/ContactDetails/ContactDetails';
import Header from './features/Header/Header';
import { ContactEditor } from './features/ContractEditor/ContactEditor';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ContactImage } from './features/ContactImage/ContactImage';

function App() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-4 p-4">
        <ErrorBoundary component="contactList">
          <ContactList />
        </ErrorBoundary>
        <div className="flex flex-col gap-4 ">
          <ContactDetails />
          <ContactImage />
        </div>
      </div>
      <ContactEditor />
    </div>
  );
}

export default App;
