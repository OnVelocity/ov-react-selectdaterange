import React from 'react'
import logo from './logo.svg'
import { SelectDateRange } from './SelectDateRange'
import './App.css'

function App({ onDateSelected }) {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
			<SelectDateRange onDateSelected={onDateSelected} />
		</div>
	)
}

export default App
