import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

if (typeof window !== "undefined") {
    hydrate(<App/>, document.getElementById('root'))
}

