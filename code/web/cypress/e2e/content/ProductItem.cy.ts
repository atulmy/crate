import {
  aliasQuery,
  hasOperationName,
  setResponseLoadingState,
} from "../../support/testUtils";

before(() => {
  cy.getProducts();
});

describe("Product Item", () => {
  it("should display product info on product item page", function () {
    this.products.forEach((productItem) => {
      const parsedDate = new Date(
        parseInt(productItem.createdAt)
      ).toDateString();
      cy.visit(`product/${productItem.slug}`);

      cy.get(`img[src="http://localhost:8000${productItem.image}"]`).should(
        "be.visible"
      );
      cy.contains(productItem.name).should("be.visible");
      cy.contains(productItem.description).should("be.visible");
      cy.contains(`Launched on ${parsedDate}`).should("be.visible");
    });
  });

  it("should display loading text when request for products is pending", function () {
    setResponseLoadingState("products");

    this.products.forEach((productItem) => {
      cy.visit(`product/${productItem.slug}`);

      cy.contains("loading...").should("be.visible");
    });
  });

  it("should display related products on product item page", function () {
    cy.intercept("POST", "http://localhost:8000/", (req) => {
      aliasQuery(req, "productsRelated");
      if (hasOperationName(req, "productsRelated")) {
        req.reply({ fixture: "productsRelated" });
      }
    });

    this.products.forEach((productItem) => {
      cy.visit(`product/${productItem.slug}`);

      cy.wait("@gqlproductsRelatedQuery").then((interception) => {
        const productsRelated = interception.response.body.data.productsRelated;

        productsRelated.forEach((relatedProduct) => {
          cy.get(
            `img[src="http://localhost:8000${relatedProduct.image}"]`
          ).should("be.visible");
          cy.contains(relatedProduct.name).should("be.visible");
          cy.contains(relatedProduct.description).should("be.visible");
          cy.get(`a[href="/product/${relatedProduct.slug}"]`).should(
            "be.visible"
          );
        });
      });
    });
  });

  it("should display proper paragraph when related products are not provided", function () {
    cy.intercept("POST", "http://localhost:8000/", (req) => {
      aliasQuery(req, "productsRelated");
      if (hasOperationName(req, "productsRelated")) {
        req.reply({});
      }
    });

    this.products.forEach((productItem) => {
      cy.visit(`product/${productItem.slug}`);

      cy.wait("@gqlproductsRelatedQuery").then(() => {
        cy.contains("No related products to show").should("be.visible");
      });
    });
  });
});
