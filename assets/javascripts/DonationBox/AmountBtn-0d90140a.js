import React from 'react'

const AmountBtn = ({ amount, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`button secondary ${isActive ? 'active' : ''}`}>
    ${amount}
  </button>
)

export default AmountBtn

