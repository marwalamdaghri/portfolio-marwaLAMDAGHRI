"use client"

import { useEffect, useRef } from "react"

type Particle = { x: number; y: number; vx: number; vy: number; r: number }

export function GeoCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let rafId = 0
    let dark = document.documentElement.classList.contains("dark")

    const colors = () =>
      dark
        ? { dot: "rgba(125, 190, 235, 0.55)", line: "rgba(110, 170, 215, 0.16)", grid: "rgba(120, 180, 225, 0.07)" }
        : { dot: "rgba(46, 119, 168, 0.5)", line: "rgba(46, 119, 168, 0.14)", grid: "rgba(46, 119, 168, 0.06)" }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(70, Math.max(30, Math.floor((width * height) / 22000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
      }))
    }

    const drawGraticule = (c: ReturnType<typeof colors>) => {
      const stepX = width / 10
      const stepY = height / 8
      ctx.strokeStyle = c.grid
      ctx.lineWidth = 1
      for (let x = stepX; x < width; x += stepX) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = stepY; y < height; y += stepY) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.arc(stepX * 2.4, height * 0.32, height * 0.22, 0, Math.PI * 2)
      ctx.arc(stepX * 7.6, height * 0.72, height * 0.3, 0, Math.PI * 2)
      ctx.stroke()
    }

    const drawFrame = () => {
      const c = colors()
      ctx.clearRect(0, 0, width, height)
      drawGraticule(c)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.strokeStyle = c.line
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = c.dot
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      dark = document.documentElement.classList.contains("dark")
      drawFrame()
      rafId = requestAnimationFrame(loop)
    }

    resize()

    if (reducedMotion) {
      drawFrame()
    } else {
      rafId = requestAnimationFrame(loop)
    }

    const onResize = () => {
      resize()
      if (reducedMotion) drawFrame()
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden />
}
