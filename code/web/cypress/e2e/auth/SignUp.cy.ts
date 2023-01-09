import { faker } from "@faker-js/faker";
import { userCredentials } from "../../../../api/src/__tests__/testData";

beforeEach(() => {
  const credentials = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  cy.wrap(credentials).as("credentials");
  cy.visit("/user/signup");
});

describe("Sign Up", () => {
  it("should greet with heading", function () {
    cy.contains("Create an account").should("be.visible");
  });

  it("should sign up", function () {
    cy.intercept("http://localhost:8000/").as("signUpReq");
    cy.signUp(
      this.credentials.name,
      this.credentials.email,
      this.credentials.password
    );

    cy.wait("@signUpReq").then((data) => {
      const { email, name, id } = data.response.body.data.userSignup;

      expect(data.response.statusCode).eq(200);
      expect(email).eq(this.credentials.email);
      expect(name).eq(this.credentials.name);
    });

    cy.contains("Signed up successfully.").should("be.visible");
    cy.location("pathname").should("eq", "/user/login");
  });

  it("should not sign up when user exists", function () {
    cy.signUp("mockedName", userCredentials.email, this.credentials.password);

    cy.contains(
      `The email ${userCredentials.email} is already registered. Please try to login.`
    );
  });

  it("should form have link to signin page", function () {
    cy.get('button[type="submit"]')
      .siblings("a")
      .should("have.attr", "href", "/user/login");
  });

  it("should display toast when request is in pending state", function () {
    const trigger = new Promise(() => {});

    cy.intercept("http://localhost:8000/", (req) =>
      trigger.then(() => {
        req.reply();
      })
    );

    cy.signUp(
      this.credentials.name,
      this.credentials.email,
      this.credentials.password
    );

    cy.contains("Signing you up, please wait...").should("be.visible");
  });
});
