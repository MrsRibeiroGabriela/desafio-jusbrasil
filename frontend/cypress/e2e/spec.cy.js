describe('testing e2e', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should show a title', () => {
    cy.get('[data-testid="title"]').should('be.visible')
    cy.get('[data-testid="title"]').contains(/Consulta Processual/)
  })
})

