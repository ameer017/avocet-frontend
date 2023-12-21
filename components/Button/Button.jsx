import React from 'react'

const Button = ({btnName, onClick}) => {
  return (
    <button
      type="button"
      style={{
        margin: "10px",
        borderRadius: "15px",
        width: "150px",
        
       
      }}
      onClick={onClick}
    >
      {btnName}
    </button>
  )
}

export default Button