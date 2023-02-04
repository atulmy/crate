import { faker } from "@faker-js/faker";
import { curry } from "cypress/types/lodash";
import { userCredentials } from "../../../../api/src/__tests__/testData";
import { aliasQuery, setResponseLoadingState } from "../../support/testUtils";

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
    cy.intercept("http://localhost:8000/", (req) =>
      aliasQuery(req, "userSignup")
    );
    cy.signUp(
      this.credentials.name,
      this.credentials.email,
      this.credentials.password
    );

    cy.wait("@gqluserSignupQuery").then((data) => {
      const { email, name } = data.response.body.data.userSignup;

      expect(data.response.statusCode).eq(200);
      expect(email).eq(this.credentials.email);
      expect(name).eq(this.credentials.name);
    });

    cy.contains("Signed up successfully.").should("be.visible");
    cy.location("pathname").should("eq", "/user/login");
  });

  it("should not sign up when user exists", function () {
    cy.appMethod("setState", {
      user: {
        name: "mockedName",
        password: userCredentials.password,
        email: userCredentials.email,
      },
    }).then(() => {
      cy.get("form").submit();
    });

    cy.contains(
      `The email ${userCredentials.email} is already registered. Please try to login.`
    );
  });

  it("should form have link to signin page", function () {
    cy.get('button[type="submit"]')
      .siblings("a")
      .should("have.attr", "href", "/user/login");
  });

  it("should display loading info in toast when request is in pending state", function () {
    const sendResponse = setResponseLoadingState("userSignup");
    cy.appMethod("setState", {
      user: {
        name: this.credentials.name,
        password: this.credentials.password,
        email: this.credentials.email,
      },
    });
    cy.get("form").submit();

    cy.contains("Signing you up, please wait...")
      .should("be.visible")
      .then(sendResponse);
  });

  it("should display generic toast on request error", function () {
    cy.intercept("http://localhost:8000/", (req) => {
      aliasQuery(req, "userSignup");

      req.reply({ statusCode: 404 });
    });

    cy.appMethod("setState", {
      user: {
        name: "name",
        password: userCredentials.password,
        email: userCredentials.email,
      },
    }).then(() => {
      cy.get("form").submit();
    });

    cy.contains(
      "There was some error signing you up. Please try again."
    ).should("be.visible");
  });
});
