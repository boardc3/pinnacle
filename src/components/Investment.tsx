import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

const Investment = () => {
  return (
    <section id="investment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-pinnacle-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 block">Project Value</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Investment & Engagement
              </h2>
              <p className="text-white/60 mb-12 text-lg leading-relaxed">
                This project represents a premium visual storytelling package designed to accelerate 
                leasing confidence and emotional buy-in from stakeholders.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg"><Zap size={20} className="text-white" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Total Project Fee</h4>
                    <span className="text-3xl font-serif">$10,395 USD</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg"><CheckCircle2 size={20} className="text-white" /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Payment Structure</h4>
                    <p className="text-white/60 text-sm">50% due upon kickoff, 50% upon final delivery.</p>
                  </div>
                </div>
              </div>

              <a 
                href="mailto:Chris@sceneset.ai?subject=Send me the invoice&body=Send it to -- (add your email here)"
                className="mt-16 w-full py-5 bg-white text-gray-900 text-xs uppercase tracking-[0.3em] hover:bg-gray-100 transition-all font-bold block text-center"
              >
                Approve Proposal
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 bg-pinnacle-800 p-12 lg:p-20 flex flex-col justify-center border-l border-white/5">
            <h3 className="text-2xl font-serif text-white mb-8">Included in Engagement</h3>
            <ul className="space-y-6">
              {[
                "Full usage rights for marketing and leasing",
                "Bi-weekly collaborative review sessions",
                "High-resolution interior and exterior visuals",
                "AI-generated cinematic video sequences",
                "Atmospheric lighting and seasonal transitions"
              ].map((item) => (
                <li key={item} className="flex items-center space-x-4 group">
                  <div className="p-1 rounded-full border border-white/20 group-hover:border-white/40 transition-colors">
                    <ShieldCheck size={16} className="text-white/60" />
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Investment

