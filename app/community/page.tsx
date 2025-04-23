"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Calendar, Heart, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import RevealOnScroll from "@/components/reveal-on-scroll"
import ScrollIndicator from "@/components/scroll-indicator"
import MarqueeText from "@/components/marquee-text"

export default function CommunityPage() {
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
              <h1 className="font-heading text-6xl md:text-8xl tracking-wider mb-6 glitch" data-text="COMMUNITY">
                COMM<span className="text-primary">UNITY</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl mb-8">
                Building spaces for networking, cultural exchange, and support for international students and the
                broader Indian diaspora.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              OUR <span className="text-primary">INITIATIVES</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-12 w-12" />,
                title: "NETWORKING EVENTS",
                description: "Regular meetups connecting Indian-Australians across industries and interests.",
              },
              {
                icon: <Calendar className="h-12 w-12" />,
                title: "CULTURAL CELEBRATIONS",
                description: "Festivals and events celebrating Indian traditions and heritage in Australia.",
              },
              {
                icon: <Heart className="h-12 w-12" />,
                title: "SUPPORT PROGRAMS",
                description: "Resources and mentorship for international students and new arrivals.",
              },
              {
                icon: <Globe className="h-12 w-12" />,
                title: "CROSS-CULTURAL EXCHANGE",
                description: "Initiatives promoting understanding between Indian and Australian cultures.",
              },
            ].map((initiative, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card p-8 h-full flex flex-col">
                  <div className="mb-6 text-primary">{initiative.icon}</div>
                  <h3 className="font-heading text-2xl mb-4">{initiative.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{initiative.description}</p>
                  <Button asChild variant="link" className="p-0 justify-start font-bold group">
                    <Link
                      href={`/community/${initiative.title.toLowerCase().replace(" ", "-")}`}
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

      {/* Upcoming Events */}
      <section className="py-20 md:py-32 bg-muted/30">
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
                        ["Bollywood Night Fundraiser", "Cultural Showcase & Market", "New Students Welcome Mixer"][
                          i - 1
                        ]
                      }
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {
                        [
                          "A night of music, dance, and community support at Federation Square.",
                          "Experience the vibrant culture of India through performances, food, and crafts.",
                          "Networking event for new international students to connect with the community.",
                        ][i - 1]
                      }
                    </p>
                    <Button asChild variant="link" className="p-0 justify-start font-bold group">
                      <Link href={`/events/community-event-${i}`} className="flex items-center gap-2">
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

      {/* Community Spotlight */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              COMMUNITY <span className="text-primary">SPOTLIGHT</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <RevealOnScroll>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-primary/20 z-0"></div>
                <div className="brutalist-border relative z-10">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Community Spotlight"
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
                  STUDENT <span className="text-primary">SUPPORT NETWORK</span>
                </h3>
                <p className="text-xl mb-6 text-muted-foreground">
                  Helping international students navigate life in Australia through mentorship and community.
                </p>
                <p className="mb-6">
                  Our Student Support Network pairs new international students with experienced mentors who help them
                  navigate everything from housing and employment to cultural adjustment and academic success.
                </p>
                <p className="mb-6">
                  Through regular meetups, workshops, and one-on-one guidance, we've supported over 500 students in
                  their transition to Australian life, creating lasting connections and a sense of belonging.
                </p>
                <Button asChild className="brutalist-button text-lg px-8 py-6">
                  <Link href="/community/student-support">LEARN MORE</Link>
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
                      src={`/placeholder.svg?height=300&width=500&text=Initiative ${i}`}
                      alt={`Initiative ${i}`}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-2xl mb-2">
                      {
                        ["Cultural Heritage Program", "Language Exchange Circles", "Community Volunteer Initiative"][
                          i - 1
                        ]
                      }
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {
                        [
                          "Workshops and activities preserving and sharing Indian cultural traditions with the next generation.",
                          "Weekly gatherings where participants can practice Indian languages and English in a supportive environment.",
                          "Coordinated volunteer opportunities connecting our community with broader Australian society.",
                        ][i - 1]
                      }
                    </p>
                    <Button asChild variant="link" className="p-0 justify-start font-bold group">
                      <Link href={`/community/initiative-${i}`} className="flex items-center gap-2">
                        EXPLORE INITIATIVE
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

      {/* Community Stories */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              COMMUNITY <span className="text-primary">STORIES</span>
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
                      <h3 className="font-heading text-xl">{["Anika Patel", "Vikram Singh"][i - 1]}</h3>
                      <p className="text-muted-foreground">{["International Student", "Community Member"][i - 1]}</p>
                    </div>
                  </div>
                  <p className="text-lg mb-4">
                    {
                      [
                        "When I arrived in Melbourne for my studies, I knew no one and felt completely lost. Melbourne MAMA's student support network connected me with a mentor who helped me find housing, navigate the university system, and most importantly, find a sense of belonging. Three years later, I'm now a mentor helping new students adjust to life in Australia.",
                        "After 15 years in Australia, I was worried my children were losing touch with their Indian heritage. Melbourne MAMA's cultural programs have been instrumental in helping them connect with their roots while still embracing their Australian identity. The community celebrations and language classes have become a highlight of our family's calendar.",
                      ][i - 1]
                    }
                  </p>
                  <Button asChild variant="link" className="p-0 justify-start font-bold group">
                    <Link href={`/community/stories/story-${i}`} className="flex items-center gap-2">
                      READ FULL STORY
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 text-center">
              GET <span className="text-primary">INVOLVED</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "BECOME A MEMBER",
                description:
                  "Join our community and gain access to exclusive events, resources, and networking opportunities.",
                link: "/community/membership",
              },
              {
                title: "VOLUNTEER",
                description: "Share your skills and time to help strengthen our community and support our initiatives.",
                link: "/community/volunteer",
              },
              {
                title: "PARTNER WITH US",
                description:
                  "Organizations and businesses can collaborate with us on community projects and initiatives.",
                link: "/community/partnership",
              },
            ].map((option, i) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex flex-col">
                <div className="brutalist-card p-8 h-full flex flex-col">
                  <h3 className="font-heading text-2xl mb-4">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{option.description}</p>
                  <Button asChild className="brutalist-button mt-auto">
                    <Link href={option.link}>{option.title}</Link>
                  </Button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-4 bg-foreground text-background overflow-hidden">
        <MarqueeText
          text="JOIN OUR COMMUNITY • CELEBRATE CULTURE • BUILD CONNECTIONS • SHARE STORIES • SUPPORT EACH OTHER • CREATE BELONGING •"
          className="text-xl md:text-2xl font-heading tracking-wider py-2"
        />
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
              Be part of a vibrant network of Indian-Australians creating connections, celebrating culture, and
              supporting each other.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <Button asChild className="brutalist-button bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Link href="/contact">GET INVOLVED TODAY</Link>
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
