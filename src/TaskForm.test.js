import React from 'react'

import {render,fireEvent, getByValue,waitForElement} from 'react-testing-library'
import TaskForm from './TaskForm'

describe('<TaskForm />',() => {
    const title = "new task";
    const description = "new description";
    const addTask = jest.fn()
    const { container, getByPlaceholderText, getByValue,getByText } = render (<TaskForm addTask={addTask} />)
    beforeEach(() => {    
        const titleInput = getByPlaceholderText('Task title')
        fireEvent.change(titleInput, {target : {value : title}})
        const descriptionInput = getByPlaceholderText('Task Description')
        fireEvent.change(descriptionInput, {target : {value : description}})
    })
    it("should change input value", async () => {
        const updatedTitle = await waitForElement(() => getByValue(title))
        const updatedDescription = await waitForElement(() => getByValue(description))
        expect(updatedTitle).toBeTruthy
        expect(updatedDescription).toBeTruthy
      });

    describe('submittig',async () => {
        beforeEach(() => {
            const submitButton = getByText('Submit')
            fireEvent.click(submitButton)
        })
        it('addTask should be called once',() => {
            expect(addTask).toBeCalledTimes(1)
        })
        it("values should be reset", async () => {
            const updatedTitle = await waitForElement(() => getByValue(''))
            const updatedDescription = await waitForElement(() => getByValue(''))
            expect(updatedTitle).toBeTruthy
            expect(updatedDescription).toBeTruthy
          });
    })
})
