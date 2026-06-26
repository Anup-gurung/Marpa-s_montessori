import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

import infantProgramImage from "../../img/new.jpeg"
import preschoolProgramImage from "../../img/new2.jpeg"
import playBasedProgramImage from "../../img/new3.jpeg"
import socialProgramImage from "../../img/new4.jpeg"

const programs = [
  {
    image: infantProgramImage,
    title: "Infant Care",
    description: "Focus on nurturing care, sensory exploration, and early bonding. Our infant program provides a warm, secure environment for babies aged 0-18 months.",
    ageRange: "0-18 months",
    color: "bg-rose",
    bgColor: "bg-rose/10",
  },
  {
    image: preschoolProgramImage,
    title: "Preschool Education",
    description: "Early literacy, numbers, storytelling, and creative learning. Children develop foundational academic skills through engaging, age-appropriate activities.",
    ageRange: "3-5 years",
    color: "bg-sky",
    bgColor: "bg-sky/10",
  },
  {
    image: playBasedProgramImage,
    title: "Play-Based Learning",
    description: "Learning through play, exploration, and imagination. Children discover the world around them through hands-on activities and creative expression.",
    ageRange: "2-4 years",
    color: "bg-coral",
    bgColor: "bg-coral/10",
  },
  {
    image: socialProgramImage,
    title: "Social & Emotional Development",
    description: "Helping children build confidence, teamwork, and communication skills. We foster emotional intelligence and positive relationships with peers.",
    ageRange: "2-6 years",
    color: "bg-mint",
    bgColor: "bg-mint/10",
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-coral/20 text-coral px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Programs Tailored for Every Stage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We offer a variety of programs designed to meet the developmental needs of children at every age, ensuring they receive the best care and education.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program) => (
            <Card 
              key={program.title} 
              className="border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  {/* Image Section */}
                  <div className={`${program.bgColor} p-6 sm:p-8 flex items-center justify-center sm:w-1/3`}>
                    <div className="relative w-20 h-20 rounded-3xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 sm:p-8 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                      <span className={`${program.bgColor} ${program.color.replace('bg-', 'text-')} text-xs font-medium px-2 py-1 rounded-full`}>
                        {program.ageRange}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-pretty">{program.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
