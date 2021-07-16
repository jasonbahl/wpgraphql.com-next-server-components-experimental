import React from 'react'
import { fetch } from 'react-fetch'
import Tag from "./Tag";
import ClientPage from "./Page.client";
import ClientPost from "./Post.client";

export default function TemplateRouter({ searchText, location }) {

    console.log( `http://wpgraphql.local/graphql?query=query SearchPosts($search:String){posts(where:{search:$search}){nodes{id,title}}}&variables={"search":"${searchText}"}` );

    const response = fetch(`http://wpgraphql.local/graphql?query=query SearchPosts($search:String){posts(where:{search:$search}){nodes{id,title}}}&variables={"search":"${searchText}"}`).json()


    switch (searchText) {
        case 'Page':
            return <ClientPage />
            break;
        case 'Post':
            return <ClientPost />
            break;
        default:
            return <Tag />
    }

    // console.log( response )
    // console.log( `location yo ${location}`)
    // console.log( `search text yo ${searchText}`)
    //
    // return (
    //     <div>
    //         <h3>Gaa!!!</h3>
    //         <SearchField />
    //         <pre>{JSON.stringify(searchText, null, 2 ) }</pre>
    //         <h3>Response</h3>
    //         <pre>{ JSON.stringify(response, null, 2 ) }</pre>
    //     </div>
    // );

    // return notes.length > 0 ? (
    //     <ul className="notes-list">
    //         {notes.map(note =>
    //             note &&
    //             (!searchText ||
    //                 note.title.toLowerCase().includes(searchText.toLowerCase())) ? (
    //                 <li key={note.id}>
    //                     <SidebarNote note={note} />
    //                 </li>
    //             ) : null
    //         )}
    //     </ul>
    // ) : (
    //     <div className="notes-empty">
    //         {searchText
    //             ? `Couldn't find any notes titled "${searchText}".`
    //             : 'No notes created yet!'}{' '}
    //     </div>
    // )
}
