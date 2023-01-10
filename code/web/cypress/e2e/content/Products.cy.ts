import { userCredentials } from "../../../../api/src/__tests__/testData";
import { aliasQuery, setResponseLoadingState } from "../../support/testUtils";

describe("Products", () => {
  it("should greet with heading", function () {
    cy.visit("/whats-new");
    cy.contains("What's New").should("be.visible");
  });

  it("should greet with paragraph", function () {
    cy.visit("/whats-new");
    cy.contains(
      "Watch this space to keep updated with latest clothes and accessories we add to your crates."
    ).should("be.visible");
  });

  it.only(`should display all products with specific name, description, image / href attr`, function () {
    cy.intercept("http://localhost:8000", (req) => aliasQuery(req, "products"));

    cy.visit("/whats-new");
    cy.wait("@gqlproductsQuery").then((data) => {
      const { products } = data.response.body.data;

      [...products].forEach((product) => {
        cy.contains(`${product.name}`).should("be.visible");
        cy.contains(`${product.description}`).should("be.visible");
        cy.get(`img[src="http://localhost:8000${product.image}"]`).should(
          "be.visible"
        );
        cy.get(`img[src="http://localhost:8000${product.image}"]`)
          .parent()
          .parent()
          .should("have.attr", "href", `/product/${product.slug}`);
      });
    });
  });

  it("should link attr equal /user/signup when user is not authorized", function () {
    cy.visit("/whats-new");
    cy.contains("Start").parent().should("have.attr", "href", "/user/signup");
  });

  it("should link attr equal /crates when user is authorized", function () {
    cy.loginViaAPI(userCredentials.email, userCredentials.password).then(() => {
      cy.visit("/whats-new");

      cy.contains("Subscribe").parent().should("have.attr", "href", "/crates");
    });
  });

  it("should display loader info when request for products is in pending state", function () {
    setResponseLoadingState("products");
    cy.visit("/whats-new");

    cy.contains("loading...").should("be.visible");
  });
});
