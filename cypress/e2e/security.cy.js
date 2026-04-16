describe('Security test', () => {

    it('Acessar a dashboard sem login', () => {
        cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
        cy.get('[routerlink="/dashboard/campanha"]').should('not.exist')
    })
}







)