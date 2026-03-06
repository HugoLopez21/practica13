import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ejercicio01 from './Ejercicio01'
import BookList from './Ejercicio02'
import Ejercicio03 from './Ejercicio03'
import Ejercicio04 from './Ejercicio04-05'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ejercicio01 />
    <BookList />
    <Ejercicio03 />
    <Ejercicio04 />
  </StrictMode>,
)
