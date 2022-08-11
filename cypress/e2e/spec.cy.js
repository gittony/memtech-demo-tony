describe('empty spec', () => {
    it('passes', () => {
      cy.visit('/')
      cy.get('h1').should('contain.text', 'Formsxxx with').should('be.visible')
    })
  })