import { motion } from 'framer-motion'
import { Target, Sparkles, MapPin, Layers } from 'lucide-react'

const Overview = () => {
  const objectives = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Elevated Visuals",
      description: "Transforming architectural renderings into high-impact cinematic experiences."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Sense of Place",
      description: "Capturing the unique lifestyle and seasonality of Ithaca, New York."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Impact",
      description: "Establishing a design-forward identity for premium residential offering."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Versatile Assets",
      description: "Cornerstone materials for web, social, and investor presentations."
    }
  ]

  return (
    <section id="overview" className="py-24 px-6 bg-pinnacle-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">Executive Summary</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-900 leading-tight">
              A transformative redevelopment of the former Gun Hill Apartments.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                The Pinnacle by MyNestLife is more than a residential project—it is a destination. 
                Using visual storytelling, we convey the atmosphere and long-term value well ahead 
                of physical completion.
              </p>
              <p>
                Leveraging architectural renderings as a foundation, we upscale and creatively 
                extend these assets into emotionally compelling narratives. Through seasonal 
                transitions and dynamic lighting, we invite you to experience the life that 
                awaits at The Pinnacle.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-900 mb-4">{obj.icon}</div>
                <h3 className="text-xl font-serif mb-3 text-gray-900">{obj.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {obj.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview

