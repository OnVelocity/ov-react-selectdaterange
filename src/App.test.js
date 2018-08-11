/*global it*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
	expect.assertions(1)
	const div = document.createElement('div')
	ReactDOM.render(<App />, div)
	ReactDOM.unmountComponentAtNode(div)
	expect(div).toBeDefined()
})
