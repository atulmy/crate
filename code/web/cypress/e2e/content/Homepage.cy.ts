import { userCredentials } from "../../../../api/src/__tests__/testData";

beforeEach(() => {
  cy.omitOnboarding();
});

describe("Homepage", () => {
  it("should greet with heading", function () {
    cy.visit("/");

    cy.contains("Crate").should("be.visible");
  });
  it("should greet with paragraph", function () {
    cy.visit("/");

    cy.contains(
      "Your monthly subscription of trendy clothes and accessories"
    ).should("be.visible");
  });
  it("should continue button have href attr eq to /crates when authorized", function () {
    cy.loginViaAPI(userCredentials.email, userCredentials.password).then(() => {
      cy.visit("/");

      cy.contains("Get Subscription")
        .parent()
        .should("have.attr", "href", "/crates");
    });
  });
  it("should continue button have href attr eq to /crates when NOT authorized", function () {
    cy.visit("/");

    cy.contains("Get Started")
      .parent()
      .should("have.attr", "href", "/user/signup");
  });
});
