import { createAsyncThunk, } from '@reduxjs/toolkit'
import axios from 'axios'

export const registerUser = createAsyncThunk(
    'user/register',
    async({name, email, password, role}, {rejectWithValue}) => {
        try{
            await axios.post('http://localhost:8000/cms-api/register', {name, email, password, role})
            .then((res) => {
                if(res.status === 200){
                    return res.data
                }else{
                    return rejectWithValue(res.data.message)
                }
            })
            .catch(error => {
                throw error
            })
        }catch(error){
            return rejectWithValue(error)
        } 
    }
)

export const loginUser = createAsyncThunk(

    'user/login',
    async({email, password}, {rejectWithValue}) => {
        try{
            
        }catch(error){
            return rejectWithValue(error)
        }
    }
)