import React, {useContext} from "react";
import { BookContext } from "../contexts/BookContext";

export const Navbar = () => {
    const {book} = useContext(BookContext)
    return (
        <div className = "Book Club">
        <h1>Club Reading List</h1>
        <p>Currently you have {book.length} book to go through...</p>
        </div>
    )
}
