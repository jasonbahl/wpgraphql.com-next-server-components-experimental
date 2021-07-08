import React from 'react';
import TemplateRouter, { NODE_BY_URI_QUERY } from "../components/TemplateRouter";
import { fetchAPI } from "../lib/api"

const NodeTemplate = props => {
    return <TemplateRouter {...props} />
}

export default NodeTemplate

export async function getStaticProps(context) {

    console.log( context )
    const uri = context.params.uri.join("/");

    const response = await fetchAPI(NODE_BY_URI_QUERY, {
        variables: { uri }
     });

    const node = response?.node;

    if ( ! node ) {
        return { notFound: true };
    }

    return {
        props: {
            node,
            params: context?.params
        },
        revalidate: 60,
    }
}

export function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking",
    }
}


