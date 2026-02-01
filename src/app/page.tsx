"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openProfessional, setOpenProfessional] = useState<number | null>(null);

  const faqs = [
    { q: "Do you take insurance?", a: "I am an out-of-network provider. I can provide you with a monthly superbill that you can submit to your insurance company for potential reimbursement." },
    { q: "What are your rates?", a: "My current rate is $175 per 50-minute session for individuals and $200 for couples." },
    { q: "Do you have any openings?", a: "I am currently accepting new clients for Tuesday and Thursday morning sessions." }
  ];

  const professionalInfo = [
    { title: 'Education', content: 'Ph.D. in Clinical Psychology from the University of Minnesota.' },
    { title: 'Licensure', content: 'Licensed Psychologist in the State of Minnesota (LP #12345).' },
    { title: 'Certifications', content: 'Certified EMDR Therapist and Advanced Trauma-Informed Care Specialist.' }
  ];

  return (
    <main className="min-h-screen bg-lilac-cream text-lilac-green">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-8 py-6 md:px-16">
        <div className="text-3xl font-serif tracking-tight cursor-pointer">
          Lilac Template
        </div>
        <div className="flex gap-8 font-medium">
          <a href="#" className="hover:opacity-70 transition-opacity">Blog</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 md:px-16 md:py-24 gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[600px] overflow-hidden rounded-t-full">
            <Image 
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop" 
              alt="Lilac Flowers"
              fill
              priority 
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.1]">
            Live your life <br /> 
            <span className="italic">in full bloom</span>
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Therapy for Adults in Minneapolis, MN.
          </p>
          <button className="mt-4 px-10 py-4 border border-lilac-green text-lilac-green hover:bg-lilac-green hover:text-white transition-all duration-300 uppercase tracking-widest text-sm flex items-center gap-2">
            Connect With Me <span>→</span>
          </button>
        </div>
      </section>

      {/* SECTION 2: LIVE A FULFILLING LIFE */}
      <section className="flex flex-col md:flex-row items-center bg-lilac-cream overflow-hidden">
          <div className="w-full md:w-1/2 px-8 py-16 md:px-24 md:py-32 space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Live a fulfilling life.
            </h2>
            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              <p>
                Life can be challenging—especially when you&apos;re trying to balance 
                your personal and professional life.
              </p>
              <p>
                It&apos;s easy to feel like you&apos;re alone in facing these challenges, but I 
                want you to know that I&apos;m here to help.
              </p>
            </div>
            <div className="pt-4">
              <a href="#" className="uppercase tracking-[0.2em] text-sm font-semibold border-b border-lilac-green pb-1 hover:opacity-60 transition-opacity">
                Get in touch →
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[500px] md:h-[800px] relative">
            <Image 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
              alt="Coffee and notebook flatlay"
              fill
              className="object-cover"
            />
          </div>
      </section>

      {/* SECTION 3: MY SPECIALTIES */}
      <section className="px-8 py-20 md:px-16 md:py-32 bg-lilac-cream">
        <h2 className="text-5xl md:text-7xl font-serif text-center mb-16 md:mb-24">
          My Specialties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="flex flex-col space-y-8 p-8 border border-lilac-green/20">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Self-Esteem</h3>
              <p className="font-light leading-relaxed">
                Building a strong sense of self-worth is key to living a fulfilled life. Let&apos;s work together to bolster your self-esteem.
              </p>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-full">
              <Image 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000" 
                alt="Self-Esteem"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col space-y-8 p-8 border border-lilac-green/20">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Relationships</h3>
              <p className="font-light leading-relaxed">
                Navigating relationships can be complex. I&apos;m here to guide you through these complexities to help you form healthier connections.
              </p>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-full">
              <Image 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000" 
                alt="Relationships"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col space-y-8 p-8 border border-lilac-green/20">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif">Burnout</h3>
              <p className="font-light leading-relaxed">
                Feeling overwhelmed by your career is more common than you think. Together, we&apos;ll identify strategies to manage and prevent burnout.
              </p>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-full">
              <Image 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000" 
                alt="Burnout"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: YOU DON'T HAVE TO DO THIS ALONE */}
      <section className="flex flex-col md:flex-row bg-[#D6D2E0] overflow-hidden">
        <div className="w-full md:w-1/2 h-[600px] md:h-[900px] relative">
          <Image 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
            alt="Woman looking peaceful"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 px-8 py-16 md:px-24 md:py-32 flex flex-col justify-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            You don&apos;t have to do this <br /> 
            <span className="italic">all alone.</span>
          </h2>
          <p className="text-xl font-light">If you are facing any of these, there&apos;s hope:</p>
          <ul className="space-y-4 text-lg md:text-xl font-light list-disc pl-5">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>
          <p className="pt-6 text-lg md:text-xl font-light leading-relaxed italic">
            With empathy and guidance, we&apos;ll work together to navigate the 
            challenges life throws your way.
          </p>
        </div>
      </section>
    
      {/* SECTION 5: HI, I'M LILAC */}
      <section className="flex flex-col md:flex-row items-center px-8 py-20 md:px-16 md:py-32 bg-lilac-cream">
        <div className="w-full md:w-1/2 space-y-10 order-2 md:order-1 mt-12 md:mt-0">
          <h2 className="text-5xl md:text-8xl font-serif leading-tight">
           Hi, I’m Lilac.
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl">
            I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
          </p>
          <button className="px-10 py-4 border border-lilac-green text-lilac-green hover:bg-lilac-green hover:text-white transition-all duration-300 uppercase tracking-widest text-sm flex items-center gap-2">
            Let&apos;s Chat <span>→</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 relative flex justify-center items-center order-1 md:order-2">
          <div className="relative w-[280px] h-[400px] md:w-[400px] md:h-[550px] overflow-hidden rounded-t-full z-10">
            <Image 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000" 
              alt="Lilac holding flowers"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 md:right-10 w-[180px] h-[180px] md:w-[250px] md:h-[250px] overflow-hidden rounded-full border-8 border-lilac-cream z-20 shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2000" 
              alt="Soft focus flowers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQs */}
      <section className="flex flex-col md:flex-row items-start px-8 py-20 md:px-16 md:py-32 bg-lilac-cream gap-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[650px] overflow-hidden rounded-t-full">
            <Image 
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000" 
              alt="Dried flowers"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-12">
          <h2 className="text-5xl md:text-8xl font-serif">FAQs</h2>
          <div className="border-t border-lilac-green/30">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-lilac-green/30 py-8 cursor-pointer group"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl md:text-4xl font-serif">{faq.q}</h3>
                  <span className={`text-4xl transition-all duration-300 transform ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                    {openFaq === index ? '—' : '+'}
                  </span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-40 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-lilac-green/80">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: MY PROFESSIONAL BACKGROUND */}
      <section className="px-8 py-20 md:px-16 md:py-32 bg-lilac-cream text-center">
        <h2 className="text-5xl md:text-7xl font-serif mb-16">My Professional Background</h2>
        <div className="max-w-4xl mx-auto border-t border-lilac-green/30 text-left">
          {professionalInfo.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-lilac-green/30 py-8 cursor-pointer group"
              onClick={() => setOpenProfessional(openProfessional === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl md:text-4xl font-serif">{item.title}</span>
                <span className={`text-4xl transition-all duration-300 transform ${openProfessional === index ? 'rotate-180' : 'rotate-0'}`}>
                  {openProfessional === index ? '—' : '+'}
                </span>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openProfessional === index ? 'max-h-40 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg md:text-xl font-light leading-relaxed text-lilac-green/80">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* SECTION 8: GET STARTED TODAY */}
      <section className="bg-[#84814E] text-white py-24 md:py-32 px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-serif">Get started today.</h2>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Ready to take the first step towards a happier, healthier you? <br className="hidden md:block" />
            Contact me to book your first session. I look forward to starting this <br className="hidden md:block" />
            therapeutic journey with you.
          </p>
          <div className="pt-4">
            <button className="px-10 py-4 border border-white text-white hover:bg-white hover:text-[#84814E] transition-all duration-300 uppercase tracking-widest text-sm">
              Get in touch →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9: FOOTER */}
      <footer className="bg-lilac-cream pt-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between gap-16 md:gap-8 pb-20">
          <div className="space-y-8 min-w-[250px]">
            <h3 className="text-4xl font-serif">Lilac Template</h3>
            <div className="space-y-4 font-light text-lg">
              <p>123 Example Road<br />Minneapolis, MN</p>
              <div className="flex flex-col space-y-1">
                <a href="mailto:email@example.com" className="underline hover:opacity-70">email@example.com</a>
                <p>(555) 555-5555</p>
              </div>
            </div>
          </div>
          <div className="space-y-8 min-w-[200px]">
            <h3 className="text-2xl font-serif">Hours</h3>
            <p className="font-light text-lg leading-relaxed">Monday – Friday<br />10am – 6pm</p>
          </div>
          <div className="space-y-8 min-w-[150px]">
            <h3 className="text-2xl font-serif">Find</h3>
            <nav className="flex flex-col space-y-3 underline font-light text-lg">
              <a href="#" className="hover:opacity-70">Home</a>
              <a href="#" className="hover:opacity-70">Contact</a>
              <a href="#" className="hover:opacity-70">Blog</a>
            </nav>
          </div>
        </div>

        {/* BOTTOM COLORED SECTION FOR LINKS */}
        <div className="bg-[#E5E1D8] py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm underline font-light opacity-80 mb-12">
              <a href="#" className="hover:text-lilac-green/60">Privacy & Cookies Policy</a>
              <a href="#" className="hover:text-lilac-green/60">Good Faith Estimate</a>
              <a href="#" className="hover:text-lilac-green/60">Website Terms & Conditions</a>
              <a href="#" className="hover:text-lilac-green/60">Disclaimer</a>
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm font-light">Website Template Credits: <a href="#" className="underline">Go Bloom Creative</a></p>
              <p className="text-xs tracking-widest uppercase opacity-60 mt-8">
                All Rights Reserved © 2024 Your Business Name Here, LLC.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}