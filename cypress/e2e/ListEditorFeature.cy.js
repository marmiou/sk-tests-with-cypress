import TodoListMePage from "../pageObjects/TodoListMePage"

describe("Todo List Me List Editor Feature", () => {

    let todoListMePage = new TodoListMePage()

    beforeEach(() => {
        todoListMePage.navigate()
        todoListMePage.resetLists()
        todoListMePage.verifyListEditorOpens("Today's Tasks")

    })

    it("Add task in the To dos of Default Today's tasks List", () => {
        todoListMePage.typeTask("One more thing to do")
        todoListMePage.verifyTaskAdded("One more thing to do")
    })
})
