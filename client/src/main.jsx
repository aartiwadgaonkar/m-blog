import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from "react-redux"
import reduxStore from './redux/strore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={reduxStore}>

    <App />
  </Provider>
  </React.StrictMode>,
)
