import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './App'
import '../styles/globals.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='h-screen w-screen p-16 bg-[#264492] text-white max-[400px]:p-8'>
      <MainPage />
    </main>
  </StrictMode>,
)
