import React from 'react';
import { Box } from '../../components/Box';
import { useFeatures } from './ContactImage.useFeatures';

export function ContactImage() {  
  const { contact } = useFeatures();

  if (!contact) return null;

  return (
    <Box>      
      <img src={contact.picture} alt="contact" />
    </Box>
  );
}
