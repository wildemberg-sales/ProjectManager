import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: true
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginSucess(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

export const {loginSucess, logout} = authSlice.actions
export default authSlice.reducer