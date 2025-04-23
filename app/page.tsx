"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Film, Briefcase, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import MarqueeText from "@/components/marquee-text"
import RevealOnScroll from "@/components/reveal-on-scroll"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-hidden">
      <ScrollIndicator />
      <div className="noise" />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral-pink/20 to-transparent z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 mt-16">
          <div className="flex flex-col items-center text-center">
            <RevealOnScroll>
              <h1
                className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-wider mb-4 glitch"
                data-text="MELBOURNE MAMA"
              >
                MELBOURNE <span className="text-primary">MAMA</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl max-w-3xl mb-8 font-display">
                <span className="text-primary font-bold">CONNECTING</span> •{" "}
                <span className="text-primary font-bold">EMPOWERING</span> •{" "}
                <span className="text-primary font-bold">REPRESENTING</span>
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <p className="text-lg md:text-xl max-w-2xl mb-12 text-muted-foreground">
                A multifaceted Indo-Australian organization bridging cultural gaps through media, business, and
                community initiatives since 2017.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="brutalist-button text-lg px-8 py-6">
                  <Link href="/about">DISCOVER OUR STORY</Link>
                </Button>
                <Button asChild variant="outline" className="brutalist-button bg-background text-lg px-8 py-6">
                  <Link href="/contact">GET IN TOUCH</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-4 bg-primary text-primary-foreground overflow-hidden">
        <MarqueeText
          text="BRIDGING CULTURES • AMPLIFYING VOICES • CREATING OPPORTUNITIES • BUILDING COMMUNITY • TELLING STORIES • EMPOWERING TALENT • FOSTERING CONNECTIONS •"
          className="text-xl md:text-2xl font-heading tracking-wider py-2"
        />
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              WHAT WE <span className="text-primary">DO</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Media Production */}
            <RevealOnScroll staggered={true} className="flex flex-col">
              <div className="brutalist-card p-8 h-full flex flex-col">
                <div className="mb-6 text-primary">
                  <Film className="h-12 w-12" />
                </div>
                <h3 className="font-heading text-3xl mb-4">MEDIA PRODUCTION</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Specializing in Telugu independent films, web series, and film promotions that showcase authentic
                  stories from the Indian diaspora.
                </p>
                <Button asChild variant="link" className="p-0 justify-start font-bold group">
                  <Link href="/media" className="flex items-center gap-2">
                    EXPLORE MEDIA
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>

            {/* Business Hub */}
            <RevealOnScroll staggered={true} className="flex flex-col" delay={200}>
              <div className="brutalist-card p-8 h-full flex flex-col">
                <div className="mb-6 text-primary">
                  <Briefcase className="h-12 w-12" />
                </div>
                <h3 className="font-heading text-3xl mb-4">BUSINESS HUB</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Supporting young Indian entrepreneurs and facilitating access to networks and investors in the
                  Australian business landscape.
                </p>
                <Button asChild variant="link" className="p-0 justify-start font-bold group">
                  <Link href="/business" className="flex items-center gap-2">
                    DISCOVER OPPORTUNITIES
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>

            {/* Community Connection */}
            <RevealOnScroll staggered={true} className="flex flex-col" delay={400}>
              <div className="brutalist-card p-8 h-full flex flex-col">
                <div className="mb-6 text-primary">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="font-heading text-3xl mb-4">COMMUNITY CONNECTION</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Building spaces for networking, cultural exchange, and support for international students and the
                  broader Indian diaspora.
                </p>
                <Button asChild variant="link" className="p-0 justify-start font-bold group">
                  <Link href="/community" className="flex items-center gap-2">
                    JOIN THE COMMUNITY
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-primary/20 z-0"></div>
                <div className="brutalist-border relative z-10">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Featured Project"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div>
                <h2 className="font-heading text-5xl md:text-7xl mb-6">
                  FEATURED <span className="text-primary">PROJECT</span>
                </h2>
                <p className="text-xl mb-6 text-muted-foreground">
                  "Diaspora Dreams" - A groundbreaking web series exploring the lives of Indian students navigating
                  cultural identity in Melbourne.
                </p>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>6-episode series featuring emerging talent</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Premiered at Melbourne International Film Festival</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Collaboration with local Indian businesses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Over 500,000 views across platforms</span>
                  </li>
                </ul>
                <Button asChild className="brutalist-button text-lg px-8 py-6">
                  <Link href="/media/diaspora-dreams">WATCH TRAILER</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              UPCOMING <span className="text-primary">EVENTS</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card group hover-scale overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Event ${i}`}
                      alt={`Event ${i}`}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 font-bold">
                      {["JUN 15", "JUL 22", "AUG 10"][i - 1]}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl mb-2">
                      {
                        ["Bollywood Night Fundraiser", "Entrepreneur Networking Mixer", "Cultural Showcase & Market"][
                          i - 1
                        ]
                      }
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {
                        [
                          "A night of music, dance, and community support at Federation Square.",
                          "Connect with fellow entrepreneurs and investors at our quarterly mixer.",
                          "Experience the vibrant culture of India through performances, food, and crafts.",
                        ][i - 1]
                      }
                    </p>
                    <Button asChild variant="link" className="p-0 justify-start font-bold group">
                      <Link href={`/events/event-${i}`} className="flex items-center gap-2">
                        LEARN MORE
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="brutalist-button bg-background text-lg px-8 py-6">
              <Link href="/events">VIEW ALL EVENTS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              COMMUNITY <span className="text-primary">VOICES</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[1, 2].map((i) => (
              <RevealOnScroll key={i} delay={i * 150}>
                <div className="brutalist-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden brutalist-border-primary">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=${i}`}
                        alt={`Person ${i}`}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl">{["Priya Sharma", "Raj Patel"][i - 1]}</h3>
                      <p className="text-muted-foreground">{["Film Director", "Business Owner"][i - 1]}</p>
                    </div>
                  </div>
                  <p className="text-lg mb-4">
                    {
                      [
                        "Melbourne MAMA provided me with the platform and connections I needed to bring my film vision to life. Their support for emerging filmmakers is unmatched in the Australian landscape.",
                        "As a young entrepreneur new to Australia, Melbourne MAMA's business hub connected me with mentors and investors who understood my vision. They've been instrumental in helping me establish my startup in Melbourne.",
                      ][i - 1]
                    }
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-primary">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-6">
              JOIN OUR <span className="text-outline-white">COMMUNITY</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="text-xl max-w-2xl mx-auto mb-12">
              Be part of a vibrant network of creatives, entrepreneurs, and cultural enthusiasts shaping the
              Indo-Australian narrative.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <Button asChild className="brutalist-button bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Link href="/contact">GET INVOLVED TODAY</Link>
            </Button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="font-heading text-2xl mb-6">MELBOURNE MAMA</h3>
              <p className="mb-6">
                Connecting, empowering, and representing the Indian community in Australia since 2017.
              </p>
              <div className="flex gap-4">
                {["twitter", "instagram", "facebook", "youtube"].map((social) => (
                  <Link key={social} href={`https://${social}.com`} className="hover:text-primary transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-10 h-10 rounded-full border border-background flex items-center justify-center">
                      {social[0].toUpperCase()}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-xl mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Media Production", href: "/media" },
                  { label: "Business Hub", href: "/business" },
                  { label: "Community", href: "/community" },
                  { label: "Events", href: "/events" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl mb-6">CONTACT US</h3>
              <address className="not-italic space-y-3">
                <p>123 Creative Hub Street</p>
                <p>Melbourne, VIC 3000</p>
                <p>Australia</p>
                <p className="mt-4">
                  <a href="mailto:info@melbournemama.com.au" className="hover:text-primary transition-colors">
                    info@melbournemama.com.au
                  </a>
                </p>
                <p>
                  <a href="tel:+61412345678" className="hover:text-primary transition-colors">
                    +61 4 1234 5678
                  </a>
                </p>
              </address>
            </div>

            <div>
              <h3 className="font-heading text-xl mb-6">NEWSLETTER</h3>
              <p className="mb-4">Stay updated with our latest events, projects, and opportunities.</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-background/10 border border-background/30 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" className="w-full brutalist-button bg-primary text-primary-foreground">
                  SUBSCRIBE
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-background/20 text-center text-sm">
            <p>© {new Date().getFullYear()} Melbourne MAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
