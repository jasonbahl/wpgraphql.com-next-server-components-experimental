import React from 'react'
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig()

const ContentNode = props => {
    console.log(props)
    return(
        <div>
            <h2>ContentNode</h2>
            {props?.node?.title ? <h3>{props.node.title}</h3> : null}
            <pre>{JSON.stringify(publicRuntimeConfig)}</pre>
            <pre>{JSON.stringify(props, null, 2 )}</pre>
        </div>
    )
}

ContentNode.fragment = `
fragment ContentNodeTemplate on ContentNode {
  contentType {
   node {
     name
     label
     description
     labels {
       addNew
       allItems
       archives
       attributes
       editItem
     }
   }
  }
  ...on NodeWithTitle {
    title
  }
}
`;

export default ContentNode;
