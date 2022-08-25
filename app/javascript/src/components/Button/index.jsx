import React from 'react'

const Button = ({ name, background, textColor, onSubmit }) => {
  return (
    <div
      onClick={onSubmit}
      className='flex rounded-full justify-center w-80 h-12 items-center bg-sky-500 border border-inherit cursor-pointer hover:bg-sky-700'
      style={{ backgroundColor: background && 'rgb(14 165 233)' }}
    >
      <p className={`${textColor} font-bold`}>{name}</p>
    </div>
  )
}

export default Button
