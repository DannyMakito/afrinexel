"use client";
import Image from "next/image";
import ProcessCycle from "@/components/ProcessCycle";
import ContactSection from "@/components/contact-section";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero/Top Section */}
      <section className="w-full pt-32 pb-20 px-4 max-w-6xl mx-auto relative text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
          Elite Product Design & Development. No Fluff. Just Results.
        </h1>
        <p className="text-lg mb-3 max-w-3xl mx-auto">
          At Afrinexel, we don’t just write code – we’re a team obsessed with helping clients build solutions that get to market faster and sustain long-term success.
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
          We believe in craftsmanship, not cookie-cutter solutions. That’s why every project we take on is built to scale, rigorously tested, and backed by our warranty—because software should work right the first time.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-10">
          <div className="flex-1 flex flex-col items-center">
            <span className="mb-2">
              {/* Icon: Lightning/Speed */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className=""><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </span>
            <h3 className="text-lg font-semibold mb-1">Fast, But Never Rushed</h3>
            <p className="text-sm text-muted-foreground">Production-ready code in Week 1</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="mb-2">
              {/* Icon: Shield */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 4v5c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V7l9-4z"></path></svg>
            </span>
            <h3 className="text-lg font-semibold mb-1">Reliable, Secure, and Scalable</h3>
            <p className="text-sm text-muted-foreground">Designed for long-term success</p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="mb-2">
              {/* Icon: U.S. badge/star */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"></rect><path d="m16 8-4 8-4-8z"></path></svg>
            </span>
            <h3 className="text-lg font-semibold mb-1">100% Senior Engineers</h3>
            <p className="text-sm text-muted-foreground">No B-teams. No handoffs. Just expertise.</p>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="w-full px-4 pb-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full overflow-hidden rounded-2xl shadow-xl mb-6 md:mb-0 h-[300px] md:h-[400px] relative">
          <Image src="/images/afrinexelbg.svg1.png" alt="Afrinexel Team" fill className="object-contain" sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 45vw" priority />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold font-poppins mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed mb-2">
            Afrinexel journey began in 2025 in a small office in Sandton, where our founders, Makito Daniel and Gift Ndlala, had a bold vision: to help businesses harness the power of technology to thrive in a digital world. With dedication and a drive to innovate to better serve a growing community of clients and partners eager to make an impact.
          </p>
          <p className="mb-2">
            Today, Afrinexel has become a global force in software development, partnering with forward-thinking organizations across industries to bring their boldest ideas to life. Whether we’re crafting powerful web applications, designing dynamic mobile experiences, or pushing the limits of AI and cloud technology, our mission is clear – to build custom, scalable, and transformative solutions that create real results.
          </p>
          <p className="mb-2">
            What truly defines Afrinexel is our approach. We are more than just developers; we are your partners in possibility. Each project is a shared journey where collaboration, creativity, and a commitment to solving challenges guide us. We’re passionate about crafting technology that doesn’t just work – it empowers, inspires, and drives lasting impact.
          </p>
          <p>
            Looking forward, we remain as committed as ever to breaking new ground and evolving alongside our clients. With each step, we’re here to help unlock potential, fuel growth, and shape the future of business in an ever-changing digital landscape. Here’s to the path ahead – and to building a brighter, more connected world, together.
          </p>
        </div>
      </section>
      {/* Our Development Process Section */}
      <section className="w-full px-4 pb-24 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-poppins mb-8 text-center">Our Development Process</h2>
        <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto text-base sm:text-lg">This involves various stages, from minor alterations to complete modifications.</p>
       <ProcessCycle />
   
      </section>
      <ContactSection />
    </div>
  );
}

