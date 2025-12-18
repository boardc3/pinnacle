import { motion } from 'framer-motion'
import { Dumbbell, BookOpen, Coffee, Waves, Sun } from 'lucide-react'

const amenities = [
  {
    title: "Fitness Center",
    description: "State-of-the-art equipment with panoramic views.",
    icon: <Dumbbell className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Study Lounge",
    description: "Quiet, sophisticated spaces for focus and collaboration.",
    icon: <BookOpen className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Resident Lounge",
    description: "The social heart of the community.",
    icon: <Coffee className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Waterfall Overlook",
    description: "Private views of the majestic Ithaca Falls.",
    icon: <Waves className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "Rooftop Terrace",
    description: "Elevated living with open-air relaxation.",
    icon: <Sun className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1974&auto=format&fit=crop"
  }
]

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4 block"
          >
            Curated Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-gray-900"
          >
            Aspirational Amenities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex items-center space-x-3 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                  <span className="text-[10px] uppercase tracking-[0.2em]">{item.title}</span>
                </div>
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-80 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities

