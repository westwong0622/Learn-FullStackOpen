describe("Note app", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", function () {
    cy.contains("Notes");
    cy.contains(
      "Note app, Department of Computer Science, University of Helsinki 2020"
    );
  });

  // it("front page contains random text", function () {
  //   cy.contains("wtf is this app?");
  // });

  it("login form can be opened", function () {
    cy.contains("login").click();
  });

  it("user can login", function () {
    cy.contains("login").click();
    cy.get("input:first").type("mluukkai");
    cy.get("input:last").type("salainen");
  });
});