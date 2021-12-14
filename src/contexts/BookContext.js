import React,{createContext,useState, useReducer} from "react";

const { v4: uuidv4 } = require('uuid');


export const BookContext = createContext();


const BookContextProvider = (props) => {

    const [book, setBook] = useState([]);
    console.log(book);

    const addBook= (title,author) => {
        setBook([...book,{title,author,id:uuidv4()}])
    }

    const removeBook= (id) =>{
        setBook(book.filter(item => item.id!==id))


    }
    return (
        <BookContext.Provider value ={{book,addBook,removeBook}}>
        {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;
