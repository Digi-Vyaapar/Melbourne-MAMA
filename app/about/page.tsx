"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import RevealOnScroll from "@/components/reveal-on-scroll"
import ScrollIndicator from "@/components/scroll-indicator"
import MarqueeText from "@/components/marquee-text"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20">
      <ScrollIndicator />
      <div className="noise" />

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-coral-pink/20 to-transparent z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <h1 className="font-heading text-6xl md:text-8xl tracking-wider mb-6 glitch" data-text="ABOUT US">
                ABOUT <span className="text-primary">US</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl mb-8">
                Melbourne MAMA is a multifaceted Indo-Australian organization founded in 2017, centered around
                connecting, empowering, and representing the Indian community in Australia.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-primary/20 z-0"></div>
                <div className="brutalist-border relative z-10">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Our Story"
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
                  OUR <span className="text-primary">STORY</span>
                </h2>
                <p className="text-lg mb-6">
                  Melbourne MAMA began as a small gathering of Indian film enthusiasts in a suburban Melbourne living
                  room. Frustrated by the lack of representation in Australian media and limited opportunities for
                  Indian creatives, our founders decided to create their own platform.
                </p>
                <p className="text-lg mb-6">
                  What started as informal screenings and networking events quickly evolved into a structured
                  organization with a clear mission: to bridge cultural gaps and provide creative and business
                  opportunities that were otherwise scarce in mainstream Australian sectors.
                </p>
                <p className="text-lg mb-6">
                  Today, Melbourne MAMA stands as a testament to the power of community-driven initiatives, having grown
                  into a respected organization that spans media production, business development, and cultural
                  connection.
                </p>
                <Button asChild className="brutalist-button text-lg px-8 py-6">
                  <Link href="/contact">CONNECT WITH US</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              MISSION & <span className="text-primary">VISION</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealOnScroll delay={100}>
              <div className="brutalist-card p-8 h-full">
                <h3 className="font-heading text-3xl mb-6 text-primary">OUR MISSION</h3>
                <p className="text-lg mb-4">
                  To create platforms and opportunities that empower the Indian community in Australia to share their
                  stories, build businesses, and maintain cultural connections.
                </p>
                <p className="text-lg">
                  We strive to be the bridge between Indian talent and Australian opportunities, fostering
                  cross-cultural understanding and collaboration.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="brutalist-card p-8 h-full">
                <h3 className="font-heading text-3xl mb-6 text-primary">OUR VISION</h3>
                <p className="text-lg mb-4">
                  A vibrant, integrated Indo-Australian community where cultural diversity is celebrated, and Indian
                  voices are prominent in Australia's media, business, and cultural landscape.
                </p>
                <p className="text-lg">
                  We envision a future where the unique perspectives and talents of the Indian diaspora enrich and shape
                  Australian society.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              CORE <span className="text-primary">VALUES</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AUTHENTICITY",
                description: "We celebrate and promote genuine cultural expression and honest storytelling.",
              },
              {
                title: "INCLUSIVITY",
                description: "We create spaces where everyone from the Indian diaspora feels welcome and represented.",
              },
              {
                title: "INNOVATION",
                description: "We embrace new ideas and approaches to solving challenges and creating opportunities.",
              },
              {
                title: "COLLABORATION",
                description: "We believe in the power of working together across cultures and disciplines.",
              },
            ].map((value, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card p-6 h-full flex flex-col">
                  <h3 className="font-heading text-2xl mb-4 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              OUR <span className="text-primary">TEAM</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Mehta",
                role: "Founder & Creative Director",
                bio: "Former filmmaker with a passion for authentic storytelling and community building.",
              },
              {
                name: "Divya Patel",
                role: "Business Development Lead",
                bio: "Experienced entrepreneur connecting Indian businesses with Australian opportunities.",
              },
              {
                name: "Rohan Sharma",
                role: "Media Production Manager",
                bio: "Award-winning producer specializing in independent film and digital content.",
              },
              {
                name: "Priya Singh",
                role: "Community Outreach Coordinator",
                bio: "Dedicated to creating inclusive spaces for cultural exchange and support.",
              },
              {
                name: "Vikram Choudhury",
                role: "Technical Director",
                bio: "Tech innovator bringing cutting-edge solutions to creative projects.",
              },
              {
                name: "Ananya Desai",
                role: "Marketing & Communications",
                bio: "Strategic communicator amplifying Indian voices across Australian media.",
              },
            ].map((member, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card overflow-hidden group hover-scale">
                  <div className="h-64 relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&text=${member.name}`}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl mb-1">{member.name}</h3>
                    <p className="text-primary font-bold mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              KEY <span className="text-primary">ACHIEVEMENTS</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <RevealOnScroll delay={100}>
              <div className="brutalist-card p-8">
                <h3 className="font-heading text-3xl mb-6">MEDIA IMPACT</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">•</span>
                    <p>Produced 15+ independent films and web series showcasing Indian-Australian stories</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">•</span>
                    <p>Established partnerships with 3 major Australian streaming platforms</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">•</span>
                    <p>Won 7 awards at international film festivals for our productions</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">•</span>
                    <p>Created employment opportunities for 100+ Indian-Australian creatives</p>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="brutalist-card p-8">
                <h3 className="font-heading text-3xl mb-6">BUSINESS & COMMUNITY</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">•</span>
                    <p>Facilitated $2M+ in investment for Indian-Australian startups</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">•</span>
                    <p>Built a community network of 5,000+ members across Australia</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">•</span>
                    <p>Organized 50+ cultural events celebrating Indian heritage</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">•</span>
                    <p>Established mentorship programs supporting 200+ international students</p>
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              OUR <span className="text-primary">PARTNERS</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, i) => (
              <RevealOnScroll key={i} delay={i * 50}>
                <div className="brutalist-card p-6 flex items-center justify-center h-32">
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=Partner ${i + 1}`}
                    alt={`Partner ${i + 1}`}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto"
                  />
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
              JOIN OUR <span className="text-outline-white">JOURNEY</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="text-xl max-w-2xl mx-auto mb-12">
              Whether you're a creative, entrepreneur, or community member, there's a place for you in the Melbourne
              MAMA family.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <Button asChild className="brutalist-button bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Link href="/contact">GET INVOLVED TODAY</Link>
            </Button>
          </RevealOnScroll>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-4 bg-foreground text-background overflow-hidden">
        <MarqueeText
          text="CONNECTING CULTURES • EMPOWERING VOICES • BUILDING BRIDGES • CREATING OPPORTUNITIES • TELLING STORIES • FOSTERING COMMUNITY •"
          className="text-xl md:text-2xl font-heading tracking-wider py-2"
        />
      </section>
    </main>
  )
}
