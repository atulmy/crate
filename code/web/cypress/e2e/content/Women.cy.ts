describe("Women", () => {
  it("should greet with heading", function () {
    cy.visit("/");

    cy.contains("Monthly crates for Women").should("be.visible");
  });

  it("should greet with paragraph", function () {
    cy.visit("/");

    cy.contains(
      "Save time. Look great. The personal styling service customized to your fit, lifestyle & spending preferences."
    ).should("be.visible");
  });

  it("should continue button have href attr eq to /user/signup when NOT authorized", function () {
    cy.visit("/");

    cy.contains("Get Started")
      .parent()
      .should("have.attr", "href", "/user/signup");
  });

  it("should continue button have href attr eq to /user/signup when authorized", function () {
    cy.visit("/");

    cy.contains("Get Subscription")
      .parent()
      .should("have.attr", "href", "/crates");
  });
});
