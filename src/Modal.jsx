import React from 'react'

function Modal(props) {

  if(!props.show){
    console.log("modal component")
    return null
  } 
  return (
    <>
    
      {/* if clicked outside, closes the modal */}
      <div className='modal' onClick={props.onClose}> 

      {/* stop-propogation - if you click inside the content, it will stop at 
      .modal-content and the onClick in .modal will never be called. */}

        <div className='modal-content' onClick={e => e.stopPropagation()}>
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