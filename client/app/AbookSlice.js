import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    book:{},
    loading: false
}

export const fetchABookAsync = createAsyncThunk("abook",async(bookid)=>{
    try{
        const { data } = await axios.get(`/api/users/collection/${bookid}`)
        return data
    }catch(err){
        console.log(err)
    }
})

export const deleteBookAsync = createAsyncThunk("delbook", async(bookid)=>{
    try{
        const { data } = await axios.delete(`/api/users/collection/${bookid}`)
        return data
    }catch(err){
        console.log(err)
    }
})

const abookSlice = createSlice({
    name:"book",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchABookAsync.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchABookAsync.fulfilled, (state, action) => {
            state.loading = false
            state.book = action.payload
        })
        builder.addCase(deleteBookAsync.fulfilled, (state, action) => {
            return {}
        })
    }
})

export default abookSlice.reducer;