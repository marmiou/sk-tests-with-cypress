import TodoListMePage from '../pageObjects/TodoListMePage';

describe('Todo List Me List Editor Feature', () => {

  beforeEach(() => {
    TodoListMePage.navigate();
    TodoListMePage.resetLists();
    TodoListMePage.verifyListEditorOpens("Today's Tasks");
  });

  it("Add task in the To dos of Default Today's tasks List", () => {
    TodoListMePage.typeTask('One more thing to do');
    TodoListMePage.verifyTaskAdded('One more thing to do');
  });
});
