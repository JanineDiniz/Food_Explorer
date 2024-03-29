import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider} from 'styled-components'
import GlobalStyles from './styles/global'

import theme from './styles/theme'

import {SignIn} from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import {Home} from './pages/Home'
import { New } from './pages/New'
import { Edit } from './pages/Edit'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Edit />
    </ThemeProvider>
  </React.StrictMode>,
)
