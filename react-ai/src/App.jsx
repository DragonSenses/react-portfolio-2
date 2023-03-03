import { useState } from 'react'
import Layout from './components/Layout'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Main />
    </Layout>
  )
}

export default App
