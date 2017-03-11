import React from 'react'

const CustomAmtInput = ({ onChange, value }) => (
  <div className="custom-amount expanded input-group">
    <span className="input-group-label">$</span>
    <input className="input-group-field" onChange={onChange} value={value} placeholder='40' type='number' min='0' />
  </div>
)

export default CustomAmtInput

