import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Learning Lane, Happy Valley, Education District 12345",
    color: "bg-sky",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    color: "bg-coral",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@littlestars-eccd.com",
    color: "bg-mint",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Monday – Friday: 8:00 AM – 4:00 PM",
    color: "bg-sunshine",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-mint/20 text-mint px-4 py-1 rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Have questions? We&apos;d love to hear from you. Reach out to us or visit our center to learn more about Marpa's Montessori.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${info.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map */}
          <Card className="border-0 shadow-xl rounded-3xl overflow-hidden h-[400px] lg:h-auto">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266754809!2d-73.98784492404!3d40.75798833540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1709900000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marpa's Montessori Center Location"
                className="rounded-3xl"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
