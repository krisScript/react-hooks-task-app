import React from 'react'

import {render,fireEvent,waitForElement} from 'react-testing-library'
import Task from './Task'


describe('<Task />',() => {
    const title = "new task";
    const description = "new description";
    const deleteTask = jest.fn()
    const { container, getByText } = render (<Task deleteTask={deleteTask} title={title} description={description} />)

    it('should have element with text equal to title and description',async () => {
        const updatedTitle = await waitForElement(() => getByText(title))
        const updatedDescription = await waitForElement(() => getByText(description))
        expect(updatedTitle).toBeTruthy
        expect(updatedDescription).toBeTruthy
    })
    describe('deleting task', async () => {
        beforeEach( () => {
            const deleteButton =  getByText('Delete')
            fireEvent.click(deleteButton)
        })
        it('deleteTask should be called once',() => {
            expect(deleteTask).toBeCalledTimes(1)
        })
    })

})