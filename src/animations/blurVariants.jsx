// Blurring keys
const blurKeys = [
  14, // very blurry
  8,
  5, 
  4,
  7, // drifts out
  4,
  2,
  0, // extremely sharp
]

const blurKeyFrames = []
const framesPerSegment = 10

for(let idx = 0; idx < blurKeys.length - 1; idx++){
  const start = blurKeys[idx]
  const end = blurKeys[idx + 1]
  const range = end - start
  const step = range/framesPerSegment

  for(let i = 0; i < framesPerSegment; i++){
    const val = start + step * i // interpolated blur value
    blurKeyFrames.push(`blur(${val}px)`)
  }
}

blurKeyFrames.push(`blur(${blurKeys[blurKeys.length - 1]}px)`)

export const blurVariants = {
  hidden: {
    filter: 'blur(14px)',
    opacity: 0,
    x: 0
  },
  visible: {
    filter: blurKeyFrames,
    opacity: [0, 0.2, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    transition: {
      filter: { delay: 0.6, duration: 2.5, ease: 'linear' },
      opacity: { delay: 0.2, duration: 1.5 }
    }
  },
}