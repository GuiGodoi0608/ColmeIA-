describe('Login Test', () => {
  it('Deve tentar login com credenciais válidas', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[type="email"]').type('qa@test.com')
    cy.get('input[type="password"]').type('123456')
    cy.contains('Entrar').click()

    
    cy.contains('Seu login está incorreto').should('be.visible')
  })

  it('Permite acesso mesmo com erro (BUG)', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[type="email"]').type('qa@test.com')
    cy.get('input[type="password"]').type('123456')
    cy.contains('Entrar').click()

    cy.contains('Continuar').click()

   
    cy.url().should('not.include', 'login')
  })
})

it('Credenciais invalidas', () => {
  cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')
  cy.get('input[type="email"]').type('qa@test.com')
  cy.get('input[type="password"]').type('1234567')
  cy.contains('Entrar').click()
  cy.contains('Usuário ou senha inválidos')
})