import React, { Component, useState } from 'react'
import Incrementer from './Incrementer'
import './App.css'
import ReplyArea from './ReplyArea'

const BasePost = ({ name, entry, canReply }) => (
  <div className="miniBoxed" key={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)}>
    <div className="side">
      <Incrementer />
    </div>
    <div>
      <p className="name">
        {` ${name}`}
      </p>
      <p>
        {` ${entry}`}
      </p>
    </div>
    <ReplyArea canReply={canReply} name={name} />
  </div>
)

export default BasePost
