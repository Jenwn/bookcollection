import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchABookAsync } from '../../app/AbookSlice';
import { StarRating } from '../index'

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
        <div className='notebook'>
        <div className='noteEntry'>
            <h1>{book.title}</h1>
            <img className="largeImg" src={book.image}/>
            <StarRating/>
            <h2>{book.description}</h2>
        </div>
        </div>
    )
}

export default SingleBook;