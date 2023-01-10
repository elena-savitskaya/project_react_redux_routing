import { createSlice } from '@reduxjs/toolkit';

const scriptSlice = createSlice({
    name: 'scripts',
    initialState: {
        scripts: [
            {
                id: '',
                name: '',
                source: '',
                link: '',
            }
        ]      
    },

    reducers: {
        addScript(state, action) {
            console.log(state)
            console.log(action)
            state.scripts.push({
                id: state.scripts.length + 1,
                name: action.payload.name,
                source: action.payload.source,
                link: action.payload.link,
              });
        },
        removeScript(state, action) {
            state.scripts = state.scripts.filter((script) => script.id !== action.payload.id);
        }
    },
});

export const {addScript, removeScript} = scriptSlice.actions;

export default scriptSlice.reducer;