import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isFetching: false,
    error: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state)=>{
            state.isFetching = true
        },
        loginSuccess : (state,action)=>{
            state.isFetching = false
            state.currentUser = action.payload
            state.error = false

        },
        loginFailure: (state)=>{
            state.error = true
            state.isFetching = false
        }
    },
})

export const {loginStart,loginSuccess,loginFailure} = userSlice.actions

export default userSlice.reducer