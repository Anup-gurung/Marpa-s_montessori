import { Shield, Blocks, Home, TreePine, GraduationCap, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Safe Classrooms",
    description: "Child-proofed spaces with safety measures and constant supervision",
    color: "bg-sky",
  },
  {
    icon: Blocks,
    title: "Learning Materials",
    description: "Age-appropriate educational toys and learning resources",
    color: "bg-coral",
  },
  {
    icon: Home,
    title: "Indoor Play Areas",
    description: "Spacious indoor areas for creative play and group activities",
    color: "bg-mint",
  },
  {
    icon: TreePine,
    title: "Outdoor Playground",
    description: "Safe outdoor space with play equipment and nature exploration",
    color: "bg-sunshine",
  },
  {
    icon: GraduationCap,
    title: "Qualified Teachers",
    description: "Trained and caring educators dedicated to child development",
    color: "bg-rose",
  },
]

const highlights = [
  "Clean and sanitized facilities",
  "Age-appropriate furniture",
  "Natural lighting",
  "Ventilated classrooms",
  "Secure entry systems",
  "First aid trained staff",
]

export function Environment() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-sunshine/30 text-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Facilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            A Safe & Nurturing Environment
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Our center is designed to provide a safe, comfortable, and stimulating environment where children can learn, play, and grow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                index === 4 ? "lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Parents Trust Us
              </h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                We take pride in maintaining the highest standards of safety, cleanliness, and care. Every detail of our facility is designed with your child&apos;s well-being in mind.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-mint flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-sky/20 rounded-3xl h-32 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
                <div className="bg-coral/20 rounded-3xl h-40 flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="bg-mint/20 rounded-3xl h-40 flex items-center justify-center">
                  <span className="text-4xl">🎪</span>
                </div>
                <div className="bg-sunshine/30 rounded-3xl h-32 flex items-center justify-center">
                  <span className="text-4xl">🌳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
