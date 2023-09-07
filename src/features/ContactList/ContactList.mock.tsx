import { TContact } from './ContactList.types';
import { faker } from '@faker-js/faker';

export const contacts: TContact[] = new Array(10).fill(0).map((_, i) => {
  return {
    id: i,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    picture: faker.image.url({ width: 100, height: 100 }),
  };
});
