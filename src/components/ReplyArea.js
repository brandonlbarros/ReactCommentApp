import React, { Component, useState } from 'react'
import PostEntry from './PostEntry'
import './App.css'
import ReplySection from './ReplySection'

const ReplyArea = ({ canReply, name }) => {
  const [reply, setReply] = useState(false)
  const [replies, setReplies] = useState([])

  const replyBox = e => {
    e.preventDefault()
    if (reply) {
      setReply(false)
    } else {
      setReply(true)
    }
  }

  return (
    <div>
      {(canReply > 0)
        ? (
          <form onSubmit={replyBox} key={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)}>
            <input className="replyButtonReady" type="submit" value="Reply" />
          </form>
        ) : <></>}
      {reply
        ? (
          <PostEntry
            posts={replies}
            setReply={setReply}
            submitPost={setReplies}
            canReply={canReply}
            n={name}
          />
        )
        : <></>}
      <ReplySection postData={replies} />
    </div>
  )
}

export default ReplyArea
