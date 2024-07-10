import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={function() {
        setCount(count + 1);
      }}>Count is {count}</button>
    </div>
  )
}

export default App