describe('testing e2e', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should show a title', () => {
    cy.get('[data-testid="title"]').should('be.visible')
    cy.get('[data-testid="title"]').contains(/Consulta Processual/)
  })
  
  it('should render the search bar component', () => {
    cy.get('[data-testid="search-bar"]').should('exist');
  });

  it('should select and search by court', () => {
    cy.get('[data-testid="tribunal"]').should('exist');
    cy.get('[name="tribunal"]').select('TR1');
    cy.get('[data-testid="search-bar"] button[type="submit"]').click();
  });

  it('should select and search by cnj', () => {
    cy.get('[data-testid="pick-cnj"]').should('exist');
    cy.get('[data-testid="pick-cnj"]').check();
    cy.get('[data-testid="processo"]').type('5001682-88.2020.8.13.0001');
    cy.get('[data-testid="search-bar"] button[type="submit"]').click();
  });

  

})

