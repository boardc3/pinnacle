import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Info, Navigation, Utensils, GraduationCap, Martini, ShoppingBag, Trees } from 'lucide-react'

const locations = [
  { 
    id: 1, 
    name: "The Pinnacle", 
    x: 48, y: 38, 
    category: "Residence", 
    icon: <MapPin className="w-4 h-4" />,
    info: "Former Gun Hill Apartments. Luxury living with unmatched views of the gorge.",
    stats: { walk: "0 min", type: "Home" },
    address: "210 Lake St, Ithaca, NY 14850"
  },
  { 
    id: 2, 
    name: "Ithaca Falls", 
    x: 52, y: 32, 
    category: "Nature", 
    icon: <Trees className="w-4 h-4" />,
    info: "A 150ft spectacular waterfall. One of the most iconic natural landmarks in the Finger Lakes.",
    stats: { walk: "5 min", type: "Sightseeing" },
    address: "Lake St, Ithaca, NY 14850"
  },
  { 
    id: 3, 
    name: "Cornell University", 
    x: 62, y: 42, 
    category: "Education", 
    icon: <GraduationCap className="w-4 h-4" />,
    info: "Access to the main campus and the world-renowned Johnson Museum of Art.",
    stats: { walk: "8 min", type: "Campus" },
    address: "Ithaca, NY 14853"
  },
  { 
    id: 4, 
    name: "The Commons", 
    x: 42, y: 62, 
    category: "Shopping", 
    icon: <ShoppingBag className="w-4 h-4" />,
    info: "Ithaca's pedestrian mall. Home to local boutiques, bookstores, and seasonal festivals.",
    stats: { walk: "15 min", type: "Retail" },
    address: "171 E State St, Ithaca, NY 14850"
  },
  { 
    id: 5, 
    name: "Gola Osteria", 
    x: 58, y: 55, 
    category: "Dining", 
    icon: <Utensils className="w-4 h-4" />,
    info: "High-end Italian dining located in the historic Quarry Arms building.",
    stats: { walk: "12 min", type: "Upscale" },
    address: "115 Quarry St, Ithaca, NY 14850"
  },
  { 
    id: 6, 
    name: "The Argos Inn", 
    x: 45, y: 58, 
    category: "Nightlife", 
    icon: <Martini className="w-4 h-4" />,
    info: "Elegant cocktail lounge in a restored mansion with a beautiful outdoor patio.",
    stats: { walk: "14 min", type: "Cocktails" },
    address: "408 E State St, Ithaca, NY 14850"
  },
  { 
    id: 7, 
    name: "Ithaca Bakery", 
    x: 35, y: 52, 
    category: "Dining", 
    icon: <Utensils className="w-4 h-4" />,
    info: "A local staple for fresh bagels, sandwiches, and artisanal coffee.",
    stats: { walk: "10 min", type: "Casual" },
    address: "400 N Meadow St, Ithaca, NY 14850"
  },
  { 
    id: 8, 
    name: "Moonies Bar", 
    x: 41, y: 65, 
    category: "Nightlife", 
    icon: <Martini className="w-4 h-4" />,
    info: "A classic Ithaca nightlife destination popular with the local student community.",
    stats: { walk: "16 min", type: "Pub" },
    address: "106 W State St, Ithaca, NY 14850"
  }
]

const InteractiveMap = () => {
  const [selected, setSelected] = useState(locations[0])

  // Generate Google Maps Embed URL based on selected location
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(selected.address + " " + selected.name)}&zoom=15&maptype=roadmap`;
  
  // Using a standard embed URL without API key for demo purposes (limited features but works)
  const fallbackMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(selected.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="map" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4 block"
          >
            Location Intelligence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-gray-900"
          >
            Ithaca's Most Connected Address
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
          <div className="lg:col-span-2 relative min-h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Actual Google Maps Embed */}
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={fallbackMapUrl}
              allowFullScreen
              loading="lazy"
              className="grayscale-[20%] contrast-[110%]"
            />
            
            {/* Map Legend Overlay */}
            <div className="absolute top-6 left-6 flex flex-col space-y-2">
              {locations.slice(0, 4).map((loc) => (
                <button
                  key={`map-overlay-${loc.id}`}
                  onClick={() => setSelected(loc)}
                  className={`flex items-center space-x-3 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg transition-all ${selected.id === loc.id ? 'bg-gray-900 text-white' : 'bg-white/90 text-gray-600 hover:bg-white'}`}
                >
                  {loc.icon}
                  <span>{loc.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-pinnacle-900 text-white p-10 rounded-3xl flex-grow shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  {selected.icon}
                </div>
                
                <div className="flex items-center space-x-2 text-pinnacle-400 mb-6">
                  <Navigation size={14} />
                  <span className="text-[10px] uppercase tracking-[0.3em]">{selected.category}</span>
                </div>
                
                <h3 className="text-3xl font-serif mb-6 leading-tight">{selected.name}</h3>
                
                <p className="text-pinnacle-300 mb-10 leading-relaxed text-sm">
                  {selected.info}
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Walk Time</span>
                    <span className="text-sm font-bold">{selected.stats.walk}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Experience</span>
                    <span className="text-sm font-bold">{selected.stats.type}</span>
                  </div>
                </div>

                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selected.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-white text-gray-900 text-center text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-100 transition-all"
                >
                  Get Directions
                </a>
              </motion.div>
            </AnimatePresence>
            
            <div className="mt-8 grid grid-cols-4 gap-2">
              {locations.map((loc) => (
                <button
                  key={`thumb-${loc.id}`}
                  onClick={() => setSelected(loc)}
                  className={cn(
                    "aspect-square rounded-lg border flex items-center justify-center transition-all",
                    selected.id === loc.id 
                      ? "bg-pinnacle-100 border-pinnacle-200 shadow-sm" 
                      : "bg-white border-gray-100 text-gray-400 hover:bg-gray-50"
                  )}
                >
                  <div className={selected.id === loc.id ? "text-gray-900" : "text-gray-400"}>
                    {loc.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}

export default InteractiveMap
