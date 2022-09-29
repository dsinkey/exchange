/// <reference types="cypress" />

import "cypress-react-selector";

describe("StakeFish Exchanges", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the navbar", () => {
    cy.get("#exchange-list-navbar").should("exist");
  });

  it("should render the the first exchange card", () => {
    cy.get("#exchange-list-card-0").should("exist");
  });

  it("should render the the first sidebar item", () => {
    cy.get("#exchange-sidebar-list-item-0").should("exist");
  });

  it("should be able to click on the first card", () => {
    cy.get("#exchange-list-card-0").click();
  });

  it("should be able to click on the first card and the parts of the exchange details component should render", () => {
    cy.get("#exchange-list-card-0").click();
    cy.get("#exchange-details-card").should("exist");
    cy.get("#exchange-details-card-header").should("exist");
    cy.get("#exchange-details-card-content").should("exist");
  });

  it("should be able to click on the first list item in the sidebar and the parts of the exchange details component should render", () => {
    cy.get("#exchange-list-card-0").click();
    cy.get("#exchange-details-card").should("exist");
    cy.get("#exchange-details-card-header").should("exist");
    cy.get("#exchange-details-card-content").should("exist");
  });

  it("should render 10 items in the sidebar", () => {
    cy.get('[data-cy="sidebar-list-item"]').should("have.length", 10);
  });

  it("should render 10 cards in the exchange feed", () => {
    cy.get('[data-cy="exchange-list-card"]').should("have.length", 10);
  });
});
