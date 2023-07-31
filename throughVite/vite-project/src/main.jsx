import React from 'react'
import ReactDOM from 'react-dom/client'
import { Person, Header, List } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person name="Sachin" age="23" />
    <Header title ="Problem 3"/>
    <List item="Item1"/>
    <List item="Item2"/>
    {/* <Button text="Click to chenge" /> */}
  </React.StrictMode>,
)
