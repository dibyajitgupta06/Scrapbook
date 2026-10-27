import { useState } from 'react'
import AudioPlayer from './components/AudioPlayer'
import Captcha from './components/Captcha'
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
  Captcha,      // 0: Playful "Who is the most beautiful woman?" verification
  Cover,        // 1: Scrapbook Entrance (PUJO 2026 — আমাদের পুজোর গল্প)
  Shoptomi1,    // 2: সপ্তমী · ০১ (Rickshaw Ride)
  Shoptomi2,    // 3: সপ্তমী · ০২ (Walking together)
  Oshtomi,      // 4: অষ্টমী (Photograph)
  Nabami,       // 5: নবমী (Gift & Payel)
  Dashami,      // 6: দশমী (Rose bouquet & Bijoya)
  Proposal,     // 7: Proposal with escaping NO button
  Celebration,  // 8: Celebration & Promise
]

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  const goNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, PAGES.length - 1))
  }

  const CurrentPage = PAGES[currentPage]

  return (
    <div className="app">
      {/* Continuous Durga Puja Dhak background sound player */}
      <AudioPlayer />

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
