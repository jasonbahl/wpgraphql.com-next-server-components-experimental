import React from 'react'
import { fetch } from 'react-fetch'
import ClientPage from "./Page.client";
import ClientPost from "./Post.client";
import SearchField from "./SearchField.client";
const wpEndpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_API;

export default function TemplateRouter({ searchText, location }) {

    const response = fetch(`${wpEndpoint}?query=query SearchPosts($search:String){posts(where:{search:$search}){nodes{id,title}}}&variables={"search":"${searchText}"}`).json();

    let template;

    switch (searchText) {
        case 'Page':
            template = <ClientPage />
            break;
        case 'Post':
            template =  <ClientPost />
            break;
        default:
            response && response.data ? template = (
                <div>
                    <h3>Gaa!!!</h3>
                    <SearchField />
                    <pre>{JSON.stringify(searchText, null, 2 ) }</pre>
                    <h3>Response</h3>
                    <pre>{ JSON.stringify(response, null, 2 ) }</pre>
                </div>
            ) : <>Loading...</>;
            break;
    }

    return template

}
