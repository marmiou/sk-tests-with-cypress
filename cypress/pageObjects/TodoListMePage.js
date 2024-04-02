export default class TodoListMePage {

    #SELECTORS
     URL = Cypress.config().baseUrl
    #methods
    // TodoListMePage.js
    navigate() {
        cy.visit(this.URL)
    }

    resetLists() {
        cy.get('#footer > div > div.container > div > div.footer-col2 > a:nth-child(1)').click()// Use the correct selector for the reset button
    }

    addNewList(listName) {
        cy.get('#addlist').click()
        cy.get('#updatebox')
            .type(`${listName}{enter}`) // Use the correct selector for the input field
    }

    verifyListCreated(listName) {
        //cy.get('.listname').should('contain', listName) // Adjust the selector to match your app's structure
        cy.get('.listname').contains('span', listName).should('exist')
    }

    verifyListEditorOpens(listName) {
        //cy.get('div[data-test="list-editor"]').should('contain', listName) // Use the correct selector for the list editor
        cy.get('h2').contains(listName).should('exist')
    }

    typeTask(taskName) {
        cy.get('#newtodo')
            .type(`${taskName}{enter}`)
    }

    verifyTaskAdded(taskName) {
        cy.get('#mytodos') // Assuming 'data-test="task-list"' is the selector for the task list
            .should('contain', taskName) // Adjust the selector to match your app's structure
    }
}
