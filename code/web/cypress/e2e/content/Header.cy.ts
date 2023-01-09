beforeEach(() => {
  cy.window().then((window) => {
    window.localStorage.setItem("onboarding", "1");
    cy.visit("/");
  });
});

describe("Header", () => {
  it("should contain link to /men", function () {
    cy.contains("Men").should("have.attr", "href", "/men");
  });
  it("should contain link to /women", function () {
    cy.contains("Women").should("have.attr", "href", "/women");
  });
  it("should contain link to /how-it-works", function () {
    cy.contains("How It Works").should("have.attr", "href", "/how-it-works");
  });
  it("should contain link to /whats-new", function () {
    cy.contains("What's New").should("have.attr", "href", "/whats-new");
  });

  it("should contain link to /", function () {
    cy.contains("Crate").should("have.attr", "href", "/");
  });

  it("should contain link to /user/login", function () {
    cy.contains("Login").should("have.attr", "href", "/user/login");
  });

  it("should contain link to /user/signup", function () {
    cy.contains("Signup").should("have.attr", "href", "/user/signup");
  });
});
