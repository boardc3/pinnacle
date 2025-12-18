import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Background Image/Video Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: "url('/header.png')" }}
      >
        {/* In a real project, this would be a high-quality cinematic video loop */}
      </div>

      <div className="relative z-20 text-center text-white px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.5em] mb-4 block opacity-80">Sceneset.AI Presents</span>
          <h1 className="text-6xl md:text-9xl font-serif mb-6 leading-none tracking-tight">
            The Pinnacle
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-12 opacity-90 italic max-w-3xl mx-auto">
            Experience the future of residential living in Ithaca through cinematic storytelling.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-white text-gray-900 px-12 py-5 text-sm uppercase tracking-widest hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Explore the Story
            </button>
            <button className="border border-white/40 backdrop-blur-sm text-white px-12 py-5 text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
              The Location
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-60">Begin Experience</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

