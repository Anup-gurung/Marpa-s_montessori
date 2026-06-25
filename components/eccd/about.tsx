import Image from "next/image"
import { Target, Eye, Heart, Lightbulb, Shield, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

import lovingImage from "../../img/WhatsApp Image 2026-06-23 at 17.47.56.jpeg"
import creativeImage from "../../img/WhatsApp Image 2026-06-23 at 17.48.19.jpeg"
import socialImage from "../../img/WhatsApp Image 2026-06-23 at 17.48.31.jpeg"
import safeSpaceImage from "../../img/WhatsApp Image 2026-06-23 at 17.52.06.jpeg"

const imageTiles = [
  {
    src: lovingImage,
    alt: "Marpa's Montessori loving community photo",
    label: "Loving",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: creativeImage,
    alt: "Children performing creatively on stage",
    label: "Creative",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: socialImage,
    alt: "Children socializing outdoors",
    label: "Social",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: safeSpaceImage,
    alt: "Children enjoying a safe classroom environment",
    label: "Safe Space",
    className: "md:col-span-1 md:row-span-1",
  },
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
          
          {/* Mosaic: large-left, three stacked-right */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Large left tile */}
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/10 h-64 md:h-auto md:row-span-2">
                <Image src={imageTiles[0].src} alt={imageTiles[0].alt} fill className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md border border-white/20">
                    <span className="text-sm md:text-base font-semibold tracking-wide">{imageTiles[0].label}</span>
                  </div>
                </div>
              </div>

              {/* Right column: three stacked tiles */}
              <div className="flex flex-col gap-4">
                {[imageTiles[1], imageTiles[2], imageTiles[3]].map((tile) => (
                  <div key={tile.label} className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/10 flex-1 min-h-[120px]">
                    <Image src={tile.src} alt={tile.alt} fill className="object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4">
                      <div className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-md border border-white/20">
                        <span className="text-sm md:text-base font-semibold tracking-wide">{tile.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
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
                {[
                  { label: "Loving", color: "bg-coral text-white" },
                  { label: "Creative", color: "bg-sunshine text-foreground" },
                  { label: "Social", color: "bg-mint text-white" },
                  { label: "Safe Space", color: "bg-sky text-white" },
                ].map((value) => (
                  <div key={value.label} className={`px-3 py-1.5 rounded-full text-sm font-medium ${value.color}`}>
                    {value.label}
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
