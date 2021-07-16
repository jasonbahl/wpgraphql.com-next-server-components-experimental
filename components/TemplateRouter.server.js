import React from 'react'
import { fetch } from 'react-fetch'
import ClientPage from "./Page.client";
import ClientPost from "./Post.client";
import SearchField from "./SearchField.client";
const wpEndpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_API;

export default function TemplateRouter({ searchText, location }) {

    const response = fetch(`${wpEndpoint}?query=query SearchPosts($search:String){posts(where:{search:$search}){nodes{id,title}}}&variables={"search":"${searchText}"}`).json()

    switch (searchText) {
        case 'Page':
            return <ClientPage />
        case 'Post':
            return <ClientPost />
        default:
            return (
                <div>
                    <h3>Gaa!!!</h3>
                    <SearchField />
                    <pre>{JSON.stringify(searchText, null, 2 ) }</pre>
                    <h3>Response</h3>
                   <pre>{ JSON.stringify(response, null, 2 ) }</pre>
                </div>
            )
    }

}
