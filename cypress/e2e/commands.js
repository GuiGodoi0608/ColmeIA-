Cypress.Commands.add('login', () => {
  cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

  cy.get('input[type="email"]').type('qa@test.com')
  cy.get('input[type="password"]').type('123456')
  cy.contains('Entrar').click()
  cy.contains('Continuar').click()
  cy.url().should('include', 'dashboard', { timeout: 10000 })
})