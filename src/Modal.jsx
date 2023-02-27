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
          <div className='modal-header'>
            <h4 className='modal-title'>Modal Title</h4>
          </div>
          <div className='modal-content-body'>Modal content</div>
            <div className='modal-footer'>
              <button className='close-button' onClick={props.onClose}>Close</button>
            </div>
        </div>
      </div>

    </>
  )
}

export default Modal