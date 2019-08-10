import React from 'react'

export default ({ x, y, radius, color }) => (
  <circle className='ball' cx={x} cy={y} r={radius} />
)