import React from 'react'
import getConfig from 'next/config'
import {
    ContentNode,
    ContentType,
    Taxonomy,
    TermNode,
    User
} from '../../templates'

const { publicRuntimeConfig } = getConfig()

export const NODE_BY_URI_QUERY = `
query NodeByUri($uri:String!){
  node: nodeByUri(uri:$uri) {
    __typename
    id
    uri
    isContentNode
    isTermNode
    ...ContentNodeTemplate
    ...ContentTypeTemplate
    # ...TermNodeTemplate
    # ...UserTemplate
  }
}
${ContentNode.fragment}
${ContentType.fragment}
`;


const TemplateRouter = props => {

    const { node } = props;

    console.log( props )

    if ( node?.isContentNode ) {
        return <ContentNode {...props} />
    }

    if ( node?.isTermNode ) {
        return <h2>TermNode!</h2>
    }

    switch( node.__typename ) {
        case 'User':
            return <h2>User</h2>
            break;
        case 'ContentType':
            return <ContentType {...props} />
            break;
    }

    return(
        <h2>Not Found...</h2>
    )
}

export default TemplateRouter;
