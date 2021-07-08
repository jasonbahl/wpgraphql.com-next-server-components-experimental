import React from 'react'

const ContentType = props => {
    const { node } = props;
    return(
        <>
            <h2>{node.name}</h2>
            <span>{node.description}</span>
            <pre>{JSON.stringify(node, null, 2 )}</pre>
            <ContentTypeNodes graphqlSingleName={node.graphqlSingleName} />
        </>
    )
}

const CONTENT_NODES_FRAGMENT = `
fragment ActionsList on ContentType {
  contentNodes {
    nodes {
      __typename
      ...on Action {
        title
        uri
      }
    }
  }
}
`;

const ContentTypeNodes = props => {

    return (
        <div>
            <pre>{JSON.stringify(props, null, 2 )}</pre>
        </div>
    )
}

ContentType.fragment = `
fragment ContentTypeTemplate on ContentType {
  __typename
  name
  label
  graphqlSingleName
  description
  ...ActionsList
}
${CONTENT_NODES_FRAGMENT}
`;

export default ContentType;
