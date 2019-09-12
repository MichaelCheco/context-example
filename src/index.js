import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App, { CountProvider } from './App'

ReactDOM.render(
	<CountProvider>
		<App />
	</CountProvider>,
	document.getElementById('root')
)
