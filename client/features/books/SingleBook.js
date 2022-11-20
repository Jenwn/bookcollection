import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom';
import { fetchABookAsync } from '../../app/AbookSlice';

const SingleBook = () => {
    const dispatch = useDispatch()
    const { bookid } = useParams()
    // const user = useSelector((state)=>state.auth.me)
    // const { id } = user;
    const book = useSelector((state)=>state.single.book)
    useEffect(()=>{
        dispatch(fetchABookAsync(bookid))
    },[dispatch])

    return(
        <>
        <div>
            <h1>{book.title}</h1>

        </div>
        </>
    )
}

export default SingleBook;