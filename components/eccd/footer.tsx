import Link from "next/link"
import { Star, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#activities", label: "Daily Activities" },
  { href: "#teachers", label: "Our Teachers" },
  { href: "#gallery", label: "Gallery" },
  { href: "#enroll", label: "Enrollment" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-background">
                Marpa's Montessori
              </span>
            </Link>
            <p className="text-background/70 max-w-md mb-6">
              Nurturing young minds for a bright future. We provide quality early childhood care and education in a safe, loving environment.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-sky transition-colors flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-sky transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-background/70">
              <p>123 Learning Lane</p>
              <p>Happy Valley, ED 12345</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@littlestars-eccd.com</p>
              <p className="text-sm mt-4">
                <span className="text-background font-medium">Hours:</span><br />
                Mon - Fri: 8:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © 2026 Marpa's Montessori Center. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
