/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare namespace Cypress {
  interface Chainable {
    loginViaUI(email: string, password: string): Chainable<void>;
    loginViaAPI(email: string, password: string): Chainable<void>;
    signUp(name: string, email: string, password: string): Chainable<void>;
    removeUser(id: number): Chainable<void>;
    getProducts(): Chainable<void>;
    getProductRelated(id: number): Chainable<any>;
  }
}

Cypress.Commands.add("signUp", (name, email, password) => {
  cy.get('input[placeholder="Name"').type(name);
  cy.get('input[placeholder="Email"').type(email);
  cy.get('input[placeholder="Password"').type(password);
  cy.get("form").submit();
});

Cypress.Commands.add("loginViaUI", (email, password) => {
  cy.get('input[placeholder="Email"').type(email);
  cy.get('input[placeholder="Password"').type(password);
  cy.get("form").submit();
});

Cypress.Commands.add("loginViaAPI", (email, password) => {
  cy.request({
    method: "POST",
    url: "http://localhost:8000",
    body: {
      query: `query { userLogin (email: "${email}", password: "${password}") { user {name, email, role}, token } }`,
    },
  }).then((res) => {
    const { token, user } = res.body.data.userLogin;

    cy.window().then((win) => {
      win.localStorage.setItem("token", token);
      win.localStorage.setItem("user", JSON.stringify(user));
    });
    cy.setCookie("auth", JSON.stringify({ token, user }));
  });
});

Cypress.Commands.add("getProducts", () => {
  cy.request({
    method: "POST",
    url: "http://localhost:8000",
    body: {
      query: `query { products { id, name, slug, description, image, createdAt } }`,
    },
  }).then((res) => cy.wrap(res.body.data.products).as("products"));
});

Cypress.Commands.add("getProductRelated", (productId) => {
  cy.request({
    method: "POST",
    url: "http://localhost:8000",
    body: {
      query: `query ($productId: Int) { productsRelated (productId: $productId) { id, name, slug, description, image } }`,
      variables: {
        productId,
      },
    },
  }).then((res) => res.body.data.productsRelated);
});
