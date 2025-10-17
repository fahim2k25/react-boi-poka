import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data => setAllBooks(data));

    }, [])
    return (
        <div className='border-3 border-emerald-600'>
            <p className='text-3xl font-medium font-mono text-center'>Book lists starts here</p>
            <h3 className='text-xl font-light font-mono text-center'>No. of Books loaded: {allBooks.length}</h3>

        </div>
    );
};

export default Books;