"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openProfessional, setOpenProfessional] = useState<number | null>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Header Scroll Logic: Vanishes when scrolling up near the top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const specialties = [
    {
      title: "Anxiety & Panic",
      desc: "Helping high-achieving individuals navigate constant worry, overthinking, and physiological tension.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000"
    },
    {
      title: "Trauma & EMDR",
      desc: "Specialized support for single-incident trauma and complex patterns through evidence-based EMDR.",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000"
    },
    {
      title: "Burnout & Pressure",
      desc: "Guided therapy for entrepreneurs and creatives struggling with perfectionism and high internal pressure.",
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000"
    }
  ];

  const faqs = [
    { q: "What is your approach to therapy?", a: "I take a warm, collaborative, and grounded approach, integrating CBT, EMDR, and mindfulness-based practices." },
    { q: "Do you offer remote sessions?", a: "Yes, I offer secure telehealth sessions for clients located throughout California." },
    { q: "What can I expect in our first session?", a: "We focus on safety and stabilization, ensuring you feel regulated while we explore your goals." }
  ];

  const professionalInfo = [
    { title: 'Education', content: 'Doctor of Psychology (PsyD) in Clinical Psychology.' },
    { title: 'Licensure', content: 'Licensed Clinical Psychologist based in Santa Monica, California.' },
    { title: 'Modalities', content: 'CBT, EMDR, mindfulness-based practices, and body-oriented techniques.' }
  ];

  return (
    <main className="min-h-screen bg-[#F9F7F2] text-[#1F2937] font-sans">
      
      {/* NAVIGATION - Transitions on scroll */}
      <nav className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 md:px-16 transition-all duration-500 ${showHeader ? 'translate-y-0 bg-[#F9F7F2]' : '-translate-y-full'}`}>
        <div className="text-2xl font-serif tracking-tight font-bold text-[#2D391E]">
          Dr. Maya Reynolds, PsyD
        </div>
        <div className="flex gap-8 font-medium">
          <a href="#" className="hover:text-[#7C8E7B] transition-colors">About</a>
          <a href="#" className="hover:text-[#7C8E7B] transition-colors">Contact</a>
        </div>
      </nav>

      <div className="pt-24">
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-16 md:py-24 gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[600px] overflow-hidden rounded-t-full">
              <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073" alt="Santa Monica" fill priority className="object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">
              Resilience & depth for <br /> 
              <span className="italic text-[#7C8E7B]">the modern professional.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Licensed Clinical Psychologist providing trauma-informed therapy in Santa Monica, California.
            </p>
            <button className="px-10 py-4 bg-[#7C8E7B] text-white hover:bg-[#6b7c6a] transition-all uppercase tracking-widest text-sm">
              Book a Consultation →
            </button>
          </div>
        </section>

        {/* 1. GROUNDED LIFE SECTION */}
        <section className="flex flex-col md:flex-row items-center bg-[#F9F7F2] overflow-hidden border-y border-[#1F2937]/10">
          <div className="w-full md:w-1/2 px-8 py-16 md:px-24 md:py-32 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight text-[#2D391E]">Live a grounded life.</h2>
            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              <p>Life can be challenging—especially when you&apos;re balancing high-pressure professional goals with your personal well-being.</p>
              <p>It&apos;s easy to feel alone in these challenges, but therapy provides a grounded space to slow down and reconnect.</p>
            </div>
            <div className="pt-4"><a href="#" className="uppercase tracking-widest text-sm font-bold border-b-2 border-[#7C8E7B] pb-1">Get in touch →</a></div>
          </div>
          <div className="w-full md:w-1/2 h-[500px] md:h-[700px] relative">
            <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000" alt="Grounding" fill className="object-cover" />
          </div>
        </section>

        {/* AREAS OF FOCUS */}
        <section className="px-8 py-20 md:px-16 md:py-32 bg-white">
          <h2 className="text-4xl md:text-6xl font-serif text-center mb-20 text-[#2D391E]">Areas of Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {specialties.map((s, i) => (
              <div key={i} className="flex flex-col space-y-8">
                <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-[#7C8E7B]/20">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-serif text-[#2D391E]">{s.title}</h3>
                  <p className="font-light text-[#1F2937]/80">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* YOU DON'T HAVE TO DO THIS ALL ALONE */}
        <section className="flex flex-col md:flex-row bg-[#D6D2E0] overflow-hidden">
  
          {/* Left Side: Large Portrait Image (Peaceful/Mindful Vibe) */}
          <div className="w-full md:w-1/2 h-[600px] md:h-[900px] relative">
            <Image 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
              alt="Dr. Maya Reynolds - Grounded Therapy"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side: Content tailored to Dr. Maya's Profile */}
          <div className="w-full md:w-1/2 px-8 py-16 md:px-24 md:py-32 flex flex-col justify-center space-y-8 text-[#1F2937]">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              You don&apos;t have to do this <br /> 
              <span className="italic">all alone.</span>
            </h2>
    
            <p className="text-xl font-light leading-relaxed">
              If you are a high-achieving individual struggling with any of these, there is hope:
            </p>
    
            <ul className="space-y-4 text-lg md:text-xl font-light list-disc pl-5">
              <li>Constant worry or feeling emotionally on edge</li>
              <li>Stuck in overthinking or professional burnout</li>
              <li>Lingering effects of past traumatic experiences</li>
              <li>Struggling to feel regulated in your daily life</li>
              <li>Bracing for something to go wrong despite being &quot;functional&quot;</li>
            </ul>

            <p className="pt-6 text-lg md:text-xl font-light leading-relaxed italic border-t border-[#1F2937]/10">
              With a warm and grounded approach, we&apos;ll work together to help you 
              develop resilience and a stronger relationship with yourself.
            </p>
    
            {/* CTA to match the bottom of the section in the screenshot */}
            <div className="pt-8">
              <a href="#" className="uppercase tracking-[0.2em] text-xs font-bold border-b border-[#1F2937] pb-1 hover:opacity-60 transition-opacity">
                Work with me →
              </a>
            </div>
          </div>
        </section>
        
        {/* BIO SECTION */}
        <section className="flex flex-col md:flex-row items-center px-8 py-20 md:px-16 md:py-32 bg-[#E9E4D9]">
          <div className="w-full md:w-1/2 space-y-10 order-2 md:order-1 mt-12 md:mt-0 text-[#2D391E]">
            <h2 className="text-5xl md:text-7xl font-serif">Hi, I&apos;m Dr. Maya.</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl">
              I support high-achieving professionals in Santa Monica who feel functional on the outside but struggle with constant worry internally. I integrate CBT, EMDR, and body-oriented techniques to help you feel more regulated.
            </p>
            <button className="px-10 py-4 border border-[#1F2937] hover:bg-[#1F2937] hover:text-white transition-all uppercase tracking-widest text-sm">Read Full Story</button>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center items-center order-1 md:order-2">
            <div className="relative w-[300px] h-[400px] md:w-[420px] md:h-[550px] overflow-hidden rounded-t-full z-10 shadow-2xl">
              <Image src="/profile-pic.png" alt="Dr. Maya Reynolds" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* FAQ SECTION  */}
        <section className="flex flex-col md:flex-row items-start px-8 py-20 md:px-16 md:py-32 bg-white gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[650px] overflow-hidden rounded-t-full">
              <Image src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000" alt="Healing" fill className="object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-12">
            <h2 className="text-4xl md:text-7xl font-serif text-[#2D391E]">FAQs</h2>
            <div className="border-t border-[#1F2937]/10">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#1F2937]/10 py-8 cursor-pointer group" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <div className="flex justify-between items-center text-[#2D391E]">
                    <h3 className="text-xl md:text-2xl font-serif">{faq.q}</h3>
                    <span className={`text-3xl transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>{openFaq === index ? '—' : '+'}</span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}><p className="font-light">{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROFESSIONAL BACKGROUND */}
        <section className="px-8 py-20 md:px-16 md:py-32 bg-[#2D391E] text-[#F9F7F2]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif mb-12 text-center">Professional Background</h2>
            <div className="border-t border-[#F9F7F2]/20">
              {professionalInfo.map((item, index) => (
                <div key={index} className="border-b border-[#F9F7F2]/20 py-8 cursor-pointer" onClick={() => setOpenProfessional(openProfessional === index ? null : index)}>
                  <div className="flex justify-between items-center"><span className="text-xl font-serif">{item.title}</span><span>{openProfessional === index ? '—' : '+'}</span></div>
                  <div className={`overflow-hidden transition-all duration-300 ${openProfessional === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}><p className="font-light opacity-80">{item.content}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. BEGIN JOURNEY SECTION */}
        <section className="bg-[#84814E] text-[#F9F7F2] py-24 md:py-32 px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">Begin your journey.</h2>
            <p className="text-lg md:text-xl font-light">Ready to prioritize your mental health? Reach out to schedule your first session in our Santa Monica office.</p>
            <button className="px-10 py-4 border border-[#F9F7F2] text-[#F9F7F2] hover:bg-[#F9F7F2] hover:text-[#84814E] transition-all uppercase tracking-widest text-sm">Book Today →</button>
          </div>
        </section>

        {/* OUR OFFICE */}
        <section className="px-8 py-20 md:px-16 md:py-32 bg-[#F9F7F2]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-8 text-[#2D391E]">
              <h2 className="text-4xl md:text-6xl font-serif">A Calm Space for Healing</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed">My Santa Monica office is a private space designed to feel calm and grounding, featuring natural light and comfortable seating. Clients often find the space helps them feel at ease when they arrive.</p>
              <p className="font-bold tracking-widest uppercase text-sm">• 123th Street 45 W, Santa Monica</p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg"><Image src="/office1.jpeg" alt="Office 1" fill className="object-cover" /></div>
              <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl mt-8 shadow-lg"><Image src="/office2.jpeg" alt="Office 2" fill className="object-cover" /></div>
            </div>
          </div>
        </section>

        {/* 3. FINAL CTA SECTION */}
        <section className="bg-[#E9E4D9] py-20 text-center border-t border-[#1F2937]/5">
           <h3 className="text-3xl md:text-5xl font-serif text-[#2D391E] mb-8">Take the first step toward resilience.</h3>
           <button className="px-10 py-4 bg-[#2D391E] text-white hover:bg-[#7C8E7B] transition-all uppercase tracking-widest text-sm">Connect With Me</button>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#1F2937] text-[#F9F7F2] pt-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-16 pb-20">
            <div className="space-y-6">
              <h3 className="text-4xl font-serif">Dr. Maya Reynolds</h3>
              <p className="font-light opacity-80 leading-relaxed">123th Street 45 W,<br />Santa Monica, CA 90401.</p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif">Services</h3>
              <div className="flex flex-col space-y-2 font-light opacity-80 underline underline-offset-4">
                <span>In-Person Therapy</span>
                <span>Secure Telehealth</span>
                <span>EMDR Trauma Work</span>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif">Contact</h3>
              <p className="font-light opacity-80 underline underline-offset-4 cursor-pointer hover:text-[#7C8E7B]">hello@drmayareynolds.com</p>
            </div>
          </div>

          <div className="bg-[#161d27] py-16 px-8 text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs tracking-widest uppercase opacity-70 underline underline-offset-4">
              <a href="#">Privacy & Cookies Policy</a>
              <a href="#">Good Faith Estimate</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Disclaimer</a>
            </div>
            <p className="text-[10px] tracking-widest uppercase opacity-40">All Rights Reserved © 2026 Dr. Maya Reynolds, LLC.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}