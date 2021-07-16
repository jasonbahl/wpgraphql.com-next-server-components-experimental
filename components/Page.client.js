import React, { useState, useEffect } from 'react'
import SearchField from "./SearchField.client";

const ClientPage = () => {

    const [ count, setCount ] = useState( 1 );

    useEffect(() => {
        console.log( 'page is mounted! ')
    }, [])

    return (
        <>
            <h2>Page</h2>
            <SearchField />
            <button onClick={() => { setCount( count + 1 )}}>{count}</button>
        </>
    )
}

export default ClientPage
