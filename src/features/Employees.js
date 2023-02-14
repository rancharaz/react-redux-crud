import { createSlice } from "@reduxjs/toolkit";
//import the fakedata from the fakedata.js as example for backend
import { employeesData } from "../fakedata.js";


export const employeeSlice = createSlice({
    //variable
    name: "employees", 
    //value of the employees
    initialState: {value: employeesData},
    reducers: {
        //function used .. //state acces current value of the initialState //
        addEmployee: (state, action) => {
            //code and logic for adding employee
            state.value.push(action.payload)
        },
        deleteEmployee: (state, action) => {
            state.value = state.value.filter((employee) => employee.id !== action.payload.id)
        },
        updateEmployeeName: (state, action) => {
            state.value.map((employee) => {
                if(employee.id === action.payload.id){
                    employee.firstname = action.payload.firstname
                }
            })
        }
    }
})
//grabbing all the actions from the reducers 
export const { addEmployee, deleteEmployee, updateEmployeeName } = employeeSlice.actions;
//grabbing all the global function etc
export default employeeSlice.reducer;