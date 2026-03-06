import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BookList from './BookList';
import './index.css';




createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BookList />
    </StrictMode>,
)