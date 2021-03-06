import React, { Component, useState } from 'react'
import './App.css'

const Incrementer = () => {
  const [num, setNum] = useState(0)

  const increment = e => {
    e.preventDefault()
    setNum(num + 1)
  }

  const decrement = e => {
    e.preventDefault()
    setNum(num - 1)
  }

  return (
    <div className="incrementer">
      <form className="top" onSubmit={increment} key={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)}>
        <input type="submit" value="⬆️" />
      </form>
      <div className="center">
        {num.toString()}
      </div>
      <form
        className="bottom"
        onSubmit={decrement}
        key={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)}
      >
        <input type="submit" value="⬇️" />
      </form>
    </div>
  )
}

export default Incrementer
