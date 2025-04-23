import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
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
  )
}
