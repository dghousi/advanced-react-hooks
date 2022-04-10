// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 10}) {
  const countReducer = (previousCount, newCount) => {
    return newCount
  }

  const [count, setCount] = React.useReducer(countReducer, initialCount)

  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
