import React, { useRef, useEffect, useState } from 'react'
import { ArrowRight, Zap, Cog, Leaf, Shield, Users, MapPin, Phone, Mail, ChevronDown } from 'lucide-react'
import founderImage from '@/assets/founder.jpg'
import coFounder1Image from '@/assets/co-founder-1.jpg'
import coFounder2Image from '@/assets/co-founder-2.jpg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type HomePageProps = {
  onNavigate: (page: string) => void
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const interiorSectionRef = useRef<HTMLDivElement>(null)
  const interiorVideoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [activeSlide, setActiveSlide] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const interiorSlides = [
    {
      tag: '01 — Driver View',
      title: "At The\nWheel",
      highlight: 'Wheel',
      desc: 'Grip the wheel, read the speed, feel the road. The driver\'s cockpit puts every control at your fingertips — wrapped in red ambient lighting that sets the mood for every ride.',
      video: '/interior-1.mp4',
      dot: 'Driver',
    },
    {
      tag: '02 — Passenger View',
      title: "A View\nFrom Within",
      highlight: 'From Within',
      desc: 'From the passenger seat, the world looks different. A panoramic glass roof, sweeping red accent lines, and a front-row seat to the future of urban commuting.',
      video: '/interior-2.mp4',
      dot: 'Passenger',
    },
    {
      tag: '03 — Scissor Doors',
      title: "Open To\nThe World",
      highlight: 'The World',
      desc: 'Scissor doors that make a statement before you even step in. One look at the glowing red interior from the outside, and the e-POD speaks for itself.',
      video: '/interior-3.mp4',
      dot: 'Doors',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const section = interiorSectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      if (scrolled < 0 || scrolled > sectionHeight) return
      const progress = scrolled / sectionHeight
      setScrollProgress(progress)
      const idx = progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2
      setActiveSlide(prev => {
        if (idx !== prev) {
          const vid = interiorVideoRefs.current[idx]
          if (vid) { vid.currentTime = 0; vid.play() }
        }
        return idx
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: Shield,
      title: 'Airbags for Safety',
      description: 'Advanced airbag system uncommon in two-wheelers, providing car-level safety protection.'
    },
    {
      icon: Cog,
      title: 'Full Weather Protection',
      description: 'Complete weather protection with fully enclosed design – no helmets required.'
    },
    {
      icon: Leaf,
      title: 'Superior Maneuverability',
      description: 'Outstanding maneuverability in congested city traffic with innovative docking capability.'
    },
    {
      icon: Zap,
      title: 'Fast Charging',
      description: '80 km range with charging under 10 minutes.'
    }
  ]

  const techSpecs = [
    { label: 'Seating Capacity', value: '2', unit: 'Push Back Seats' },
    { label: 'Top Speed', value: '120', unit: 'km/h' },
    { label: 'Range per Charge', value: '200', unit: 'km' },
    { label: 'Charging Time', value: '4', unit: 'Hours' },
    { label: 'Protection', value: 'Airbag', unit: 'Fully-enclosed' },
    { label: 'Weather Protection', value: 'Air-conditioning', unit: 'For Sunny Days' }
  ]

  const faqs = [
    {
      question: 'What is Jedlik Motors?',
      answer: 'Jedlik Motors was founded by passionate adventurers and engineers on a mission to redefine urban commuting with safety, comfort, and maneuverability.'
    },
    {
      question: 'Why choose e-POD?',
      answer: 'e-POD offers the comfort and safety of a car with the maneuverability of a motorcycle.'
    },
    {
      question: 'When will you reveal the product?',
      answer: 'We are gonna reveal the product on October 9 at Codissia Trade Fair Complex, Coimbatore.'
    },
    {
      question: 'How can we contact you?',
      answer: 'You can contact us via email: info@jedlik.in and via phone: +91 9790678445.'
    }
  ]

  // ── Leadership data ──────────────────────────────────────────
  const founders = [
    { name: 'Raguram SK',     role: 'FOUNDER',     img: founderImage    },
    { name: 'Muthuram B',     role: 'CO-FOUNDER',  img: coFounder1Image },
    { name: 'Nishanthraj GV', role: 'CO-FOUNDER',  img: coFounder2Image },
  ]

  // ─────────────────────────────────────────────────────────────

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">

      {/* ── FULL-SCREEN VIDEO HERO ── */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/jedlik-vehicle.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-orbitron tracking-[0.2em] text-primary uppercase">
              DPIIT Recognised · Chennai, India
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-2 leading-none tron-glow-text">
            DRIVING THE
          </h1>
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-8 leading-none text-primary">
            FUTURE
          </h1>

          <p className="text-xl md:text-2xl font-inter text-white/80 mb-3 tracking-widest uppercase font-light">
            Of Urban Commuting
          </p>
          <p className="text-base md:text-lg font-inter text-white/50 mb-12 max-w-xl mx-auto">
            Electrifying tomorrow's journeys with the e-POD — safety, comfort &amp; maneuverability, reimagined.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('features')}
              size="lg"
              className="tron-glass tron-glow font-orbitron font-bold text-base px-10 py-6 rounded-full group border border-primary/70 hover:bg-primary/20 transition-all"
            >
              Explore e-POD
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollToSection('techspecs')}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white font-orbitron font-bold text-base px-10 py-6 rounded-full"
            >
              TECH SPECS
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-10">
          <span className="text-[10px] font-orbitron tracking-[0.3em] text-white/30 uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5 text-primary/60" />
        </div>
      </section>

      {/* ── STEP INSIDE — Scroll-driven interior section ── */}
      <div ref={interiorSectionRef} style={{ height: '300vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

          {/* Video backgrounds */}
          {interiorSlides.map((slide, i) => (
            <video
              key={i}
              ref={el => { interiorVideoRefs.current[i] = el }}
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover',
                opacity: activeSlide === i ? 1 : 0,
                transition: 'opacity 0.8s ease',
                zIndex: 1,
              }}
            />
          ))}

          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.85) 100%)', zIndex: 2 }} />

          {/* Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(200,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />

          {/* Section heading */}
          <div style={{ position: 'absolute', top: '80px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, textAlign: 'center', whiteSpace: 'nowrap' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.25em', color: 'hsl(var(--accent))', textTransform: 'uppercase', marginBottom: '6px' }}>Interior Experience</p>
            <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 900, letterSpacing: '0.2em', color: '#fff', textTransform: 'uppercase', textShadow: '0 0 40px hsl(var(--primary) / 0.4)' }}>
              STEP <span style={{ color: 'hsl(var(--accent))' }}>INSIDE</span>
            </h2>
          </div>

          {/* Slide content */}
          {interiorSlides.map((slide, i) => (
            <div
              key={i}
              style={{
                position: 'absolute', bottom: '10%', left: '6%', right: '20%', zIndex: 10,
                opacity: activeSlide === i ? 1 : 0,
                transform: activeSlide === i ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.22em', color: 'hsl(var(--accent))', textTransform: 'uppercase', marginBottom: '12px' }}>{slide.tag}</p>
              <h3 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, letterSpacing: '0.05em', color: '#fff', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '18px', textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 60px rgba(200,0,0,0.5)' }}>
                {slide.title.split('\n').map((line, li) =>
                  line === slide.highlight
                    ? <span key={li} style={{ color: 'hsl(var(--accent))', display: 'block' }}>{line}</span>
                    : <span key={li} style={{ display: 'block' }}>{line}</span>
                )}
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', maxWidth: '480px', lineHeight: 1.8, textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>{slide.desc}</p>
            </div>
          ))}

          {/* Dot nav */}
          <div style={{ position: 'absolute', right: '3%', top: '50%', transform: 'translateY(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {interiorSlides.map((slide, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: activeSlide === i ? 'hsl(var(--accent))' : '#333',
                  boxShadow: activeSlide === i ? '0 0 10px hsl(var(--accent))' : 'none',
                  transition: 'all 0.3s',
                  transform: activeSlide === i ? 'scale(1.4)' : 'scale(1)',
                }} />
                <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', color: activeSlide === i ? 'hsl(var(--accent))' : '#333', textTransform: 'uppercase', transition: 'color 0.3s' }}>{slide.dot}</span>
              </div>
            ))}
          </div>

          {/* Video counter */}
          <div style={{ position: 'absolute', top: '6%', right: '4%', zIndex: 10, display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '32px', fontWeight: 900, color: 'hsl(var(--accent))', lineHeight: 1 }}>{activeSlide + 1}</span>
            <span style={{ fontSize: '13px', color: '#444', fontWeight: 700 }}>/ 3</span>
          </div>

          {/* Progress bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', background: 'hsl(var(--accent))', boxShadow: '0 0 8px hsl(var(--accent))', width: `${scrollProgress * 100}%`, zIndex: 10, transition: 'width 0.1s linear' }} />
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            ABOUT <span className="text-accent">JEDLIK MOTORS</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-orbitron font-bold tron-glow-text">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create safe and comfortable urban commuting solutions for city dwellers.
              </p>
            </div>
            <div className="space-y-6">
              <div className="tron-glass p-6 rounded-lg border border-accent/30">
                <h4 className="text-xl font-orbitron font-bold text-accent mb-3">DPIIT Recognised</h4>
                <p className="text-muted-foreground">Officially recognized startup by the Department for Promotion of Industry and Internal Trade.</p>
              </div>
              <div className="tron-glass p-6 rounded-lg border border-primary/30">
                <h4 className="text-xl font-orbitron font-bold text-primary mb-3">Chennai Based</h4>
                <p className="text-muted-foreground">Located in India's automobile capital, leveraging decades of automotive expertise.</p>
              </div>
              <div className="tron-glass p-6 rounded-lg border border-accent/30">
                <h4 className="text-xl font-orbitron font-bold text-accent mb-3">Expert Team</h4>
                <p className="text-muted-foreground">Next generation engineers working on next generation of commuting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            CUTTING-EDGE <span className="text-accent">FEATURES</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="tron-glass-strong p-8 rounded-lg border border-primary/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/20 group-hover:bg-accent/20 transition-colors mr-4">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold group-hover:tron-glow-text transition-all">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section id="techspecs" className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            TECHNICAL <span className="text-accent">SPECIFICATIONS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSpecs.map((spec, index) => (
              <div key={index} className="tron-glass-strong p-6 rounded-lg border border-primary/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 text-center group">
                <h3 className="text-lg font-orbitron font-bold text-muted-foreground mb-2 group-hover:text-foreground transition-colors">{spec.label}</h3>
                <div className="text-3xl font-orbitron font-black text-primary group-hover:tron-glow-text transition-all mb-1">{spec.value}</div>
                <p className="text-accent font-medium">{spec.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="tron-glass-strong border border-primary/30 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-orbitron font-bold hover:text-primary hover:tron-glow-text transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            GET IN <span className="text-accent">TOUCH</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="tron-glass-strong p-8 rounded-lg border border-primary/30">
              <h3 className="text-2xl font-orbitron font-bold mb-6 tron-glow-text">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="tron-glass border-primary/30 focus:border-accent" />
                  <Input type="email" placeholder="Email Address" className="tron-glass border-primary/30 focus:border-accent" />
                </div>
                <Input type="tel" placeholder="Phone Number" className="tron-glass border-primary/30 focus:border-accent" />
                <Input placeholder="Subject" className="tron-glass border-primary/30 focus:border-accent" />
                <Textarea placeholder="Your Message" rows={6} className="tron-glass border-primary/30 focus:border-accent resize-none" />
                <Button type="submit" className="w-full tron-glass tron-glow hover:animate-pulse-glow font-orbitron font-bold text-lg py-3">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="tron-glass-strong p-6 rounded-lg border border-accent/30">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-accent mr-4" />
                  <h4 className="text-xl font-orbitron font-bold text-accent">Location</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Anna incubator, Second Floor, Platinum Jubilee building, AC Tech Campus,
                  Anna University, Guindy, Chennai, Tamil Nadu 600025
                </p>
                <Button
                  onClick={() => {
                    const address = "Anna incubator, Second Floor, Platinum Jubilee building, AC Tech Campus, Anna University, Guindy, Chennai, Tamil Nadu 600025";
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
                  }}
                  className="w-full tron-glass border-accent hover:bg-accent hover:text-accent-foreground font-orbitron font-bold"
                  variant="outline"
                >
                  <MapPin className="h-4 w-4 mr-2" /> GET DIRECTIONS
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="tron-glass p-6 rounded-lg border border-primary/30">
                  <div className="flex items-center mb-3">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <h4 className="text-lg font-orbitron font-bold text-primary">Phone</h4>
                  </div>
                  <p className="text-muted-foreground">+91 9790678445</p>
                </div>
                <div className="tron-glass p-6 rounded-lg border border-primary/30">
                  <div className="flex items-center mb-3">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <h4 className="text-lg font-orbitron font-bold text-primary">Email</h4>
                  </div>
                  <p className="text-muted-foreground">info@jedlik.in</p>
                </div>
              </div>
              <div className="tron-glass-strong h-64 rounded-lg border border-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground font-orbitron">Interactive Map</p>
                  <p className="text-sm text-muted-foreground/60 mt-2">Map integration placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ── */}
      <section className="py-20 relative">
        <div className="absolute inset-0 tron-grid-bg opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-center mb-16 tron-glow-text">
            OUR <span className="text-accent">LEADERSHIP</span>
          </h2>

          {/* Founders row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((person) => (
              <div key={person.name} className="tron-glass-strong p-8 rounded-lg border border-primary/30 hover:border-accent/60 hover:tron-glow transition-all duration-300 text-center group">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/30 group-hover:border-accent/60 transition-all">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:tron-glow-text transition-all">{person.name}</h3>
                <p className="text-accent font-medium text-sm tracking-widest">{person.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 tron-glow-text">
            READY TO ELECTRIFY YOUR JOURNEY?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the future of urban mobility with Jedlik Motors' innovative solutions.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="tron-glass tron-glow hover:animate-pulse-glow font-orbitron font-bold text-lg px-12 py-4 rounded-full"
          >
            GET IN TOUCH
          </Button>
        </div>
      </section>

    </div>
  )
}

export default HomePage
