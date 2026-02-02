"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openProfessional, setOpenProfessional] = useState<number | null>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
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
      
      {/* NAVIGATION - SEO & Accessibility optimized */}
      <header>
        <nav 
          aria-label="Main Navigation"
          className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 md:px-16 transition-all duration-500 backdrop-blur-md ${showHeader ? 'translate-y-0 bg-[#F9F7F2]/90' : '-translate-y-full'}`}
        >
          <div className="text-xl md:text-2xl font-serif tracking-tight font-bold text-[#2D391E]">
            Dr. Maya Reynolds, PsyD
          </div>
          <div className="flex gap-4 md:gap-8 font-medium text-sm md:text-base">
            <a href="#about" className="hover:text-[#7C8E7B] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#7C8E7B] transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <div className="pt-24">
        {/* HERO SECTION - Keyword optimized for local SEO */}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-16 md:py-24 gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-[2/3] md:max-w-[450px] overflow-hidden rounded-t-full shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073" 
                alt="Calm Pacific Coastline in Santa Monica" 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                priority 
                className="object-cover" 
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8 flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-7xl font-serif leading-[1.1] text-[#2D391E]">
              Trauma & Anxiety <br /> 
              <span className="italic text-[#7C8E7B]">Psychologist in Santa Monica.</span>
            </h1>
            <p className="text-lg md:text-2xl font-light max-w-lg">
              Licensed Clinical Psychologist providing evidence-based, trauma-informed therapy for high-achieving professionals in California.
            </p>
            <button className="px-10 py-4 bg-[#7C8E7B] text-white hover:bg-[#2D391E] transition-all uppercase tracking-widest text-sm shadow-lg">
              Book a Consultation →
            </button>
          </div>
        </section>

        {/* 1. GROUNDED LIFE SECTION - Responsive left-aligned layout */}
        <section className="flex flex-col md:flex-row items-start bg-[#F9F7F2] overflow-hidden border-y border-[#1F2937]/10">
          <div className="w-full md:w-1/2 px-8 py-16 md:px-24 md:py-32 space-y-8 flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-6xl font-serif leading-tight text-[#2D391E]">Live a grounded life.</h2>
            <div className="space-y-6 text-base md:text-xl font-light leading-relaxed max-w-lg">
              <p>Life can be challenging—especially when balancing high-pressure professional goals with your personal well-being.</p>
              <p>It&apos;s easy to feel alone in these challenges, but therapy in Santa Monica provides a grounded space to slow down and reconnect.</p>
            </div>
            <div className="pt-4"><a href="#contact" className="uppercase tracking-widest text-sm font-bold border-b-2 border-[#7C8E7B] pb-1 hover:text-[#7C8E7B] transition-colors">Get in touch →</a></div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[700px] relative">
            <Image 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000" 
              alt="Mindful journaling for burnout recovery" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
        </section>

        {/* AREAS OF FOCUS - Grid responsiveness */}
        <section className="px-8 py-20 md:px-16 md:py-32 bg-white">
          <h2 className="text-3xl md:text-6xl font-serif text-center mb-16 md:mb-20 text-[#2D391E]">Areas of Focus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {specialties.map((s, i) => (
              <div key={i} className="flex flex-col space-y-6 md:space-y-8 group">
                <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-[#7C8E7B]/10 group-hover:border-[#7C8E7B]/40 transition-colors">
                  <Image 
                    src={s.img} 
                    alt={s.title} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover" 
                  />
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-xl md:text-2xl font-serif text-[#2D391E]">{s.title}</h3>
                  <p className="text-sm md:text-base font-light text-[#1F2937]/80">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* YOU DON'T HAVE TO DO THIS ALL ALONE - Color contrast optimized */}
        <section className="flex flex-col md:flex-row bg-[#D6D2E0] overflow-hidden">
          <div className="w-full md:w-1/2 h-[500px] md:h-[900px] relative">
            <Image 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
              alt="Calm professional therapy environment" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
          <div className="w-full md:w-1/2 px-8 py-16 md:px-24 md:py-32 flex flex-col justify-center items-start text-left space-y-8 text-[#1F2937]">
            <h2 className="text-4xl md:text-7xl font-serif leading-tight">
              You don&apos;t have to <br /> 
              <span className="italic">do this alone.</span>
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed">If you are a high-achieving individual in Santa Monica struggling with any of these, there is hope:</p>
            <ul className="space-y-4 text-base md:text-xl font-light list-disc pl-5">
              <li>Constant worry or feeling emotionally on edge</li>
              <li>Stuck in overthinking or professional burnout</li>
              <li>Lingering effects of past traumatic experiences</li>
              <li>Bracing for something to go wrong despite being functional</li>
            </ul>
            <p className="pt-6 text-base md:text-xl font-light leading-relaxed italic border-t border-[#1F2937]/10">With a grounded approach, we&apos;ll develop resilience and a stronger relationship with yourself.</p>
            <div className="pt-4"><a href="#contact" className="uppercase tracking-[0.2em] text-xs font-bold border-b border-[#1F2937] pb-1 hover:opacity-60 transition-opacity">Work with me →</a></div>
          </div>
        </section>
        
        {/* BIO SECTION - Mobile order optimization */}
        <section id="about" className="flex flex-col md:flex-row items-center px-8 py-20 md:px-16 md:py-32 bg-[#E9E4D9]">
          <div className="w-full md:w-1/2 space-y-10 order-2 md:order-1 mt-12 md:mt-0 text-left items-start flex flex-col">
            <h2 className="text-4xl md:text-7xl font-serif text-[#2D391E]">Hi, I&apos;m Dr. Maya.</h2>
            <p className="text-base md:text-xl font-light leading-relaxed max-w-xl">
              I support high-achieving professionals in Santa Monica who feel functional on the outside but struggle with internal worry. I integrate CBT, EMDR, and body-oriented techniques to help you feel more regulated.
            </p>
            <button className="px-10 py-4 border border-[#1F2937] hover:bg-[#1F2937] hover:text-white transition-all uppercase tracking-widest text-sm">Read Full Story</button>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center items-center order-1 md:order-2">
            <div className="relative w-full max-w-[300px] aspect-[3/4] md:max-w-[420px] overflow-hidden rounded-t-full z-10 shadow-2xl">
              <Image 
                src="/profile-pic.png" 
                alt="Dr. Maya Reynolds, PsyD - Santa Monica Psychologist" 
                fill 
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover" 
              />
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="flex flex-col lg:flex-row items-start px-8 py-20 md:px-16 md:py-32 bg-white gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-[2/3] md:max-w-[450px] overflow-hidden rounded-t-full shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000" 
                alt="Botanical elements symbolizing growth" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover" 
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-12">
            <h2 className="text-4xl md:text-7xl font-serif text-[#2D391E]">FAQs</h2>
            <div className="border-t border-[#1F2937]/10">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#1F2937]/10 py-8 cursor-pointer group" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <div className="flex justify-between items-center text-[#2D391E]">
                    <h3 className="text-lg md:text-2xl font-serif">{faq.q}</h3>
                    <span className={`text-2xl transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>{openFaq === index ? '—' : '+'}</span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-60 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="font-light text-sm md:text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROFESSIONAL BACKGROUND - Dark mode impact */}
        <section className="px-8 py-20 md:px-16 md:py-32 bg-[#2D391E] text-[#F9F7F2]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-serif mb-12 text-center">Professional Background</h2>
            <div className="border-t border-[#F9F7F2]/20">
              {professionalInfo.map((item, index) => (
                <div key={index} className="border-b border-[#F9F7F2]/20 py-8 cursor-pointer group" onClick={() => setOpenProfessional(openProfessional === index ? null : index)}>
                  <div className="flex justify-between items-center text-[#F9F7F2]">
                    <span className="text-lg md:text-xl font-serif group-hover:text-[#7C8E7B] transition-colors">{item.title}</span>
                    <span>{openProfessional === index ? '—' : '+'}</span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openProfessional === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="font-light opacity-80 text-sm md:text-base">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR OFFICE - Physical practice location SEO */}
        <section className="px-8 py-20 md:px-16 md:py-32 bg-[#F9F7F2]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-8 text-[#2D391E] text-left items-start flex flex-col">
              <h2 className="text-3xl md:text-6xl font-serif">A Calm Space for Healing</h2>
              <p className="text-base md:text-xl font-light leading-relaxed">My Santa Monica office is a private space designed for physiological safety and grounding, featuring natural light and comfortable seating for EMDR and trauma work.</p>
              <address className="not-italic font-bold tracking-widest uppercase text-xs md:text-sm border-l-4 border-[#7C8E7B] pl-4">
                123th Street 45 W, <br /> Santa Monica, CA 90401
              </address>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
                <Image 
                  src="/office1.jpeg" 
                  alt="Therapy room with natural light in Santa Monica" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover" 
                />
              </div>
              <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl mt-8 shadow-lg">
                <Image 
                  src="/office2.jpeg" 
                  alt="Comfortable seating area for counseling" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="bg-[#1F2937] text-[#F9F7F2] pt-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 pb-20">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-serif">Dr. Maya Reynolds</h3>
              <p className="text-sm md:text-base font-light opacity-80 leading-relaxed">
                Licensed Clinical Psychologist <br />
                123th Street 45 W,<br />
                Santa Monica, CA 90401
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif">Practice Specialties</h3>
              <ul className="flex flex-col space-y-2 font-light text-sm md:text-base opacity-80 underline underline-offset-4 decoration-[#7C8E7B]">
                <li>Anxiety & Panic Disorder</li>
                <li>EMDR Trauma Therapy</li>
                <li>Entrepreneurial Burnout</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-serif">Contact</h3>
              <a href="mailto:hello@drmayareynolds.com" className="font-light opacity-80 underline underline-offset-4 cursor-pointer hover:text-[#7C8E7B] transition-colors break-all">
                hello@drmayareynolds.com
              </a>
            </div>
          </div>

          <div className="bg-[#161d27] py-12 md:py-16 px-8 text-center space-y-6">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] md:text-xs tracking-widest uppercase opacity-70 underline underline-offset-4">
              <a href="#">Privacy & Cookies</a>
              <a href="#">Good Faith Estimate</a>
              <a href="#">Terms & Conditions</a>
            </div>
            <p className="text-[10px] tracking-widest uppercase opacity-40 italic">
              All Rights Reserved © 2026 Dr. Maya Reynolds, LLC. <br />
              Grounded Psychology in Santa Monica, California.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}