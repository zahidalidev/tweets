import React from 'react'

const ModalForm = ({ show = false, showModal }) => {
  return (
    <div
      className={`${
        show ? 'block' : 'hidden'
      } fixed flex items-center justify-center bg-gray-700 bg-opacity-70 z-10 w-full h-full overflow-auto top-0 left-0`}
    >
      <div className='bg-white w-4/12 rounded-2xl flex flex-col mt-4 ml-4 '>
        <span onClick={() => showModal(false)} className='close text-4xl cursor-pointer'>
          &times;
        </span>
        <div className='flex flex-col m-8' >
          <input placeholder='Name' className='w-96 h-14 border border-inherit rounded-lg p-2' />
        </div>
      </div>
    </div>
  )
}

export default ModalForm
