import React from 'react'
// import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'

import App from './App'

const rootElement = document.querySelector('#root')
const root = createRoot(rootElement)

root.render(
    <App />
)