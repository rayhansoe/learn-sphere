describe("E2E App", () => {
  it("Render content and redirect to detail", () => {
    cy.visit("http://localhost:3000/")
    cy.get('[data-cy="footer-item"').last().find('[data-cy="footer-link"]').click()
    cy.url().should('equal', 'http://localhost:3000/team')
  })
})