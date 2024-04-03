import TodoListMePage from "../pageObjects/TodoListMePage"

describe("ToDo List Me Lists Feature", () => {

    const todoListMePage = new TodoListMePage()

    beforeEach(() => {
        todoListMePage.navigate()
        todoListMePage.resetLists()
    })

    it("Create a new list with name'", () => {
        todoListMePage.addNewList("Monday")
        todoListMePage.verifyListCreated("Monday")
        todoListMePage.verifyListEditorOpens("Monday")
    })

})
