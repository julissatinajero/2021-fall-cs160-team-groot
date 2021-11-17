describe('Sign In Tests', function () {

  // TEST 1: Redirects if successfully signed in
  it('Successfull login', function () {
      cy.request({
        method: 'POST', 
        url: 'http://localhost:8080/api/auth/signup', 
        body: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'test@test.com',
          username: 'test',
          password: 'test'}
      })

      cy.visit('http://localhost:3000/sign-in')

      cy.get('#username')
        .should('be.visible')
        .type('test')
      cy.get('#password')
        .should('be.visible')
        .type('test')
      cy.get('button[type="submit"]')
        .should('be.visible')
        .click()
  
      cy.url().should('include', '/profile')
  })

  // TEST 2: Unsuccessful sign in
  it('Unsuccessful login', function () {
    cy.visit('http://localhost:3000/sign-in')

    cy.get('#username')
      .should('be.visible')
      .type('test')
    cy.get('#password')
      .should('be.visible')
      .type('randomIncorrectPassword')
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.url().should('include', '/sign-in')
})
})