import { faker } from "@faker-js/faker";

export const getFakerData = {
  firstName: () => faker.person.firstName(),
  lastName: () => faker.person.lastName(),
  postalCode: () => faker.location.zipCode(),
};
