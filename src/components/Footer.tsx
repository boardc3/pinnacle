import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-serif font-bold tracking-tighter">THE PINNACLE</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">By MyNestLife</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              A transformative redevelopment of the former Gun Hill Apartments in Ithaca, NY. 
              Positioning The Pinnacle as a destination residential property through cinematic storytelling.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#overview" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Overview</a></li>
              <li><a href="#amenities" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Amenities</a></li>
              <li><a href="#interiors" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Interiors</a></li>
              <li><a href="#map" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Connect</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest text-gray-400">
            © 2025 The Pinnacle by MyNestLife. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">Visualization by</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-900 font-bold">Sceneset.AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

