import React, {useContext} from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails"


export default function BookList() {

    const {book} = useContext(BookContext);

    return book.length ?(
      <div className= "book-list">
          <ul>
              {book.map (book => {
                  return (<BookDetails book = {book} key = {book.id}/>)
              } )}
          </ul>
      </div>
    ) :
    (
        <div className="empty">No Books to read </div>

    )
}
