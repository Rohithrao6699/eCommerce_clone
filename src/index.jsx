import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Appcontexts from './contexts/Contextusers';


const el = document.getElementById('root')
const Root = ReactDom.createRoot(el)
Root.render(
<BrowserRouter>
   <Appcontexts>
      <App />
   </Appcontexts>
</BrowserRouter>
)
