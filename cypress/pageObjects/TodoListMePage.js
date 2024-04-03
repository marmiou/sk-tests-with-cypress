export default class TodoListMePage {

    navigate() {
        cy.visit(Cypress.config().baseUrl)
    }

    resetLists() {
        cy.get('#footer > div > div.container > div > div.footer-col2 > a:nth-child(1)').click()
    }

    addNewList(listName) {
        cy.get('#addlist').click()
        cy.get('#updatebox')
            .type(`${listName}{enter}`)
    }

    verifyListCreated(listName) {

        cy.get('.listname').contains('span', listName).should('exist')
    }

    verifyListEditorOpens(listName) {

        cy.get('h2').contains(listName).should('exist')
    }

    typeTask(taskName) {
        cy.get('#newtodo')
            .type(`${taskName}{enter}`)
    }

    verifyTaskAdded(taskName) {
        cy.get('#mytodos')
            .should('contain', taskName)
    }
}
