import React, { useState } from 'react'

const Person = (props) => {
  return (
    <li>{props.person.name}</li>
  )
}

export default Person
