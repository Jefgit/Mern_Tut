import { useState } from 'react'
import PostsList from './features/post/PostsList'
import AddPostForm from './features/post/AddPostForm'

import React from 'react'

const App = () => {
  return (
    <main className='App'>
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App

