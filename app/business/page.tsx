"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Network, LineChart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import RevealOnScroll from "@/components/reveal-on-scroll"
import ScrollIndicator from "@/components/scroll-indicator"

export default function BusinessPage() {
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
              <h1 className="font-heading text-6xl md:text-8xl tracking-wider mb-6 glitch" data-text="BUSINESS HUB">
                BUSINESS <span className="text-primary">HUB</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl mb-8">
                Supporting young Indian entrepreneurs and facilitating access to networks and investors in the
                Australian business landscape.
              </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase className="h-12 w-12" />,
                title: "STARTUP INCUBATION",
                description:
                  "Comprehensive support for early-stage Indian-Australian businesses, from ideation to market entry.",
              },
              {
                icon: <Network className="h-12 w-12" />,
                title: "NETWORKING",
                description:
                  "Connecting entrepreneurs with industry leaders, investors, and potential partners in Australia.",
              },
              {
                icon: <LineChart className="h-12 w-12" />,
                title: "BUSINESS CONSULTING",
                description:
                  "Strategic advice on navigating the Australian market, regulatory compliance, and growth strategies.",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "MENTORSHIP",
                description:
                  "Guidance from experienced entrepreneurs who understand both Indian and Australian business cultures.",
              },
            ].map((service, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card p-8 h-full flex flex-col">
                  <div className="mb-6 text-primary">{service.icon}</div>
                  <h3 className="font-heading text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  <Button asChild variant="link" className="p-0 justify-start font-bold group">
                    <Link
                      href={`/business/${service.title.toLowerCase().replace(" ", "-")}`}
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

      {/* Success Stories */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              SUCCESS <span className="text-primary">STORIES</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <RevealOnScroll>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-primary/20 z-0"></div>
                <div className="brutalist-border relative z-10">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Success Story"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div>
                <h3 className="font-heading text-4xl mb-4">
                  SPICE ROUTE <span className="text-primary">VENTURES</span>
                </h3>
                <p className="text-xl mb-6 text-muted-foreground">
                  From a small home kitchen to a thriving food tech startup with national distribution.
                </p>
                <p className="mb-6">
                  When Anita Sharma arrived in Melbourne as an international student, she brought her family's secret
                  spice blends with her. What started as a hobby sharing authentic Indian flavors with friends quickly
                  revealed a gap in the Australian market.
                </p>
                <p className="mb-6">
                  Through Melbourne MAMA's business incubation program, Anita transformed her passion into Spice Route
                  Ventures, a food tech company that now supplies premium Indian spice blends to over 200 restaurants
                  and 50 retail outlets across Australia.
                </p>
                <Button asChild className="brutalist-button text-lg px-8 py-6">
                  <Link href="/business/success-stories/spice-route">READ FULL STORY</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card group hover-scale overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Success ${i}`}
                      alt={`Success Story ${i}`}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl mb-2">
                      {["TechBridge Solutions", "Desi Designs", "EcoSari Textiles"][i - 1]}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {
                        [
                          "IT consulting firm connecting Indian tech talent with Australian businesses",
                          "Fashion startup blending traditional Indian aesthetics with modern Australian style",
                          "Sustainable textile company bringing eco-friendly Indian fabrics to Australian markets",
                        ][i - 1]
                      }
                    </p>
                    <Button asChild variant="link" className="p-0 justify-start font-bold group">
                      <Link href={`/business/success-stories/story-${i}`} className="flex items-center gap-2">
                        READ STORY
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
                        [
                          "Entrepreneur Networking Mixer",
                          "Startup Pitch Competition",
                          "Cross-Cultural Business Workshop",
                        ][i - 1]
                      }
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {
                        [
                          "Connect with fellow entrepreneurs and investors at our quarterly mixer.",
                          "Showcase your business idea to a panel of investors and industry experts.",
                          "Learn strategies for navigating business across Indian and Australian cultures.",
                        ][i - 1]
                      }
                    </p>
                    <Button asChild variant="link" className="p-0 justify-start font-bold group">
                      <Link href={`/events/business-event-${i}`} className="flex items-center gap-2">
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

      {/* Resources */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              BUSINESS <span className="text-primary">RESOURCES</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="brutalist-card p-6 flex gap-6 items-start">
                  <div className="text-primary text-4xl font-heading">{i < 10 ? `0${i}` : i}</div>
                  <div>
                    <h3 className="font-heading text-2xl mb-2">
                      {
                        [
                          "Guide to Australian Business Registration",
                          "Funding Options for Immigrant Entrepreneurs",
                          "Cultural Intelligence in Business",
                          "Marketing to Australian Consumers",
                        ][i - 1]
                      }
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {
                        [
                          "A comprehensive guide to navigating the Australian business registration process for Indian entrepreneurs.",
                          "Explore grants, investors, and alternative funding sources available to immigrant business owners.",
                          "Strategies for bridging cultural differences and leveraging diversity as a business advantage.",
                          "Insights into Australian consumer behavior and effective marketing approaches for Indian businesses.",
                        ][i - 1]
                      }
                    </p>
                    <Button asChild variant="link" className="p-0 justify-start font-bold group">
                      <Link href={`/business/resources/resource-${i}`} className="flex items-center gap-2">
                        DOWNLOAD RESOURCE
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

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              ENTREPRENEUR <span className="text-primary">TESTIMONIALS</span>
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
                      <h3 className="font-heading text-xl">{["Raj Patel", "Meera Krishnan"][i - 1]}</h3>
                      <p className="text-muted-foreground">{["TechBridge Solutions", "EcoSari Textiles"][i - 1]}</p>
                    </div>
                  </div>
                  <p className="text-lg mb-4">
                    {
                      [
                        "As a young entrepreneur new to Australia, Melbourne MAMA's business hub connected me with mentors and investors who understood my vision. They've been instrumental in helping me establish my startup in Melbourne.",
                        "The cross-cultural business insights I gained through Melbourne MAMA's programs were invaluable. They helped me navigate both markets effectively and build a sustainable business model that honors both my Indian heritage and Australian context.",
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
              GROW YOUR <span className="text-outline-white">BUSINESS</span> WITH US
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="text-xl max-w-2xl mx-auto mb-12">
              Ready to take your business idea to the next level? Join our community of successful Indo-Australian
              entrepreneurs.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <Button asChild className="brutalist-button bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Link href="/contact">SCHEDULE A CONSULTATION</Link>
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
