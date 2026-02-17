"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function WhatsAppWidget() {
    const [isVisible, setIsVisible] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)

    // Only show after a short delay to be less intrusive initially
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 2000)

        // Show tooltip after another delay
        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true)
        }, 5000)

        // Hide tooltip after 5 seconds
        const hideTooltipTimer = setTimeout(() => {
            setShowTooltip(false)
        }, 10000)

        return () => {
            clearTimeout(timer)
            clearTimeout(tooltipTimer)
            clearTimeout(hideTooltipTimer)
        }
    }, [])

    const whatsappNumber = "27603005169"
    const whatsappUrl = `https://wa.me/${whatsappNumber}`

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="bg-white dark:bg-zinc-800 text-foreground px-4 py-2 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 pointer-events-auto relative mb-1"
                    >
                        <p className="text-sm font-medium whitespace-nowrap">Need help? Chat with us!</p>
                        <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white dark:bg-zinc-800 border-r border-b border-zinc-200 dark:border-zinc-700 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="pointer-events-auto"
                    >
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-shadow relative group overflow-hidden"
                            aria-label="Chat on WhatsApp"
                        >
                            {/* Subtle pulsing background effect */}
                            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />

                            <MessageCircle className="w-7 h-7 relative z-10 fill-current" />

                            {/* Notification dot */}
                            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-[#25D366] rounded-full" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
