import React from 'react'
import { useState } from 'react'
import logo5 from '../assets/images/logo-html5.png'
const Tools = () => {

  const [myTools, setMyTools] = useState({
    Tools: 'Les outils',

  })

  const {Tools} = myTools

  return (
    <>
    <h1>{Tools}</h1>
    <img src="{logo5}" alt="React" />
    

</>
  )
}

export default Tools