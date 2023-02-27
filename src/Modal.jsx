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
          <div className='modal-content-body'>Lorem ipsum dolor sit amet. Et aliquid quidem sed labore internos et adipisci velit et illum deleniti. Et dolorem omnis nam cupiditate labore hic consequatur voluptatum 33 quos officia non quia fuga.

            Et nulla voluptatum hic unde officiis id delectus deserunt qui odio esse in Quis velit et quod assumenda. Sit eaque earum eum dolor consequatur quo soluta ducimus ad atque omnis hic molestias eius eum numquam galisum? Et aspernatur ipsa et soluta nemo eum similique laudantium qui molestias molestiae non ratione assumenda ut debitis atque est fuga incidunt.
          </div>
            <div className='modal-footer'>
              <button className='close-button' onClick={props.onClose}>Close</button>
            </div>
        </div>
      </div>

    </>
  )
}

export default Modal