import React, { Suspense } from 'react'
import TemplateRouter from "./TemplateRouter.server";


import SearchField from './SearchField.client'

import Note from './Note.server'
import NoteList from './NoteList.server'
import AuthButton from './AuthButton.server'

import NoteSkeleton from './NoteSkeleton'
import NoteListSkeleton from './NoteListSkeleton'
import {useLocation} from "./LocationContext.client";

export default function App({ selectedId, isEditing, searchText, login }) {

  return (
    <div className="container">
      <h2>Test...</h2>
      <TemplateRouter searchText={searchText ? searchText : "No search text"} location={'location, test'}/>
    </div>
  )
}
