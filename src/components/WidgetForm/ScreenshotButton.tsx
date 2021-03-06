import React, { useState } from 'react'
import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { Loading } from '../Loading'

export interface ScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export const ScreenshotButton = ({
  onScreenshotTook,
  screenshot
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)

    const screenshot = canvas.toDataURL('image/png')

    setIsTakingScreenshot(false)
    onScreenshotTook(screenshot)
  }

  if (screenshot) {
    return (
      <button
        type='button'
        className='p-1 h-10 w-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: 180,
          backgroundPosition: 'right bottom'
        }}
        onClick={() => onScreenshotTook(null)}>
        <Trash weight='fill' />
      </button>
    )
  }

  return (
    <button
      type='button'
      onClick={handleTakeScreenshot}
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'>
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  )
}
