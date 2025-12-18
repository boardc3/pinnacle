import { motion } from 'framer-motion'

const phases = [
  {
    week: "Week 1",
    title: "Conceptual Foundations",
    tasks: ["Project kickoff", "Review of architectural renderings", "Initial creative development", "Exterior and amenity concepts"]
  },
  {
    week: "Week 2",
    title: "World Building",
    tasks: ["Exterior and amenity video production", "Apartment interior visuals", "Bi-weekly review meeting #1"]
  },
  {
    week: "Week 3",
    title: "Refinement & Delivery",
    tasks: ["Refinement and final polish", "Color and motion adjustments", "Final delivery of cinematic assets"]
  }
]

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-pinnacle-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Project Timeline</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-gray-900 border-4 border-white rounded-full -translate-x-1/2 z-10 hidden md:block" />

                <div className="md:w-1/2 w-full md:px-12">
                  <div className={`text-left ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-3xl font-serif italic text-gray-300 block mb-2">{phase.week}</span>
                    <h3 className="text-2xl font-serif text-gray-900 mb-4">{phase.title}</h3>
                    <ul className={`space-y-3 ${index % 2 === 1 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      {phase.tasks.map((task) => (
                        <li key={task} className="flex items-center space-x-3 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2 w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

