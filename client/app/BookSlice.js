import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    books: [],
    cbooks: [],
    wbooks: [],
    log: [],
    loading: false
};

export const fetchBooksAsync = createAsyncThunk("allBooks", async(search)=>{
    try{
        const { data } = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCLQ-IdBGIrZ7hufT5p8_wlfM7Y_gLlba4'+'&maxResults=40')
        return data.items

    }catch(err){
        next(err)
    }
})

export const fetchCollectionAsync = createAsyncThunk("collectedBooks", async (id)=>{
    try{
        const { data } = await axios.get(`/api/users/${id}/collection`)
        return data
    }catch(err){
        console.log(err)
    }
})

export const fetchWishlistAsync = createAsyncThunk("wishlistBooks", async (id)=>{
    try{
        const { data } = await axios.get(`/api/users/${id}/wishlist`)
        return data
    }catch(err){
        console.log(err)
    }
})

export const fetchLogAsync = createAsyncThunk("fetchlog", async (id)=>{
    try{
        const { data } = await axios.get(`/api/users/${id}/readinglog`)
        return data
    }catch(err){
        console.log(err)
    }
})

export const addLogAsync = createAsyncThunk("addlog", async ({id, date, title, author, image, comment, rating})=>{
    const { data } = await axios.post(`/api/users/${id}/readinglog`,{
        date, title, author, image, comment, rating, userId: id
    })
    return data;
})

export const addBooksC = createAsyncThunk("addBookC", async({id, title, author, description, image })=>{
    const { data } = await axios.post(`/api/users/${id}/collection`,{
        title, author, description, image, status:"collection", userId:id
    })
    return data;
})

export const addBooksW = createAsyncThunk("addBookW", async({id, title, author, description, image })=>{
    const { data } = await axios.post(`/api/users/${id}/wishlist`,{
        title, author, description, image, status:"wishlist", userId: id
    })
    return data;
})

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchBooksAsync.pending, (state,action)=>{
            state.loading = true
        })
        builder.addCase(fetchBooksAsync.fulfilled,(state,action)=>{
            state.loading = false
            state.books = action.payload
        })
        builder.addCase(fetchCollectionAsync.pending, (state,action)=>{
            state.loading = true
        })
        builder.addCase(fetchCollectionAsync.fulfilled, (state,action)=>{
            state.loading = false
            state.cbooks = action.payload
        })
        builder.addCase(fetchWishlistAsync.fulfilled, (state,action)=>{
            state.loading = false
            state.wbooks = action.payload
        })
        builder.addCase(fetchLogAsync.fulfilled,(state,action)=>{
            state.loading = false
            state.log = action.payload
        })
        builder.addCase(addLogAsync.fulfilled, (state,action)=>{
            state.log.unshift(action.payload)
        })
        builder.addCase(addBooksC.fulfilled, (state,action)=>{
            state.cbooks.push(action.payload)
        })
        builder.addCase(addBooksW.fulfilled, (state,action)=>{
            state.wbooks.push(action.payload)
        })
    }
})

export default booksSlice.reducer;