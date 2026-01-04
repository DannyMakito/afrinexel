"use client"
import { useEffect, useState } from "react"
import ContactSection from "./contact-section"

const steps = [
  {
    id: 1,
    title: "Requirements Gathering",
    desc: "We collaborate with you to gather and understand your business needs and objectives.",
  },
  {
    id: 2,
    title: "Iterative Planning",
    desc: "We conduct iterative planning sessions to adapt to emerging requirements and feedback.",
  },
  {
    id: 3,
    title: "Design & Prototyping",
    desc: "We design interactive mockups and prototypes to validate functionality.",
  },
  {
    id: 4,
    title: "Incremental Development",
    desc: "Our team builds in short cycles using the latest technologies, adjusting to feedback.",
  },
  {
    id: 5,
    title: "Continuous Testing",
    desc: "Testing is an integral part of every sprint ensuring quality.",
  },
  {
    id: 6,
    title: "Regular Releases",
    desc: "We frequently release updates delivering new features regularly.",
  },
]

export default function ProcessCycle() {
  return (
    <section className="w-full flex justify-center py-10 px-2 md:py-16">
      <div className="w-full max-w-6xl flex justify-center items-center">
        {/* Responsive and large process cycle image */}
        <img
          src="/images/pc1.png"
          alt="Process Cycle Diagram"
          className="w-full h-auto max-w-6xl rounded-lg shadow-lg object-contain"
          style={{ minHeight: '300px' }}
        />
      </div>

   
    </section>
    
  );
}


const radial = [
  "left-[-220px] bottom-[20px]",
  "right-[-220px] top-1/2 -translate-y-1/2",
  "right-[-220px] top-[-10px]",
  "left-[-220px] top-[-10px]",
  "left-[-220px] top-1/2 -translate-y-1/2",
  "right-[-220px] bottom-[20px]",
]
