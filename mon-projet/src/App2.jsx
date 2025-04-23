import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  //mauvaise pratique
  //let prenom = "Guy"
  //let nom = "ASSOHOUN"

  //Bonne pratique

  const [prenom, setPrenom] = useState("Guy")
  const [nom, setNom] = useState("ASSOHOUN")
  const [age, setAge] = useState(20)

  function changePrenomNom() {
    setPrenom("David")
    setNom("Wils")
  }
  //une fonction qui change l'age en l'incrémentant de 1
  function incrementAge() {
    setAge(age + 1)
  }

    //une fonction qui change l'age en diminuant de 1
    function decrementAge() {
      setAge(age - 1)
    }


  return (
    <>
      <h1>
        Bonjour {prenom} {nom}
      </h1>

      <button onClick={changePrenomNom}>
        Changer le nom et le prenom
      </button>

      <h2>
        vous avez {age} ans
      </h2>
      
        <button onClick={incrementAge}>
          +
        </button>
      

        <button onClick={decrementAge}>
          -
        </button>
      








      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
