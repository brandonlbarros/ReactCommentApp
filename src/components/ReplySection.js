import React, { Component, useState } from 'react'
import './App.css'

const ReplySection = ({ postData }) => (
  <div>
    {postData.map(post => post)}
  </div>
)

export default ReplySection
