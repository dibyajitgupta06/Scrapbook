import { useState, useCallback, useRef } from 'react'
import Cover from './components/Cover'
import Shoptomi1 from './components/Shoptomi1'
import Shoptomi2 from './components/Shoptomi2'
import Oshtomi from './components/Oshtomi'
import Nabami from './components/Nabami'
import Dashami from './components/Dashami'
import Proposal from './components/Proposal'
import Celebration from './components/Celebration'
import './App.css'

const PAGES = [Cover, Shoptomi1, Shoptomi2, Oshtomi, Nabami, Dashami, Proposal, Celebration]

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [animClass, setAnimClass] = useState('page-enter')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayPage, setDisplayPage] = useState(0)
  const timeoutRef = useRef(null)

  const goTo = useCallback((pageIndex) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setAnimClass('page-exit')

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setDisplayPage(pageIndex)
      setCurrentPage(pageIndex)
      setAnimClass('page-enter')
      setTimeout(() => {
        setIsTransitioning(false)
      }, 550)
    }, 380)
  }, [isTransitioning])

  const goNext = useCallback(() => {
    if (currentPage < PAGES.length - 1) {
      goTo(currentPage + 1)
    }
  }, [currentPage, goTo])

  const CurrentPage = PAGES[displayPage]

  return (
    <div className="app">
      <div className={animClass} style={{ position: 'absolute', inset: 0 }}>
        <CurrentPage onNext={goNext} pageIndex={displayPage} />
      </div>
    </div>
  )
}

export default App
