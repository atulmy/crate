import { symbol } from "prop-types";
import {
  userCredentials,
  adminCredentials,
} from "../../../../api/src/__tests__/testData";
import { setResponseLoadingState } from "../../support/testUtils";

beforeEach(() => {
  const wrongEmail = userCredentials.email.slice(0, -1);
  const wrongPassword = userCredentials.password.slice(0, -1);

  cy.wrap({ wrongEmail, wrongPassword }).as("wrongCredentials");
  cy.visit("/user/login");
});

describe("Sign In", () => {
  it("should greet with heading", function () {
    cy.get("h3").should("have.text", "Login to your account");
  });

  it("should sign in as normal user", function () {
    cy.loginViaUI(userCredentials.email, userCredentials.password);

    cy.contains("Crates for everyone!").should("be.visible");
    cy.location("pathname").should("eq", "/crates");
  });

  it("should sign in as admin user", function () {
    cy.loginViaUI(adminCredentials.email, adminCredentials.password);

    cy.contains("Dashboard").should("be.visible");
    cy.location("pathname").should("eq", "/admin/dashboard");
  });

  it("should display toast for invalid user", function () {
    const { wrongEmail, wrongPassword } = this.wrongCredentials;

    cy.loginViaUI(wrongEmail, wrongPassword);

    cy.contains(
      `We do not have any user registered with ${wrongEmail} email address. Please signup.`
    ).should("be.visible");
    cy.location("pathname").should("eq", "/user/login");
  });

  it("should display toast for an invalid password for existing user", function () {
    const { wrongPassword } = this.wrongCredentials;
    cy.loginViaUI(userCredentials.email, wrongPassword);

    cy.contains(
      "Sorry, the password you entered is incorrect. Please try again."
    ).should("be.visible");
    cy.location("pathname").should("eq", "/user/login");
  });

  it("should display toast when request is in pending state", function () {
    const { wrongPassword } = this.wrongCredentials;
    setResponseLoadingState("userLogin");

    cy.loginViaUI(userCredentials.email, wrongPassword);

    cy.contains("Logging in, please wait...").should("be.visible");
    cy.location("pathname").should("eq", "/user/login");
  });

  it("should form have link to signup page", function () {
    cy.get('button[type="submit"]')
      .siblings("a")
      .should("have.attr", "href", "/user/signup");
  });
});
