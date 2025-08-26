import React from 'react'

const CompB = (props) => {
  return (
    <div>
        <h1>Parent button clicked by {props.name} times</h1>
        <h1>{props.value}</h1>
    </div>
  )
}

export default CompB