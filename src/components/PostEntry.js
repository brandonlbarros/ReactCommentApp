import React, { Component, useState } from 'react'
import './App.css'
import BasePost from './BasePost'

const isValid = (a, b) => (a.length > 0) && (b.length > 0)

const PostEntry = ({ posts, submitPost, canReply, n, setReply }) => {
  const [name, setName] = useState('')
  const [entry, setEntry] = useState(n ? (`@${n} `) : '')
  const valid = isValid(name, entry)

  const handleSubmit = e => {
    e.preventDefault()
    submitPost([...posts, <BasePost key={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)} name={name} entry={entry} canReply={canReply - 1} />])
    setEntry('')
    setName('')
    if (setReply) {
      setReply(false)
    }
  }

  return (
    <div className="postArea">
      {canReply === 3
        ? <h3>CIS 195</h3>
        : <h4>{`Reply to ${n}`}</h4>}
      <form onSubmit={handleSubmit}>
        <div className="entryBox">
          <input
            placeholder="Name..."
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="entryBox postEntry">
          <textarea
            type="text"
            placeholder="Post..."
            value={entry}
            onChange={e => {
              setEntry(e.target.value)
            }}
          />
        </div>
        <div className="entryBox">
          <input className={valid ? 'submitButtonReady' : 'submitButtonNotReady'} type="submit" disabled={!valid} value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default PostEntry
