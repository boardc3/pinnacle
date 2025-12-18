import { motion } from 'framer-motion'

const demoVideos = [
  {
    id: 1,
    title: "Exterior Cinematics",
    src: "/videos/Make_this_entirely_202512171540_kxkd2.mp4",
    description: "Multi-seasonal transitions and dynamic lighting."
  },
  {
    id: 2,
    title: "Amenity Spaces",
    src: "/videos/Make_this_entirely_202512171551_awk2x.mp4",
    description: "Resident lounge and fitness center previews."
  },
  {
    id: 3,
    title: "Ithaca Falls Overlook",
    src: "/videos/Animate_the_waterfall_202512171536_1mtgm.mp4",
    description: "Private views of the majestic waterfall."
  },
  {
    id: 4,
    title: "Interior Walkthroughs",
    src: "/videos/Make_this_entirely_202512171556_2egmx.mp4",
    description: "Modern, high-end finishes in two representative units."
  }
]

const VideoShowcase = () => {
  return (
    <section id="demo-videos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4 block"
          >
            Proof of Concept
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-gray-900"
          >
            Demo Videos
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {demoVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group aspect-video bg-gray-100 overflow-hidden rounded-xl shadow-lg"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white text-xl font-serif mb-2">{video.title}</h3>
                <p className="text-white/70 text-sm">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-gray-900"
            >
              Interior Demo — rough
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full relative aspect-video bg-gray-100 overflow-hidden rounded-xl shadow-2xl"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
            >
              <source src="/GunInterior.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
