describe('Sign In Tests', function () {

  // TEST 1: Unsuccessful sign in (Missing username and password)
  it('Unsuccessful login: Submitting empty form', function () {
    cy.visit('http://localhost:3000/sign-in')

    // Submit empty form
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    // An window alert should pop up stating that their username or password is incorrect
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Incorrect username or password!`)
    })
    // The validation checks should pop indicating a username and password is required
    cy.get(':nth-child(1) > .error').should('be.visible')
    cy.get('[style="padding-top: 20px;"] > .error').should('be.visible')

    cy.url().should('include', '/sign-in')
  })

  // TEST 2: Redirects if successfully signed in
  it('Successful login', function () {
    // Create a user 
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/auth/signup',
      body: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@test.com',
        username: 'test',
        password: 'test1'
      }
    })

    cy.visit('http://localhost:3000/sign-in')

    // Submit the created user's username and password
    cy.get('#username')
      .should('be.visible')
      .type('test')
    cy.get('#password')
      .should('be.visible')
      .type('test1')
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    cy.url().should('include', '/profile')
  })

  // TEST 3: Unsuccessful sign in (Missing the password)
  it('Unsuccessful login: Submitting a form without a password', function () {
    cy.visit('http://localhost:3000/sign-in')

    // Inputs a username; Doesn't input the password
    cy.get('#username')
      .should('be.visible')
      .type('test')
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    // An window alert should pop up stating that their username or password is incorrect
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Incorrect username or password!`)
    })
    // The validation checks should pop indicating a password is required
    cy.get('[style="padding-top: 20px;"] > .error').should('be.visible')

    cy.url().should('include', '/sign-in')
  })

  // TEST 4: Unsuccessful sign in (Missing the username)
  it('Unsuccessful login: Submitting a form without a username', function () {
    cy.visit('http://localhost:3000/sign-in')

    // Inputs a username; Doesn't input the password
    cy.get('#password')
      .should('be.visible')
      .type('test1')
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    // An window alert should pop up stating that their username or password is incorrect
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Incorrect username or password!`)
    })
    // The validation checks should pop indicating a password is required
    cy.get(':nth-child(1) > .error').should('be.visible')

    cy.url().should('include', '/sign-in')
  })

})