"use client"

import { Crisp } from "crisp-sdk-web"
import { useEffect } from "react"

export const ChrispChat = () => {
  useEffect(() => {
    Crisp.configure("da553c6a-39cc-46de-875a-618fa289d4a8")
  }, [])

  return null
}
