import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const units = [
  {
    id: 1,
    name: "The Cascade Unit",
    description: "Modern, high-end finishes with a focus on light and views.",
    images: [
      { type: "Living Room", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" },
      { type: "Bedroom", url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop" },
      { type: "Bathroom", url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop" }
    ]
  },
  {
    id: 2,
    name: "The Summit Unit",
    description: "Designed for comfort and modern living with premium materials.",
    images: [
      { type: "Living Room", url: "https://images.unsplash.com/photo-1600607687940-47a0f925901e?q=80&w=2070&auto=format&fit=crop" },
      { type: "Bedroom", url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop" },
      { type: "Bathroom", url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" }
    ]
  }
]

const Interiors = () => {
  const [activeUnit, setActiveUnit] = useState(0)
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section id="interiors" className="py-24 bg-pinnacle-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4 block"
            >
              Interior Design
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif mb-8"
            >
              Cinematic Living Spaces
            </motion.h2>
            
            <div className="space-y-8">
              {units.map((unit, index) => (
                <button
                  key={unit.id}
                  onClick={() => {
                    setActiveUnit(index)
                    setActiveImage(0)
                  }}
                  className={`block text-left group w-full ${activeUnit === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <span className="text-[10px] uppercase tracking-widest mb-1 block">Unit 0{unit.id}</span>
                  <h3 className="text-xl font-serif mb-2">{unit.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-xs transition-opacity group-hover:opacity-100">
                    {unit.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-12 flex space-x-4">
              <button 
                onClick={() => setActiveImage((prev) => (prev > 0 ? prev - 1 : units[activeUnit].images.length - 1))}
                className="p-3 border border-white/20 hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveImage((prev) => (prev < units[activeUnit].images.length - 1 ? prev + 1 : 0))}
                className="p-3 border border-white/20 hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 relative aspect-video w-full bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeUnit}-${activeImage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img 
                  src={units[activeUnit].images[activeImage].url} 
                  alt={units[activeUnit].images[activeImage].type}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-10 right-10 text-right">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 mb-1 block">View Type</span>
                  <span className="text-2xl font-serif italic">{units[activeUnit].images[activeImage].type}</span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-10 left-10 flex space-x-2">
              {units[activeUnit].images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 w-8 transition-all ${activeImage === idx ? 'bg-white w-12' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interiors

