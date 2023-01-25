import { userCredentials } from "../../../../api/src/__tests__/testData";

describe("Men", () => {
  it("should greet with heading", function () {
    cy.visit("/men");

    cy.contains("Monthly crates for Men").should("be.visible");
  });

  it("should greet with paragraph", function () {
    cy.visit("/men");

    cy.contains(
      "Save time. Look great. The personal styling service customized to your fit, lifestyle & spending preferences."
    ).should("be.visible");
  });

  it("should continue button have href attr eq to /user/signup when NOT authorized", function () {
    cy.visit("/men");

    cy.contains("Get Started")
      .parent()
      .should("have.attr", "href", "/user/signup");
  });

  it("should continue button have href attr eq to /user/signup when authorized", function () {
    cy.loginViaAPI(userCredentials.email, userCredentials.password).then(() => {
      cy.visit("/men");

      cy.contains("Get Subscription")
        .parent()
        .should("have.attr", "href", "/crates");
    });
  });
});
