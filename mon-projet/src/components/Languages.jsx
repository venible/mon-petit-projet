import React from 'react'
import { useState } from 'react'

import logo1 from '../assets/images/logo-css.png'
import logo2 from '../assets/images/logo-html5.png'
import logo3 from '../assets/images/logo-js.png'
import logo4 from '../assets/images/python.png'

const Languages = () => {

    const [myLanguages] = useState({
        Languages: 'Les Langages',
    })

    const { Languages } = myLanguages

    return (
        <>
            <h1>{Languages}</h1>

            <div>
                <img src={logo1} alt="CSS" />
                <img src={logo2} alt="HTML" />
                <img src={logo3} alt="JavaScript" />
                <img src={logo4} alt="Python" />

            </div>
        </>
    )
}

export default Languages