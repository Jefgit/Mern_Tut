import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    users: [],
    error: ''
}

const userApiSlice = createSlice({
    name: 'user',
    initialState,
    reducers:({
        
    })
})