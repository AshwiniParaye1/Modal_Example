import React from 'react'

function Modal(props) {

  if(!props.show){
    console.log("modal component")
    return null
  } 
  return (
    <>
    
      <div className='modal'>
        <h1>Modal</h1>
      </div>

    </>
  )
}

export default Modal