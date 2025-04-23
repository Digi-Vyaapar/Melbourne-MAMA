"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import RevealOnScroll from "@/components/reveal-on-scroll"
import ScrollIndicator from "@/components/scroll-indicator"

export default function EventsPage() {
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
              <h1 className="font-heading text-6xl md:text-8xl tracking-wider mb-6 glitch" data-text="EVENTS">
                EV<span className="text-primary">ENTS</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl mb-8">
                Join us for a variety of events celebrating Indian culture, fostering business connections, and building
                community in Australia.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div className="relative group">
                <div className="absolute -top-6 -left-6 w-full h-full bg-primary/20 z-0"></div>
                <div className="brutalist-border relative z-10 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Featured Event"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-6 py-2 font-bold text-lg">
                    JUN 15, 2025
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div>
                <h2 className="font-heading text-5xl md:text-7xl mb-6">
                  FEATURED <span className="text-primary">EVENT</span>
                </h2>
                <h3 className="text-3xl font-heading mb-4">MELBOURNE INDIAN FILM FESTIVAL</h3>
                <p className="text-xl mb-6 text-muted-foreground">
                  A week-long celebration of Indian cinema featuring independent films, director Q&As, and industry
                  networking.
                </p>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>June 15-22, 2025</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>ACMI, Federation Square</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>20+ films from across India</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Special guests and panel discussions</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="brutalist-button text-lg px-8 py-6">
                    <Link href="/events/film-festival">GET TICKETS</Link>
                  </Button>
                  <Button asChild variant="outline" className="brutalist-button bg-background text-lg px-8 py-6">
                    <Link href="/events/film-festival">EVENT DETAILS</Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              EVENT <span className="text-primary">CATEGORIES</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CULTURAL EVENTS",
                description: "Celebrations, festivals, and performances showcasing Indian cultural traditions.",
                image: "/placeholder.svg?height=300&width=500&text=Cultural",
              },
              {
                title: "BUSINESS EVENTS",
                description: "Networking mixers, workshops, and conferences for entrepreneurs and professionals.",
                image: "/placeholder.svg?height=300&width=500&text=Business",
              },
              {
                title: "COMMUNITY EVENTS",
                description: "Social gatherings, support groups, and activities building connections.",
                image: "/placeholder.svg?height=300&width=500&text=Community",
              },
            ].map((category, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card group hover-scale overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Button asChild variant="link" className="p-0 justify-start font-bold group">
                      <Link
                        href={`/events/category/${category.title.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center gap-2"
                      >
                        VIEW EVENTS
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <RevealOnScroll>
              <h2 className="font-heading text-5xl md:text-7xl mb-6 md:mb-0">
                UPCOMING <span className="text-primary">EVENTS</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  FILTER
                </Button>
                <Button variant="outline">
                  <Calendar className="h-4 w-4" />
                  <span className="sr-only">Calendar View</span>
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card group hover-scale overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Event ${i + 1}`}
                      alt={`Event ${i + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 font-bold">
                      {["JUN 15", "JUL 22", "AUG 10", "SEP 05", "OCT 18", "NOV 30"][i]}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl mb-2">
                      {
                        [
                          "Melbourne Indian Film Festival",
                          "Entrepreneur Networking Mixer",
                          "Cultural Showcase & Market",
                          "Bollywood Night Fundraiser",
                          "Business Pitch Competition",
                          "Diwali Celebration",
                        ][i]
                      }
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {
                        [
                          "A week-long celebration of Indian cinema featuring independent films.",
                          "Connect with fellow entrepreneurs and investors at our quarterly mixer.",
                          "Experience the vibrant culture of India through performances, food, and crafts.",
                          "A night of music, dance, and community support at Federation Square.",
                          "Showcase your business idea to a panel of investors and industry experts.",
                          "Join us for Melbourne's biggest Diwali celebration with lights, food, and performances.",
                        ][i]
                      }
                    </p>
                    <Button asChild variant="link" className="p-0 justify-start font-bold group">
                      <Link href={`/events/event-${i + 1}`} className="flex items-center gap-2">
                        EVENT DETAILS
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
              <Link href="/events/archive">VIEW PAST EVENTS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              EVENT <span className="text-primary">CALENDAR</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="brutalist-card p-8">
              <div className="text-center p-12 text-muted-foreground">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="text-xl">Interactive Event Calendar Would Be Displayed Here</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll>
              <div>
                <h2 className="font-heading text-5xl md:text-7xl mb-6">
                  HOST AN <span className="text-primary">EVENT</span>
                </h2>
                <p className="text-xl mb-6">
                  Looking to organize an event with Melbourne MAMA? We offer venue partnerships, promotional support,
                  and community connections.
                </p>
                <p className="mb-8">
                  Whether you're planning a cultural celebration, business workshop, or community gathering, our team
                  can help bring your vision to life and connect you with our diverse network.
                </p>
                <Button asChild className="brutalist-button text-lg px-8 py-6">
                  <Link href="/contact">CONTACT US</Link>
                </Button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-primary/20 z-0"></div>
                <div className="brutalist-border relative z-10">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Host an Event"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-6">
              NEVER MISS AN <span className="text-outline-white">EVENT</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="text-xl max-w-2xl mx-auto mb-12">
              Subscribe to our newsletter to stay updated on upcoming events, exclusive invitations, and community news.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button type="submit" className="brutalist-button bg-white text-primary hover:bg-white/90">
                SUBSCRIBE
              </Button>
            </form>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
