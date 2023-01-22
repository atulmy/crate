import { checkPropTypes } from "prop-types";
import { userCredentials } from "../../../../api/src/__tests__/testData";

describe("Guide", () => {
  it("should greet with heading", function () {
    cy.visit("/how-it-works");

    cy.contains("How it works").should("be.visible");
  });

  it("should greet with paragraph", function () {
    cy.visit("/how-it-works");

    cy.contains(
      "Just 3 easy steps to subscribe and receive your monthly subscription of trendy clothes and accessories"
    ).should("be.visible");
  });

  it("should display first step content", function () {
    cy.visit("/how-it-works");

    cy.contains("Subscribe to your crate").as("heading").should("be.visible");
    cy.contains("Choose one or multiple crates as per your need.").should(
      "be.visible"
    );
    cy.get("@heading").prev().should("be.visible");
  });

  it("should display second step content", function () {
    cy.visit("/how-it-works");

    cy.contains("Receive a Fix Delivery").as("heading").should("be.visible");
    cy.contains(
      "Get 3 to 5 pieces of clothing or accessories delivered to your door."
    ).should("be.visible");
    cy.get("@heading").prev().should("be.visible");
  });

  it("should display third step content", function () {
    cy.visit("/how-it-works");

    cy.contains("Keep what you want").as("heading").should("be.visible");
    cy.contains(
      "Only pay for what you keep. Returns are easy and free."
    ).should("be.visible");
    cy.get("@heading").prev().should("be.visible");
  });

  it("should submit button href attr eq to /crates when authorized", function () {
    cy.loginViaAPI(userCredentials.email, userCredentials.password).then(() => {
      cy.visit("/how-it-works");

      cy.get('a[href="/crates"]')
        .children()
        .should("contain.text", "Subscribe");
    });
  });

  it("should submit button href attr eq to /user/signup when NOT authorized", function () {
    cy.visit("/how-it-works");

    cy.get('a[href="/user/signup"]').children().should("contain.text", "Start");
  });

  it("should display image next to first step", function () {
    cy.visit("/how-it-works");

    cy.contains("Subscribe to your crate").as("heading");
    cy.get("@heading")
      .parent()
      .next()
      .should(
        "have.attr",
        "style",
        "background:url('http://localhost:3000/images/stock/how-it-works/1.jpg') center top no-repeat"
      );
  });

  it("should display image next to second step", function () {
    cy.visit("/how-it-works");

    cy.contains("Receive a Fix Delivery").as("heading");
    cy.get("@heading")
      .parent()
      .prev()
      .should(
        "have.attr",
        "style",
        "background:url('http://localhost:3000/images/stock/how-it-works/2.jpg') center top no-repeat"
      );
  });

  it("should display image next to third step", function () {
    cy.visit("/how-it-works");

    cy.contains("Keep what you want").as("heading");
    cy.get("@heading")
      .parent()
      .next()
      .should(
        "have.attr",
        "style",
        "background:url('http://localhost:3000/images/stock/how-it-works/3.jpg') center top no-repeat"
      );
  });
});
