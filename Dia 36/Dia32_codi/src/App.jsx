import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import CondicionalComponent from './components/CondicionalComponent';
import GithubUser from './components/GithubUser';

function App() {

  return (
    <div>
      <GithubUser
        userName="meduardajustino"/>
    </div>
  )
}

export default App;
