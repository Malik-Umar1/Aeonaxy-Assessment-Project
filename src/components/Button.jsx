import React from 'react'

const Button = ({className,children,type,onClick}) => {
  return (
    <button 
    className={className}
    type={type}   
    onClick={onClick}  
    >     
     {children}        
    </button>
  )
}

export default Button