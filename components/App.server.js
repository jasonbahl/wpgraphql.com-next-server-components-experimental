import React, { Suspense } from 'react'
import TemplateRouter from "./TemplateRouter.server";

export default function App({ selectedId = 0, isEditing = false, searchText, login = '' }) {

  return (
    <div className="container">
      <h2>Test...</h2>
        <Suspense fallback={<h2>Loading...</h2>}>
            <TemplateRouter searchText={searchText ? searchText : "No search text"} location={'location, test'}/>
        </Suspense>
    </div>
  )
}
