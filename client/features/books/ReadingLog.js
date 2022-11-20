import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogAsync, addLogAsync } from "../../app/BookSlice";

const ReadingLog = () => {
    const dispatch = useDispatch()
    const log = useSelector((state)=>state.all.log)
    const user = useSelector((state)=>state.auth.me)
    const { id } = user;

    useEffect(()=>{
        dispatch(fetchLogAsync(id))
        console.log(log)
    },[dispatch])

    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (evt)=> {
        evt.preventDefault()
        dispatch(addLogAsync({id, date, title, author, image, comment, rating}));
        setDate('');
        setTitle('');
        setAuthor('');
        setImage('');
        setComment('');
        setRating('')
    }

    return(
        <>
        <h1 className="titled">My Reading Log</h1>
        <div className="logInput">
            <form className="logForm" onSubmit={handleSubmit}>
            <input name="date" placeholder="date" value={date} type="text" onChange={(evt) => setDate(evt.target.value)} />

            <input name="title" placeholder="book title" value={title} type="text" onChange={(evt) => setTitle(evt.target.value)} />

            <input name="author" placeholder="author" value={author} type="text" onChange={(evt) => setAuthor(evt.target.value)} />

            <input name="image" placeholder="imageURL" value={image} type="text" onChange={(evt) => setImage(evt.target.value)} />

            <textarea name="comment" className="notes" placeholder="notes" value={comment} type="text" onChange={(evt) => setComment(evt.target.value)} />

            <input name="rating" placeholder="rating" value={rating} type="text" onChange={(evt) => setRating(evt.target.value)} />

            <button type="submit" className="submitButton">+</button>
            </form>
        </div>
        <div className="logList">
            {log.map((l)=>(
                <div className="entry" key={l.id}>
                    <h4>Date: {l.date}</h4>
                    <h2>Title: {l.title}</h2>
                    <h3>Author: {l.author}</h3>
                    <img src={l.image}/>
                    <p>Notes: {l.comment}</p>
                    <h4>Rating: {l.rating}</h4>
                </div>
            ))}
        </div>
        </>
    )

}

export default ReadingLog