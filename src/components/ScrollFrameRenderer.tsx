'use client'

import { useEffect, useRef, useCallback, memo, useState } from 'react'

interface ScrollFrameRendererProps {
  totalFrames: number
  framePrefix?: string
  frameExtension?: string
  framePath?: string
}

const PRIORITY_FRAMES = 20
const BATCH_SIZE = 10

const ScrollFrameRenderer = memo(function ScrollFrameRenderer({
  totalFrames = 180,
  framePrefix = 'ezgif-frame-',
  frameExtension = '.png',
  framePath = '/3d-frames',
}: ScrollFrameRendererProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const currentFrameRef = useRef(0)
  const rafRef = useRef<number>(0)
  const isLoadedRef = useRef(false)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const padFrame = useCallback((num: number) => String(num).padStart(3, '0'), [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let loaded = 0
    const imgs: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null)
    let destroyed = false
    let cw = 0, ch = 0

    const isMobile = () => window.innerWidth < 768
    const getScale = () => isMobile() ? 1 : Math.min(window.devicePixelRatio || 1, 1.5)

    const updateCanvasSize = () => {
      if (!canvas || destroyed) return
      cw = window.innerWidth
      ch = window.innerHeight
      const s = getScale()
      canvas.width = cw * s
      canvas.height = ch * s
      canvas.style.width = `${cw}px`
      canvas.style.height = `${ch}px`
      ctx.setTransform(s, 0, 0, s, 0, 0)
    }

    const drawFrame = (index: number) => {
      const img = imgs[index]
      if (!img || !canvas || destroyed) return
      currentFrameRef.current = index
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, 0, 0, cw, ch)
    }

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (!isLoadedRef.current || destroyed) return
        const scrollHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        const p = Math.min(Math.max(window.scrollY / scrollHeight, 0), 1)
        const frameIndex = Math.floor(p * (totalFrames - 1))
        const targetFrame = Math.min(frameIndex, totalFrames - 1)
        if (targetFrame !== currentFrameRef.current && imgs[targetFrame]) {
          drawFrame(targetFrame)
        }
      })
    }

    const onLoad = (i: number) => {
      if (destroyed) return
      loaded++
      const pct = Math.round((loaded / totalFrames) * 100)
      setProgress(pct)
      if (loaded >= totalFrames) {
        isLoadedRef.current = true
        setLoading(false)
        updateCanvasSize()
        if (imgs[0]) drawFrame(0)
      }
      if (loaded === PRIORITY_FRAMES) {
        updateCanvasSize()
        if (imgs[0]) drawFrame(0)
        handleScroll()
      }
    }

    const loadBatch = (start: number, end: number) => {
      for (let i = start; i <= end; i++) {
        if (imgs[i]) continue
        const img = new Image()
        img.crossOrigin = 'anonymous'
        const idx = i
        img.onload = () => onLoad(idx)
        img.onerror = () => onLoad(idx)
        img.src = `${framePath}/${framePrefix}${padFrame(idx + 1)}${frameExtension}`
        imgs[idx] = img
      }
    }

    loadBatch(0, Math.min(PRIORITY_FRAMES - 1, totalFrames - 1))

    const loadRemaining = () => {
      let start = PRIORITY_FRAMES
      const interval = setInterval(() => {
        if (destroyed) { clearInterval(interval); return }
        const end = Math.min(start + BATCH_SIZE - 1, totalFrames - 1)
        loadBatch(start, end)
        start = end + 1
        if (start >= totalFrames) clearInterval(interval)
      }, 300)
    }

    const priorityTimeout = setTimeout(loadRemaining, 800)

    imagesRef.current = imgs
    updateCanvasSize()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateCanvasSize, { passive: true })
    handleScroll()

    return () => {
      destroyed = true
      clearTimeout(priorityTimeout)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateCanvasSize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      imagesRef.current = []
      isLoadedRef.current = false
      imgs.forEach((img) => {
        if (img) { img.onload = null; img.onerror = null }
      })
    }
  }, [totalFrames, framePrefix, frameExtension, framePath, padFrame])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        aria-hidden="true"
      />
      {loading && (
        <div className="fixed inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05),transparent_60%)]" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-zinc-500 text-xs tracking-widest uppercase">
              Loading {progress}%
            </span>
          </div>
        </div>
      )}
    </>
  )
})

export default ScrollFrameRenderer
