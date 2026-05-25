import type { ReactNode } from "react"

export default function WorkPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf9f5] text-[#0f2847]">
      <div
        className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-[#0a9cab]/10 to-[#c96442]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-gradient-to-r from-[#c96442]/10 to-[#0a9cab]/10 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
