import { useState } from 'react'
import Cover from './components/Cover'
import Shoptomi1 from './components/Shoptomi1'
import Shoptomi2 from './components/Shoptomi2'
import Oshtomi from './components/Oshtomi'
import Nabami from './components/Nabami'
import Dashami from './components/Dashami'
import Proposal from './components/Proposal'
import Celebration from './components/Celebration'
import './App.css'

const PAGES = [
  Cover,        // 0
  Shoptomi1,    // 1
  Shoptomi2,    // 2
  Oshtomi,      // 3
  Nabami,       // 4
  Dashami,      // 5
  Proposal,     // 6
  Celebration,  // 7
]

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const goNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, PAGES.length - 1))
  }

  const CurrentPage = PAGES[currentPage]

  return (
    <div className="app">
      {/* key={currentPage} guarantees fresh DOM mount and triggers page-enter animation reliably on every device */}
      <div
        key={currentPage}
        className="page-enter"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <CurrentPage onNext={goNext} pageIndex={currentPage} />
      </div>
    </div>
  )
}

export default App
