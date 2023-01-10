import { createSlice } from '@reduxjs/toolkit';

const leadSlice = createSlice({
    name: 'leads',
    initialState: {
        leads: [
            {
                id: '',
                name: '',
                source: '',
                budget: '',
                nextTask: '',
                contacts: '',                
            }
        ]      
    },

    reducers: {
        addLead(state, action) {
            console.log(state)
            console.log(action)
            state.leads.push({
                id: state.leads.length + 1,
                name: action.payload.name,
                source: action.payload.source,
                budget: action.payload.budget,
                nextTask: action.payload.nextTask,
                contacts: action.payload.contacts,
            });
        },
        removeLead(state, action) {
            state.leads = state.leads.filter((lead) => lead.id !== action.payload.id);
        }
    },
});

export const {addLead, removeLead} = leadSlice.actions;

export default leadSlice.reducer;