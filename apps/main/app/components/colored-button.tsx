'use client'

import { useState, useEffect } from 'react'
import { matchingTextColor, randomColor } from '@acme/utils'

export function ColoredButton() {
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState('')
  const changeColor = () => {
    const bg = randomColor()
    setBgColor(bg)
    setTextColor(matchingTextColor(bg))
  }

  useEffect(changeColor, [])

  return (
    <>
      {bgColor && textColor && (
        <>
          <button
            className="mb-4"
            style={{
              backgroundColor: bgColor,
              color: textColor,
              borderColor: textColor,
            }}
            onClick={changeColor}
          >
            Change Color
          </button>
        </>
      )}
    </>
  )
}
