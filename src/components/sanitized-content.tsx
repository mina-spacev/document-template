'use client'

import { useEffect, useRef } from 'react'

import { copy } from '../lib/copy'

import { COPY_SUCCESS, COPY_URL } from '../lib/sanitize/option'

type Props = {
  className?: string
  html: string
}

export const SanitizedContent = ({ html, className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const copyURL = async ({
    url,
    successMessage,
  }: {
    url: string
    successMessage: string
  }) => {
    const { success } = await copy(url)

    if (success) {
      alert(successMessage)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleImageClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement

      const url = target.getAttribute(COPY_URL)

      if (url) {
        const successMessage =
          target.getAttribute(COPY_SUCCESS) || '주소가 복사되었습니다.'
        await copyURL({ url, successMessage })
      }
    }

    container.addEventListener('click', handleImageClick)

    return () => {
      container.removeEventListener('click', handleImageClick)
    }
  }, [])

  return <div ref={containerRef} className={className} dangerouslySetInnerHTML={{ __html: html }} />
}
