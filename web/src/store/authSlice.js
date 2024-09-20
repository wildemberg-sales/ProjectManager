import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    dataUser:{email:"wildemberg.sales.junior@gmail.com",
        id:3,
        name:"Wildemberg Sales"}
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginSuccess(state, action){
            state.isAuthenticated = true
            state.dataUser = action.payload
        },
        logout(state){
            state.isAuthenticated = false
            state.dataUser = null
        },
        updateUser(state, action){
            state.dataUser = {...state.dataUser, ...action.payload}
        }
    }
})

export const {loginSuccess, logout} = authSlice.actions
export default authSlice.reducer