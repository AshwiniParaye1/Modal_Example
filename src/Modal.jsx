import React from 'react'

function Modal(props) {

  if(!props.show){
    console.log("modal component")
    return null
  } 
  return (
    <>
    
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-title'>
            <h1>Modal Title</h1>
          </div>
          <div className='modal-content-body'>Modal content</div>
            <div className='modal-close-button'>
              <button onClick={props.onClose}>Close</button>
            </div>
        </div>
      </div>

    </>
  )
}

export default Modal