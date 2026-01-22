'use client'

import { useEffect, useRef } from 'react'

import { copyURL, getSuccessMessage, getURL } from '@/lib/event/url-copy'
import { getPopupMessage, showPopup } from '@/lib/event/popup'

type Props = {
  className?: string
  html: string
}

export const SanitizedContent = ({ html, className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleImageClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement

      // URL 복사

      const url = getURL(target)

      if (url) {
        const successMessage = getSuccessMessage(target)
        await copyURL({ url, successMessage })
      }

      // Alert 표시

      const popupMessage = getPopupMessage(target)

      if (popupMessage) {
        showPopup(popupMessage)
      }
    }

    container.addEventListener('click', handleImageClick)

    return () => {
      container.removeEventListener('click', handleImageClick)
    }
  }, [])

  return <div ref={containerRef} className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
