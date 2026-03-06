import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import BookList from './BookList'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BookList />
    </StrictMode>
)