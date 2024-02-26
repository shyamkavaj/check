import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import userService from '../../Service/userService';

export const signupUser = createAsyncThunk(
    "user/signupUser",
    async(user) => {
        try{
            const res = userService.signupUser(user);
            console.log("in signup ",res);
            return res;
        }catch(error){
            console.log("erroror in signupUser ",error)
        }
    }
)

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async(user) =>{
        try{
            console.log("in login ",user);
            const res =await userService.loginUser(user);
            console.log("in login ",res);
            localStorage.setItem('token',res.token)
            return res;
        }catch(error){
            console.log("erroror in loginUser ",error)
        }
    }
)

export const checkUser = createAsyncThunk(
    "user/checkUser",
    async() =>{
        try{
            
            const res = userService.varifyUser();
            return res;
        }catch(error){
            console.log("erroror in varifyUser ",error)
        }
    }
)

export const editUser = createAsyncThunk(
    "user/editUser",
    async() =>{
        try{
            const res = userService.editUser();
            return res;
        }catch(error){
            console.log("erroror in editUser ",error)
        }
    }
)
const userSlice = createSlice({
    name:"user",
    initialState:{
        enable:null
    },
    reducers:{},
    extraReducers:(builder)=>{
    
    }

})

export default userSlice.reducer;