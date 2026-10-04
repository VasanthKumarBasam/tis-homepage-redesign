import { motion } from 'motion/react'
import { heroPhotos } from '@/data/content'
import { easeOutExpo } from '@/lib/motion'

/** Resting layout of the three hero photos (position + tilt). */
const layout = [
  { className: 'left-0 top-10 w-[60%] z-10', rotate: -7 },
  { className: 'right-0 top-0 w-[56%] z-20', rotate: 6 },
  { className: 'left-[20%] bottom-0 w-[60%] z-30', rotate: -2 },
] as const

export function HeroPhotoStack() {
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-md lg:max-w-none">
      {heroPhotos.map((photo, i) => (
        <motion.figure
          key={photo.src}
          className={`absolute ${layout[i].className}`}
          initial={{ opacity: 0, y: 60, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: layout[i].rotate }}
          transition={{ duration: 0.8, delay: 0.35 + i * 0.12, ease: easeOutExpo }}
        >
          <motion.img
            src={photo.src}
            alt={photo.alt}
            width={480}
            height={600}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            data-cursor="hover"
            whileHover={{ scale: 1.05, rotate: -layout[i].rotate / 2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="aspect-[4/5] w-full bg-line rounded-[1.75rem] border-[6px] border-surface object-cover shadow-[0_24px_48px_-20px_rgba(13,26,54,0.45)]"
          />
        </motion.figure>
      ))}
    </div>
  )
}
