const express = require("express");
const app = express();
const port = 8000;
// import { faker } from "@faker-js/faker";
const faker = require("@faker-js/faker");


class User {
    constructor() {
        (this.firstName = faker.name.findName())
        // (this.lastName = faker.name.lastName()),
        // (this.phoneNumber = faker.phone.phoneNumber()),
        // (this.email = faker.internet.email()),
        // (this.password = faker.internet.password());
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
        };
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({ user: new User(), company: new Company() });
});


app.listen(port, () => console.log(`Listening on port: ${port}`));