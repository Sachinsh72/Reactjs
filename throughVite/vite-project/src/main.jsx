import React from 'react'
import ReactDOM from 'react-dom/client'
import { Person, Header, List, Button } from './App'
import {Avatar, DestructuredAvatar} from './Avatar'
import App2 from './App2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Person name="Sachin" age="23" />
    <Header title ="Problem 3"/>
    <List item="Item1"/>
    <List item="Item2"/>
    <Button text="Click to chenge" onClick ={()=> console.log("Button clicked")} />
    <br/>
    <App2/>
  </React.StrictMode>,
)
