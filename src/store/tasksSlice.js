import { createSlice } from '@reduxjs/toolkit';

const TasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {
                id: 1,
                name: 'Hello',
                done: 'Mark as Done',
                delete: 'Delete task',
                days: '0',
            },
            {
                id: 2,
                name: 'Make Offer',
                done: 'Mark as Done',
                delete: 'Delete task',
                days: '1',
            },
            {
                id: 3,
                name: 'Estimate project',
                done: 'Mark as Done',
                delete: 'Delete task',
                days: '2',
            },
        ],    
    },

    reducers: {
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
        },
    },
});

export const { deleteTask } = TasksSlice.actions;

export default TasksSlice.reducer;
