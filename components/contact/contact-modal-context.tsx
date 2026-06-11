"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import ContactModal from "@/components/contact/ContactModal"

type ContactModalContextValue = {
  openContactModal: () => void
  closeContactModal: () => void
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null)

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  const openContactModal = useCallback(() => setOpen(true), [])
  const closeContactModal = useCallback(() => setOpen(false), [])

  return (
    <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}
      <ContactModal variant="overlay" open={open} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const context = useContext(ContactModalContext)
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider")
  }
  return context
}
