import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Icon from './atoms/Icon/Icon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Icon name="session_Icon" size={240} />
    </>
  )
}

export default App
