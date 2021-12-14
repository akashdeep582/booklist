import React,{useContext, useState} from "react";
import { BookContext } from "../contexts/BookContext";

function BookForm(book) {
    const {addBook} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(title,author);
            addBook(title,author)
            setTitle('')
            setAuthor('')
        }
    

    return (
        <form onSubmit={handleSubmit}>
        <input onChange={(e)=> setTitle(e.target.value)} value = {title} type="text" placeholder="title"></input>
        <input onChange={(e)=> setAuthor(e.target.value)} value ={author} type="text" placeholder="title"></input>
        <button type = "submit">Submit</button>
        </form>
    )
}

export default BookForm;
