import React from 'react'

const Button = ({ name, background, textColor, onSubmit }) => {
  return (
    <div
      onClick={onSubmit}
      className={`flex rounded-full justify-center w-80 h-12 items-center ${
        background && 'bg-sky hover:bg-sky-dark'
      } border border-inherit cursor-pointer`}
    >
      <p className={`${textColor} font-bold`}>{name}</p>
    </div>
  )
}

export default Button
