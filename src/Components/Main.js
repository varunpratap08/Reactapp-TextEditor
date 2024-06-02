import React from 'react'
import Counter from './Counter'
import Form from './Form'
import TextEditor from './TextEditor'

function Main() {
  return (
    <div id='main' >
        <div className='upper'>
        <Counter/>
       <TextEditor/>
        </div>
      <div className='Lower'>
      <Form/>
      </div>
      
    </div>
  )
}

export default Main
