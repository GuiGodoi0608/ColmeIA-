

describe('DatabaseTest', () => {
  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[type="email"]').type('qa@test.com')
    cy.get('input[type="password"]').type('123456')
    cy.contains('Entrar').click()

    cy.contains('Continuar').click()

    cy.url().should('include', 'dashboard')
  })

  
  it('Recarregar a pagina faz com que os itens sumam', () => {
    cy.get('[routerlink="/dashboard/campanha"]').click()
    cy.contains('Bancos de dados').click()
    cy.contains('Criar').click()
    cy.get('input[type="text"]').type('Teste QA')
    cy.contains('Salvar').click()

    cy.reload()

    cy.contains('Teste QA').should('exist')
  })
  
  it('Criar na database sem titulo',() =>{
    

    cy.get('[routerlink="/dashboard/campanha"]').click()
    cy.contains('Bancos de dados').click()
    cy.contains('Criar').click()
    cy.contains('Salvar').click()
    cy.contains('O nome do item é obrigatório').should('be.visible')

  })
})

