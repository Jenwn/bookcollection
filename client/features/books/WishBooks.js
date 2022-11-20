import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlistAsync } from "../../app/BookSlice";

const WishBooks = () => {
    const dispatch = useDispatch()
    const wbooks = useSelector((state)=> state.all.wbooks)
    const user = useSelector((state)=> state.auth.me)
    const { id } = user;

    useEffect(()=>{
       dispatch(fetchWishlistAsync(id))
    },[dispatch])

    const [query, setQuery] = useState("")
    const [searchParam] = useState(["title","author"])
    const search = (wbooks) => {
        return wbooks.filter((wbook) => {
            return (
                searchParam.some((newWbook) => {
                    return (
                        wbook[newWbook]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    )
                })
            )
        })
    }

    return(
        <>  
        <h1 className="titled">My Wishlist</h1>
        <div className="searchBarBlock">
                <label><input type="search" name="search-form"
                    id="search-form"
                    value={query}
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                /></label>
            </div>
        <div className="collectedBooksview">
        <div className="collectedView">
            {search(wbooks).map((wbook)=>(
                <div className="cbookview" key={wbook.id}>
                    <img className="shelfView" src={wbook.image}/>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}

export default WishBooks;