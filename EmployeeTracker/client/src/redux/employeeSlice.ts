import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeeList, fullEmployeeData } from '../utils/types';

const initialState: EmployeeList = [];

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setAllEmployeesToState: (state, action: PayloadAction<EmployeeList>) => {
            return action.payload;
        },
        addEmployeeToState: (state, action: PayloadAction<fullEmployeeData>) => {
            state.push(action.payload);
        },
        editEmployeeInState: (state, action: PayloadAction<fullEmployeeData>) => {
            return state.map(e => e._id === action.payload._id ? action.payload : e);
        },
        deleteEmployeeFromState: (state, action: PayloadAction<string>) => {
            return state.filter(e => e._id !== action.payload);
        }
    }
});

export const { setAllEmployeesToState, addEmployeeToState, editEmployeeInState, deleteEmployeeFromState } = employeeSlice.actions;
export default employeeSlice.reducer;