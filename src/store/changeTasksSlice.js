import { createSlice } from '@reduxjs/toolkit';

const changeTasksSlice = createSlice({
    name: 'changeTasks',
    initialState: {
        changeTasks: [
            {
                id: '',
                task: '',
            },
        ]
    },

    reducers: {
        chooseTasks(state, action) {
            console.log(state)
            console.log(action)
            state.changeTasks.push({
                id: state.changeTasks.length + 1,
                task: action.payload.task,
            });
        },
        removeTasks(state, action) {
            state.changeTasks = state.changeTasks.filter((changeTask) => changeTask.id !== action.payload.id);
        },
    },
},
);

export const { chooseTasks, removeTasks } = changeTasksSlice.actions;

export default changeTasksSlice.reducer;