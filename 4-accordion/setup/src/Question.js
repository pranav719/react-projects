import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ id, title, info }) => {
  const [state, setState] = useState(false)
  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setState(!state)}>
          {state ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {state && <p>{info}</p>}
    </div>
  )
}

export default Question
