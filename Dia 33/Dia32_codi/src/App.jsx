import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  return (
    <div>
      <MyComponent
        title="Título via propriedades(props)"
        description="Descrição via propriedades(props)"
      />
    </div>
  )
}

export default App;
