import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import VideoShowcase from './components/VideoShowcase'
import Amenities from './components/Amenities'
import Interiors from './components/Interiors'
import InteractiveMap from './components/InteractiveMap'
import Timeline from './components/Timeline'
import Investment from './components/Investment'
import Footer from './components/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-900 origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <VideoShowcase />
        <Amenities />
        <Interiors />
        <InteractiveMap />
        <Timeline />
        <Investment />
      </main>
      <Footer />
    </div>
  )
}

export default App
