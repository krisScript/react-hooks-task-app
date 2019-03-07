import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render,fireEvent,waitForElement} from 'react-testing-library'
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App/>',() => {
  const title = "new task";
  const description = "new description";
  const deleteTask = jest.fn()
 
  describe('App with empthy localStorage',() => {
    
    const { container, getByText ,queryByTestId,getByPlaceholderText} = render (<App />)
    it(`shouldn't have any tasks`,() => {
      const tasksContainer = queryByTestId('tasks-container')
      expect(tasksContainer.children.length).toBe(0)
    })
   describe('adding and deleting  task',() => {
    beforeEach(() => {    
      const title = "new task";
      const description = "new description";
      const titleInput = getByPlaceholderText('Task title')
      fireEvent.change(titleInput, {target : {value : title}})
      const descriptionInput = getByPlaceholderText('Task Description')
      fireEvent.change(descriptionInput, {target : {value : description}})
      const submitButton = getByText('Submit')
      fireEvent.click(submitButton)
  })
  it("it should add task", async () => {
    const tasksContainer =  queryByTestId('tasks-container')
      expect(tasksContainer.children.length).toBe(1)
    });
    it("it should delete task", async () => {
      const deleteButton =  getByText('Delete')
      await fireEvent.click(deleteButton)
      const tasksContainer =  queryByTestId('tasks-container')
        expect(tasksContainer.children.length).toBe(0)
      });
    
   })

  })
 
})