import Image from 'next/image';

export default function Home() {
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
        
        {/* Left Side: Arched Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[450px] md:w-[450px] md:h-[600px] overflow-hidden rounded-t-full">
            <Image 
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop" 
              alt="Lilac Flowers"
              fill
              priority // This tells Next.js to load this image immediately (good for LCP)
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
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
        {/* Left Side: Text Content */}
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

          {/* Right Side: Flatlay Image */}
          <div className="w-full md:w-1/2 h-[500px] md:h-[800px] relative">
            <Image 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
              alt="Coffee and notebook flatlay"
              fill
              className="object-cover"
            />
          </div>
      </section>
    </main>
  );
}