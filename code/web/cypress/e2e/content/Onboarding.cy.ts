import {
  getReactFiber,
  getComponent,
  setComponentState,
} from "../../support/testUtils";

describe("Onboarding", () => {
  it("should display heading on first onboarding step", function () {
    cy.visit("/");

    cy.contains("Welcome to Crate").should("be.visible");
  });

  it("should display paragraph on first onboarding step", function () {
    cy.visit("/");

    cy.contains(
      "Your monthly subscription of trendy clothes and accessories"
    ).should("be.visible");
  });

  it("should display continue button on first onboarding step", function () {
    cy.visit("/");

    cy.contains("Next").should("be.visible");
  });

  it("should display image next to first step information", function () {
    cy.visit("/");

    cy.contains("Welcome to Crate")
      .parent()
      .next()
      .children()
      .should("have.attr", "src", "http://localhost:3000/images/collage.png");
  });

  it("should display heading on second onboarding step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 1);
      })
      .then(() => {
        cy.contains("For Men").should("be.visible");
      });
  });

  it("should display paragraph on second onboarding step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 1);
      })
      .then(() => {
        cy.contains(
          "Your monthly subscription of trendy clothes and accessories"
        ).should("be.visible");
      });
  });

  it("should display continue button on second onboarding step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 1);
      })
      .then(() => {
        cy.contains("Next").should("be.visible");
      });
  });

  it("should display heading on third onboarding step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 2);
      })
      .then(() => {
        cy.contains("For Women").should("be.visible");
      });
  });

  it("should display paragraph on third onboarding step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 2);
      })
      .then(() => {
        cy.contains(
          "Your monthly subscription of trendy clothes and accessories"
        ).should("be.visible");
      });
  });

  it("should display continue button on third onboarding step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 2);
      })
      .then(() => {
        cy.contains("Next").should("be.visible");
      });
  });

  it("should display image next to third step information", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 2);
      })
      .then(() => {
        cy.contains("For Women")
          .parent()
          .next()
          .children()
          .should(
            "have.attr",
            "src",
            "http://localhost:3000/images/collage.png"
          );
      });
  });

  it("should display heading on fourth onboarding step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 3);
      })
      .then(() => {
        cy.contains("Fix me up").should("be.visible");
      });
  });

  it("should display paragraph on fourth onboarding step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 3);
      })
      .then(() => {
        cy.contains("Subscribe to your crate!").should("be.visible");
      });
  });

  it("should display continue button on fourth onboarding step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 3);
      })
      .then(() => {
        cy.contains("Start").should("be.visible");
      });
  });

  it("should pass onboarding and save info in local storage", function () {
    cy.visit("/");

    cy.contains("Next").as("continueButton").should("be.visible");

    cy.get("@continueButton").click();
    cy.get("@continueButton").click();
    cy.get("@continueButton").click();

    cy.contains("Subscribe to your crate!")
      .next()
      .as("startButton")
      .should("be.visible")
      .and("have.text", "Start");

    cy.get("@startButton").click();

    cy.contains("Get Started").should("be.visible");
    cy.window().then((win) => {
      expect(win.localStorage.getItem("onboarding")).to.eq(
        "1",
        "Local storage has not updated after passing onboarding"
      );
    });
  });

  it("should display onboarding on next visit when user didnt passed last step", function () {
    cy.visit("/")
      .then(() => {
        setComponentState("onboarding", "nextStep", 3);
      })
      .then(() => {
        cy.visit("/").then(() => {
          cy.contains("Welcome to Crate").should("be.visible");
        });
      });
  });

  it("should NOT display onboarding on next visit when user passed onboarding", function () {
    cy.omitOnboarding().then(() => {
      cy.visit("/");

      cy.contains("Get Started").should("be.visible");
    });
  });
});
