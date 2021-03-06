import React, { Component, useState, useEffect } from 'react'
import PostEntry from './PostEntry'
import ReplySection from './ReplySection'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])
  return (
    <div>
      <PostEntry posts={posts} submitPost={setPosts} canReply={3} n="" />
      <ReplySection postData={posts} />
    </div>
  )
}

export default App
