"use client"

import { useEffect, useState } from "react"
import { ProMoadal } from "./pro-modal"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <ProMoadal />
    </>
  )
}
