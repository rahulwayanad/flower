import { useEffect, useRef, useState } from 'react'

const SVG_MARKUP = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50" style="overflow:visible;display:block">
  <ellipse cx="16" cy="29" rx="11" ry="2.2" fill="#0c4520" transform="rotate(28 16 29)"/>
  <ellipse cx="14" cy="26" rx="12" ry="2"   fill="#195a2e" transform="rotate(15 14 26)"/>
  <ellipse cx="16" cy="32" rx="10" ry="2"   fill="#093518" transform="rotate(40 16 32)"/>
  <g id="hb-bwing"><ellipse cx="29" cy="35" rx="16" ry="5.5" fill="#c07830" opacity=".70"/></g>
  <g id="hb-twing"><ellipse cx="29" cy="10" rx="18" ry="5.5" fill="#4e9fd4" opacity=".82"/></g>
  <ellipse cx="33" cy="22" rx="14" ry="7" fill="#20882a" transform="rotate(-7 33 22)"/>
  <ellipse cx="44" cy="22" rx="6" ry="3.5" fill="#cc2e10" transform="rotate(-7 44 22)" opacity=".88"/>
  <circle cx="48" cy="18" r="7.5" fill="#28a032"/>
  <path d="M54 17.5 L80 11" stroke="#a09070" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  <circle cx="51" cy="16" r="2.4" fill="#111"/>
  <circle cx="52" cy="15" r=".9"  fill="#fff" opacity=".8"/>
</svg>`

export function useHummingbirdCursor() {
  const [isEnabled, setIsEnabled] = useState(() => {
    return localStorage.getItem('hbCursor') !== 'off'
  })

  const stateRef = useRef({
    tx: -300, ty: -300,
    cx: -300, cy: -300,
    prevCX: -300,
    moving: false,
    moveTimer: null,
    clickActive: false,
    clickUntil: 0,
    facingRight: true,
    running: false,
    rafId: null,
  })

  const elRef = useRef(null)
  const styleTagRef = useRef(null)
  const twingRef = useRef(null)
  const bwingRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const el = document.createElement('div')
    el.innerHTML = SVG_MARKUP
    el.style.cssText = [
      'position:fixed',
      'pointer-events:none',
      'z-index:2147483647',
      'width:72px',
      'height:45px',
      'left:0',
      'top:0',
      'transform:translate(-50%,-50%)',
      'will-change:left,top,transform',
    ].join(';')

    const styleTag = document.createElement('style')
    styleTag.textContent = '*,*::before,*::after{cursor:none!important}'

    elRef.current = el
    styleTagRef.current = styleTag

    document.body.appendChild(el)
    twingRef.current = el.querySelector('#hb-twing')
    bwingRef.current = el.querySelector('#hb-bwing')

    const s = stateRef.current

    function onMouseMove(e) {
      s.tx = e.clientX; s.ty = e.clientY
      s.moving = true
      clearTimeout(s.moveTimer)
      s.moveTimer = setTimeout(() => { s.moving = false }, 130)
    }

    function onMouseDown() {
      s.clickActive = true
      s.clickUntil = Date.now() + 400
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mousedown', onMouseDown)

    function tick() {
      if (!s.running) return
      const now = Date.now()
      const ease = s.moving ? 0.20 : 0.12
      s.cx += (s.tx - s.cx) * ease
      s.cy += (s.ty - s.cy) * ease
      el.style.left = s.cx + 'px'
      el.style.top = s.cy + 'px'

      const dx = s.cx - s.prevCX
      if (Math.abs(dx) > 0.15) s.facingRight = dx > 0
      s.prevCX = s.cx

      let a
      if (s.clickActive) {
        if (now > s.clickUntil) s.clickActive = false
        a = Math.sin(now / 20) * 65
      } else if (s.moving) {
        a = Math.sin(now / 48) * 44
      } else {
        a = Math.sin(now / 800) * 6
      }

      twingRef.current.setAttribute('transform', `rotate(${a} 33 22)`)
      bwingRef.current.setAttribute('transform', `rotate(${-a} 33 22)`)

      const blur = (s.moving || s.clickActive) ? 'blur(1.2px)' : 'blur(0)'
      twingRef.current.style.filter = blur
      bwingRef.current.style.filter = blur

      const flip = s.facingRight ? 1 : -1
      el.style.transform = `translate(-50%,-50%) scaleX(${flip})`

      s.rafId = requestAnimationFrame(tick)
    }

    function enable() {
      if (s.running) return
      s.running = true
      el.style.display = ''
      ;(document.head || document.documentElement).appendChild(styleTag)
      tick()
    }

    function disable() {
      s.running = false
      if (s.rafId) cancelAnimationFrame(s.rafId)
      el.style.display = 'none'
      if (styleTag.parentNode) styleTag.parentNode.removeChild(styleTag)
    }

    // store enable/disable so toggle can call them
    elRef._enable = enable
    elRef._disable = disable

    if (localStorage.getItem('hbCursor') !== 'off') {
      enable()
    }

    return () => {
      s.running = false
      if (s.rafId) cancelAnimationFrame(s.rafId)
      clearTimeout(s.moveTimer)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      if (el.parentNode) el.parentNode.removeChild(el)
      if (styleTag.parentNode) styleTag.parentNode.removeChild(styleTag)
    }
  }, [])

  function toggle(on) {
    localStorage.setItem('hbCursor', on ? 'on' : 'off')
    setIsEnabled(on)
    if (on) {
      elRef._enable && elRef._enable()
    } else {
      elRef._disable && elRef._disable()
    }
  }

  return { isEnabled, toggle }
}
