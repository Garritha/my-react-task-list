import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

<<<<<<< HEAD
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'
=======
import { ChakraProvider } from '@chakra-ui/react'
>>>>>>> a018da4372ded818c2db2186452a87f35a6fd56e


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ChakraProvider>
<<<<<<< HEAD
    <ColorModeScript initialColorMode='ligth' />
=======
>>>>>>> a018da4372ded818c2db2186452a87f35a6fd56e
    <App />
  </ChakraProvider>
    
  </React.StrictMode>,
)
