import React from 'react'

import Button from '../Button'

const ModalForm = ({ show = false, showModal, heading, fields, onChange, onSubmit, action }) => (
  <div
    className={`${
      show ? 'block' : 'hidden'
    } fixed flex items-center justify-center bg-gray-700 bg-opacity-70 z-10 w-full h-full overflow-auto top-0 left-0`}
  >
    <div className='bg-white w-4/12 rounded-2xl flex flex-col mt-4 ml-4 '>
      <span
        onClick={() => showModal(false)}
        className='close text-4xl cursor-pointer m-4 ml-4 mb-1 w-4'
      >
        &times;
      </span>
      <div className='flex flex-col m-3 mt-1 items-center justify-center'>
        <h2 className='text-3xl font-bold mb-5'>{heading}</h2>
        {fields.map((item, index) => (
          <input
            key={item.id}
            value={item.value}
            onChange={(e) => onChange(e.target.value, index)}
            placeholder={item.placeholder}
            type={item.type}
            className='w-4/5 h-14 border mt-5 border-inherit rounded-lg p-2 active:border active:border-inherit focus:border focus:border-inherit'
          />
        ))}
        <div className='m-12'>
          <Button
            onSubmit={onSubmit}
            background
            textColor='text-white'
            name={action}
          />
        </div>
      </div>
    </div>
  </div>
)

export default ModalForm
