export default class TodoListMePage {
  static navigate() {
    cy.visit(Cypress.config().baseUrl);
  }

  static resetLists() {
    cy.get('#footer > div > div.container > div > div.footer-col2 > a:nth-child(1)').click();
  }

  static addNewList(listName) {
    cy.get('#addlist').click();
    cy.get('#updatebox')
      .type(`${listName}{enter}`);
  }

  static verifyListCreated(listName) {
    cy.get('.listname').contains('span', listName).should('exist');
  }

  static verifyListEditorOpens(listName) {
    cy.get('h2').contains(listName).should('exist');
  }

  static typeTask(taskName) {
    cy.get('#newtodo')
      .type(`${taskName}{enter}`);
  }

  static verifyTaskAdded(taskName) {
    cy.get('#mytodos')
      .should('contain', taskName);
  }
}
