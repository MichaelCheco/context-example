import React from 'react'
import logo from './logo.svg'
import './App.css'
const CountStateContext = React.createContext()
const CountDispatchContext = React.createContext()
function countReducer(state, action) {
	switch (action.type) {
		case 'ADD': {
			return { count: state.count + 1 }
		}
		default: {
			throw new Error()
		}
	}
}
export function CountProvider(props) {
	const [state, dispatch] = React.useReducer(countReducer, { count: 0 })
	return (
		<CountStateContext.Provider value={state}>
			<CountDispatchContext.Provider value={dispatch}>
				{props.children}
			</CountDispatchContext.Provider>
		</CountStateContext.Provider>
	)
}
function useCountState() {
	const context = React.useContext(CountStateContext)
	if (context === undefined) {
		throw new Error('useCountState must be used within a CountProvider')
	}
	return context
}
function useCountDispatch() {
	const context = React.useContext(CountDispatchContext)
	if (context === undefined) {
		throw new Error('useCountDispatch must be used within a CountProvider')
	}
	return context
}
function App() {
	const state = useCountState()
	const dispatch = useCountDispatch()
	return (
		<div className="App">
			<header className="App-header">
				<h1>{state.count}</h1>
				<button onClick={() => dispatch({ type: 'ADD' })}>increment</button>
			</header>
		</div>
	)
}

export default App
