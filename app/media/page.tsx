"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Award, Film, Tv } from "lucide-react"
import { Button } from "@/components/ui/button"
import RevealOnScroll from "@/components/reveal-on-scroll"
import ScrollIndicator from "@/components/scroll-indicator"

export default function MediaPage() {
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
              <h1 className="font-heading text-6xl md:text-8xl tracking-wider mb-6 glitch" data-text="MEDIA PRODUCTION">
                MEDIA <span className="text-primary">PRODUCTION</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl mb-8">
                Specializing in Telugu independent films, web series, and film promotions that showcase authentic
                stories from the Indian diaspora.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="relative group">
                <div className="absolute -top-6 -left-6 w-full h-full bg-primary/20 z-0"></div>
                <div className="brutalist-border relative z-10 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Featured Project"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="brutalist-button text-lg px-8 py-6">
                    <Link href="/media/diaspora-dreams">WATCH TRAILER</Link>
                  </Button>
                  <Button asChild variant="outline" className="brutalist-button bg-background text-lg px-8 py-6">
                    <Link href="/media/diaspora-dreams">LEARN MORE</Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              OUR <span className="text-primary">SERVICES</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Film className="h-12 w-12" />,
                title: "FILM PRODUCTION",
                description:
                  "From concept to screen, we produce authentic independent films that showcase Indian-Australian stories and talent.",
              },
              {
                icon: <Tv className="h-12 w-12" />,
                title: "WEB SERIES",
                description:
                  "Digital content that explores the nuanced experiences of the Indian diaspora in contemporary Australia.",
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "FILM PROMOTION",
                description:
                  "Strategic marketing and distribution services to help Indian films reach Australian audiences.",
              },
            ].map((service, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card p-8 h-full flex flex-col">
                  <div className="mb-6 text-primary">{service.icon}</div>
                  <h3 className="font-heading text-3xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  <Button asChild variant="link" className="p-0 justify-start font-bold group">
                    <Link
                      href={`/media/${service.title.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center gap-2"
                    >
                      LEARN MORE
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              OUR <span className="text-primary">PORTFOLIO</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card group hover-scale overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project ${i + 1}`}
                      alt={`Project ${i + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl mb-2">
                      {
                        [
                          "Echoes of Home",
                          "Melbourne Masala",
                          "The Bridge",
                          "Crossing Cultures",
                          "Desi Down Under",
                          "Voices Unheard",
                        ][i]
                      }
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {
                        [
                          "A poignant documentary about first-generation immigrants",
                          "Comedy series exploring cultural fusion through food",
                          "Drama about cross-cultural relationships in modern Australia",
                          "Documentary series highlighting cultural exchange programs",
                          "Reality show following Indian students in Melbourne",
                          "Anthology series featuring untold stories from the diaspora",
                        ][i]
                      }
                    </p>
                    <Button asChild variant="link" className="p-0 justify-start font-bold group">
                      <Link href={`/media/project-${i + 1}`} className="flex items-center gap-2">
                        VIEW PROJECT
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
              <Link href="/media/portfolio">VIEW FULL PORTFOLIO</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              CLIENT <span className="text-primary">TESTIMONIALS</span>
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
                      <p className="text-muted-foreground">{["Film Director", "Production Company Owner"][i - 1]}</p>
                    </div>
                  </div>
                  <p className="text-lg mb-4">
                    {
                      [
                        "Melbourne MAMA provided me with the platform and connections I needed to bring my film vision to life. Their support for emerging filmmakers is unmatched in the Australian landscape.",
                        "Working with Melbourne MAMA on our web series was a game-changer. Their understanding of both Indian and Australian audiences helped us create content that resonated across cultures.",
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

      {/* Process */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              OUR <span className="text-primary">PROCESS</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "CONCEPT",
                description:
                  "We work closely with you to develop your idea, focusing on authentic storytelling and cultural nuance.",
              },
              {
                number: "02",
                title: "PRE-PRODUCTION",
                description:
                  "Our team handles scripting, casting, location scouting, and all planning aspects to prepare for filming.",
              },
              {
                number: "03",
                title: "PRODUCTION",
                description:
                  "Professional filming with our experienced crew, specialized in capturing the essence of cross-cultural stories.",
              },
              {
                number: "04",
                title: "POST & DISTRIBUTION",
                description:
                  "Expert editing, sound design, and strategic distribution to reach your target audience effectively.",
              },
            ].map((step, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card p-6 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-8xl font-heading text-primary/10">{step.number}</div>
                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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
              BRING YOUR <span className="text-outline-white">STORY</span> TO LIFE
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="text-xl max-w-2xl mx-auto mb-12">
              Ready to share your unique perspective with the world? Let's collaborate to create compelling content that
              bridges cultures.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <Button asChild className="brutalist-button bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Link href="/contact">START YOUR PROJECT</Link>
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
