import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksAsync, addBooksC, addBooksW } from "../../app/BookSlice";

const AllBooks = () => {
    const dispatch = useDispatch()
    const books = useSelector((state) => state.all.books)
    const [search, setSearch] = useState('')
    const searchBook = (e) => {
        e.preventDefault()
        dispatch(fetchBooksAsync(search))
    }
    const user = useSelector((state) => state.auth.me)
    const { id } = user;

    return (
        <div className="searchedBooksView">
            <form className="search"  onSubmit={searchBook}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <div className="allView">
                {books && books.length ? books.map((book) => {
                    let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                    if (thumbnail != undefined) {
                        return (
                            <div className="aSearchedBook" key={book.id}>
                                <h1>{book.volumeInfo.title}</h1>
                                <img src={thumbnail} alt="https://static.vecteezy.com/system/resources/thumbnails/004/911/390/small/book-icon-template-black-color-editable-book-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg" />
                                <h2>Author: {book.volumeInfo.authors}</h2>
                                <h4>Published: {book.volumeInfo.publishedDate}</h4>
                                <p>Synopsis: {book.volumeInfo.description}</p>
                                <button type="submit" onClick={async () => {
                                    await dispatch(addBooksC({ id, title:book.volumeInfo.title, author:book.volumeInfo.authors[0], description: book.volumeInfo.description, image:thumbnail }))
                                    }}>Add to Collection</button>
                                <button type="submit" onClick={async ()=>{
                                    await dispatch(addBooksW({
                                        id, title:book.volumeInfo.title, author:book.volumeInfo.authors[0], description: book.volumeInfo.description, image:thumbnail}))
                                }}>Add to Wishlist</button>
                            </div>
                        )
                    }
                }) :
                <>
                <div className="space"></div>
                    <div>
                        {/* <h1 className="instruction">Search a title to get started</h1> */}
                        <img className="space" src="https://i.gifer.com/origin/e4/e4cd0639b5a5c1e164aeff4370ed2365.gif"/>
                    </div>
                    </>
                }
            </div>
        </div>
    )

}

export default AllBooks;