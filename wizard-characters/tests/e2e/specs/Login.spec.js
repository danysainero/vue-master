


describe('happy path Login view', function () {
    it('sets auth cookie when logging in via form submission', function () {
        // destructuring assignment of the this.currentUser object
        const username = "dany"
        const password = "12345"

        cy.visit('/login')

        cy.get('#username').type(username)
        cy.get('#password').type(password)

        // {enter} causes the form to submit
        /* cy.get('input[name=password]').type(`${password}{enter}`) */

        cy.get('.login__button').click()

        // we should be redirected to /dashboard
        cy.url().should('include', '/')

        // UI should reflect this user being logged in
        cy.get('h2').should('contain', 'HOME')
    })
})