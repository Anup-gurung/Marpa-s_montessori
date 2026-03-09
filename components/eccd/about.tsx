import { Target, Eye, Heart, Lightbulb, Shield, Smile, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const coreValues = [
  { icon: Lightbulb, label: "Creativity", color: "bg-sunshine text-foreground" },
  { icon: Shield, label: "Safety", color: "bg-sky text-white" },
  { icon: Users, label: "Respect", color: "bg-mint text-white" },
  { icon: Smile, label: "Joyful Learning", color: "bg-coral text-white" },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-sky/20 text-sky px-4 py-1 rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            What is ECCD?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            Early Childhood Care and Development (ECCD) refers to the holistic approach to policies, programs, and services for children from conception to age six. At Marpa's Montessori, we believe that every child deserves a strong foundation for lifelong learning and well-being.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Early Childhood Development Matters
            </h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              The first six years of life are critical for brain development. During this time, children develop the cognitive, social, emotional, and physical skills that form the foundation for future success in school and life.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              Our learning philosophy centers on play-based education, where children learn through exploration, discovery, and hands-on experiences. We create a safe and nurturing environment that encourages curiosity and celebrates each child&apos;s unique potential.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Play-Based Learning", "Safe Environment", "Qualified Teachers", "Parent Partnership"].map((item) => (
                <span key={item} className="bg-sunshine/30 text-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky/20 rounded-3xl p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-sky mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Loving Care</p>
                </div>
              </div>
              <div className="bg-coral/20 rounded-3xl p-6 aspect-square flex items-center justify-center mt-8">
                <div className="text-center">
                  <Lightbulb className="w-12 h-12 text-coral mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Creative Learning</p>
                </div>
              </div>
              <div className="bg-mint/20 rounded-3xl p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-12 h-12 text-mint mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Social Skills</p>
                </div>
              </div>
              <div className="bg-sunshine/30 rounded-3xl p-6 aspect-square flex items-center justify-center mt-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-foreground mx-auto mb-2" />
                  <p className="font-semibold text-foreground">Safe Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Mission */}
          <Card className="border-0 shadow-lg rounded-3xl overflow-hidden">
            <div className="h-2 bg-sky" />
            <CardContent className="p-6 md:p-8">
              <div className="w-14 h-14 rounded-2xl bg-sky/20 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-sky" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-pretty">
                Providing a safe and engaging learning environment that supports children&apos;s emotional, social, and intellectual growth through play-based education and individualized care.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-0 shadow-lg rounded-3xl overflow-hidden">
            <div className="h-2 bg-coral" />
            <CardContent className="p-6 md:p-8">
              <div className="w-14 h-14 rounded-2xl bg-coral/20 flex items-center justify-center mb-4">
                <Eye className="w-7 h-7 text-coral" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-pretty">
                To build a strong foundation for every child through quality early childhood education, empowering them to become confident, curious, and compassionate learners.
              </p>
            </CardContent>
          </Card>

          {/* Core Values */}
          <Card className="border-0 shadow-lg rounded-3xl overflow-hidden">
            <div className="h-2 bg-mint" />
            <CardContent className="p-6 md:p-8">
              <div className="w-14 h-14 rounded-2xl bg-mint/20 flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-mint" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((value) => (
                  <div key={value.label} className={`flex items-center gap-2 ${value.color} px-3 py-1.5 rounded-full`}>
                    <value.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{value.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
