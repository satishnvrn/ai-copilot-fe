import React, { useState, useEffect } from 'react'
import { Progress } from 'flowbite-react'

const AnimatingProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0
        }
        return prevProgress + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <Progress
      progress={progress}
      color="blue"
    />
  )
}

export default AnimatingProgressBar
