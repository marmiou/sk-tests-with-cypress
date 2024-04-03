import TodoListMePage from '../pageObjects/TodoListMePage';

describe('ToDo List Me Lists Feature', () => {

  beforeEach(() => {
    TodoListMePage.navigate();
    TodoListMePage.resetLists();
  });

  it("Create a new list with name'", () => {
    TodoListMePage.addNewList('Monday');
    TodoListMePage.verifyListCreated('Monday');
    TodoListMePage.verifyListEditorOpens('Monday');
  });
});
