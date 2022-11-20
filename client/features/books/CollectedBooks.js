import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCollectionAsync } from "../../app/BookSlice";

const CollectedBooks = () => {
    const dispatch = useDispatch()
    const cbooks = useSelector((state) => state.all.cbooks)
    const user = useSelector((state) => state.auth.me)
    const { id } = user;

    useEffect(() => {
        dispatch(fetchCollectionAsync(id))
    }, [dispatch])


    const [query, setQuery] = useState("")
    const [searchParam] = useState(["title", "author"])
    const search = (cbooks) => {
        return cbooks.filter((cbook) => {
            return (
                searchParam.some((newCbook) => {
                    return (
                        cbook[newCbook]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    )
                })
            )
        })
    }

    return (
        <>
            <h1 className="titled">My Collection</h1>
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
                    {/* {search(cbooks).map((cbook) => (
                        <div className="cbookview" key={cbook.id}>
                            <Link key={cbook.id} to={`/collection/${cbook.id}`}>
                                <img className="shelfView" src={cbook.image} />
                            </Link>
                        </div>
                    ))} */}
                    {cbooks && cbooks.length ? search(cbooks).map((cbook) => (
                        <div className="cbookview" key={cbook.id}>
                            <Link key={cbook.id} to={`/collection/${cbook.id}`}>
                                <img className="shelfView" src={cbook.image} />
                            </Link>
                        </div>
                    )) : <>
                    <h1>No Books in Collection Yet</h1>
                    </>}
                </div>
            </div>
        </>
    )
}

export default CollectedBooks;