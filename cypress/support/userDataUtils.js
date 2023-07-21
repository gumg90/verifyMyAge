import { faker } from '@faker-js/faker'
const web = {
    email1:faker.person.firstName() + "@verifymyage.com",
    name1:faker.person.fullName(),
    userRegistered:faker.person.firstName() + "@verifymyage.com",
    userToTransfer:faker.person.firstName() + "@verifymyage.com",
    password:"senha123"
};

const api = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.number.int().toString(),
    administrador: "true"
};


export { web, api }