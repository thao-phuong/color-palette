import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#b2d66b').all(5))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color). all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  return(
    <>
      <section className='container'>
        <h3>Color Palette</h3>
        <form onSubmit = {handleSubmit}>
          <input 
            type = 'text'
            value = {color}
            onChange = {(e) => setColor(e.target.value)}
            placeholder = '#b2d66b'
            className = {`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((item, index) => {
          return (
            <SingleColor 
              key = {index}
              {...item}
              index = {index}
              hexColor = {item.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
