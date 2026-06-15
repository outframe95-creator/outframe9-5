'use client'

import { useEffect, useRef, useCallback, memo, useState } from 'react'

interface ScrollFrameRendererProps {
  totalFrames: number
  framePrefix?: string
  frameExtension?: string
  framePath?: string
}

const ScrollFrameRenderer = memo(function ScrollFrameRenderer({
  totalFrames = 180,
  framePrefix = 'ezgif-frame-',
  frameExtension = '.png',
  framePath = '/3d-frames',
}: ScrollFrameRendererProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number>(0)
  const isLoadedRef = useRef(false)
  const [loading, setLoading] = useState(true)

  const padFrame = useCallback((num: number) => String(num).padStart(3, '0'), [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let loaded = 0
    const imgs: HTMLImageElement[] = []

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (!isLoadedRef.current) return
        const scrollHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        const progress = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1)
        const frameIndex = Math.floor(progress * (totalFrames - 1))
        const targetFrame = Math.min(frameIndex, totalFrames - 1)
        if (targetFrame !== currentFrameRef.current && imgs[targetFrame]) {
          currentFrameRef.current = targetFrame
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(imgs[targetFrame], 0, 0, canvas.width, canvas.height)
        }
      })
    }

    const resize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (imgs[currentFrameRef.current]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(imgs[currentFrameRef.current], 0, 0, canvas.width, canvas.height)
      }
    }

    const onLoad = () => {
      loaded++
      if (loaded >= totalFrames) {
        isLoadedRef.current = true
        setLoading(false)
        resize()
      }
    }

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = `${framePath}/${framePrefix}${padFrame(i)}${frameExtension}`
      img.onload = onLoad
      img.onerror = onLoad
      imgs.push(img)
    }
    imagesRef.current = imgs

    resize()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', resize, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      imagesRef.current = []
      isLoadedRef.current = false
    }
  }, [totalFrames, framePrefix, frameExtension, framePath, padFrame])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ objectFit: 'cover' }}
        aria-hidden="true"
      />
      {loading && (
        <div className="fixed inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05),transparent_60%)]" />
        </div>
      )}
    </>
  )
})

export default ScrollFrameRenderer
