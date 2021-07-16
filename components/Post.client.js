import React, {useEffect, useState} from 'react'
import SearchField from "./SearchField.client";

const ClientPost = () => {
    const [ count, setCount ] = useState( 1 );

    useEffect(() => {
        console.log( 'post is mounted! ')
    }, [])

    return (
        <>
            <h2>Post</h2>
            <SearchField />
            <button onClick={() => { setCount( count + 1 )}}>{count}</button>
        </>
    )
}

export default ClientPost
