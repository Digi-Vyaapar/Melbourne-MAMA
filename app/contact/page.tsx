"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import RevealOnScroll from "@/components/reveal-on-scroll"
import ScrollIndicator from "@/components/scroll-indicator"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "media",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        interest: "media",
        message: "",
      })
    }, 1500)
  }

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
              <h1 className="font-heading text-6xl md:text-8xl tracking-wider mb-6 glitch" data-text="CONTACT US">
                CONTACT <span className="text-primary">US</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl mb-8">
                Have a question, idea, or want to collaborate? We'd love to hear from you!
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <RevealOnScroll>
              <div>
                <h2 className="font-heading text-4xl md:text-5xl mb-8">
                  GET IN <span className="text-primary">TOUCH</span>
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl mb-1">EMAIL US</h3>
                      <p className="text-muted-foreground">info@melbournemama.com.au</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl mb-1">CALL US</h3>
                      <p className="text-muted-foreground">+61 4 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl mb-1">VISIT US</h3>
                      <p className="text-muted-foreground">
                        123 Creative Hub Street
                        <br />
                        Melbourne, VIC 3000
                        <br />
                        Australia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="brutalist-card p-6 bg-muted/30">
                  <h3 className="font-heading text-2xl mb-4">OFFICE HOURS</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="brutalist-card p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-primary mb-4">
                      <Send className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="font-heading text-3xl mb-4">MESSAGE SENT!</h3>
                    <p className="text-lg mb-8">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="brutalist-button text-lg px-8 py-6">
                      SEND ANOTHER MESSAGE
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-heading text-3xl mb-6">SEND US A MESSAGE</h3>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="border-2 border-foreground"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                            className="border-2 border-foreground"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="border-2 border-foreground"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>I'm interested in:</Label>
                        <RadioGroup
                          value={formState.interest}
                          onValueChange={handleRadioChange}
                          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="media" id="media" />
                            <Label htmlFor="media">Media Production</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="business" id="business" />
                            <Label htmlFor="business">Business Hub</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="community" id="community" />
                            <Label htmlFor="community">Community</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, question, or idea..."
                          required
                          className="min-h-[150px] border-2 border-foreground"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="brutalist-button text-lg px-8 py-6 w-full" disabled={isSubmitting}>
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </Button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 text-center">
              FIND <span className="text-primary">US</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="brutalist-border overflow-hidden">
              <div className="aspect-video w-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-lg">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <RevealOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl mb-12 text-center">
              FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How can I get involved with Melbourne MAMA?",
                answer:
                  "There are many ways to get involved! You can attend our events, volunteer, collaborate on projects, or become a member. Contact us to discuss the best fit for your interests and skills.",
              },
              {
                question: "Do you offer internships or work experience?",
                answer:
                  "Yes, we offer internships across our media production, business hub, and community initiatives. These opportunities are open to students and early-career professionals looking to gain experience in cross-cultural contexts.",
              },
              {
                question: "Can you help promote my Indian film in Australia?",
                answer:
                  "Our media team specializes in promoting Indian content to Australian audiences. We offer marketing, distribution, and screening services tailored to your specific film and target audience.",
              },
              {
                question: "I'm an Indian entrepreneur new to Australia. How can you help?",
                answer:
                  "Our Business Hub provides comprehensive support including market entry guidance, networking opportunities, mentorship, and potential investor connections. We understand the unique challenges of navigating a new business landscape.",
              },
              {
                question: "Do I need to be of Indian heritage to participate?",
                answer:
                  "Not at all! While we focus on Indian-Australian connections, we welcome participation from people of all backgrounds who are interested in cross-cultural collaboration and exchange.",
              },
              {
                question: "How can I support Melbourne MAMA's mission?",
                answer:
                  "You can support us through donations, sponsorships, partnerships, volunteering, or simply by attending our events and spreading the word about our initiatives.",
              },
            ].map((faq, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="brutalist-card p-6">
                  <h3 className="font-heading text-xl mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
              LET'S CREATE <span className="text-outline-white">TOGETHER</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="text-xl max-w-2xl mx-auto mb-12">
              Whether you have a project in mind, a question to ask, or just want to connect, we're here to collaborate
              and build bridges between cultures.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="brutalist-button bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <a href="mailto:info@melbournemama.com.au">EMAIL US DIRECTLY</a>
            </Button>
            <Button
              asChild
              className="brutalist-button bg-transparent border-2 border-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <a href="tel:+61412345678">CALL US NOW</a>
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
