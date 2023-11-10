import React, { useState } from 'react'

const PersonCard = (props) => {
  const {fn, ln, age, hc} = props.data
  const [birthday, setAge] = useState(age);
  const toggleAge = () => { setAge(birthday + 1) }
  const reset = () => { setAge(age) }

  return (
    <div>
      <h2>{fn} {ln}</h2>
      <h3>{birthday}</h3>
      <h3>{hc}</h3>
      <button onClick={toggleAge}>Happy Birthday</button>
      <button onClick={reset}>Born Today</button>
    </div>
  )
}

export default PersonCard