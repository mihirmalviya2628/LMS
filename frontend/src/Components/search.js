import React, { useEffect, useState } from 'react'
import axios from "axios"

function Search() {
    const API_URL = process.env.REACT_APP_API_URL

    const [allBooks, setAllBooks] = useState([])
    const [text, setText] = useState(null)
    const [filteredBooks, setFilteredBooks] = useState([])

    useEffect(() => {
        const getallBooks = async () => {
            const response = await axios.get(API_URL + "api/books/allbooks")
            setAllBooks(response.data.slice(0, 5))
        }
        getallBooks()
    }, [API_URL])

    useEffect(() => {
        const filtered = allBooks.filter(book => book.bookName.includes(text))
        setFilteredBooks(filtered)
    }, [allBooks, text])

    console.log("allBooks",allBooks)
    console.log("filteredBooks",filteredBooks)

    return (
        <div style={{position: 'relative'}}>
            <input
                className='search-input'
                style={{width: '400px'}}
                onChange={(e) => setText(e.target.value)}
                type='text'
                placeholder='Search a Book'
            />
            {filteredBooks.length && <div  style={{backgroundColor: "white", position: 'absolute', top: '40px', width:'400px', borderRadius:'10px', padding:'8px'}}>
                {filteredBooks.map(book => (
                    <div key={book.id}  >{book.bookName}</div>
                ))}
            </div>}
        </div>
    )
}

export default Search
