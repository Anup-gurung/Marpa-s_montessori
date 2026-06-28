import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

import playgroupProgramImage from "../../img/new.jpeg"
import kindergartenProgramImage from "../../img/new2.jpeg"
import afterSchoolProgramImage from "../../img/new3.jpeg"
import seasonalProgramImage from "../../img/new4.jpeg"

const programs = [
  {
    image: playgroupProgramImage,
    title: "Busy Butterflies (Playgroup)",
    description:
      "Our Busy Butterflies programme provides a nurturing and play-based learning environment where young children develop social, emotional, cognitive, and motor skills through hands-on activities, storytelling, music, creative play, and guided exploration.",
    ageRange: "2 years 8 months – 4 years",
    color: "bg-rose",
    bgColor: "bg-rose/10",
  },
  {
    image: kindergartenProgramImage,
    title: "Little Scientists (Kindergarten)",
    description:
      "The Little Scientists programme prepares children for primary school through inquiry-based learning, early literacy, numeracy, science exploration, creativity, and practical life activities that foster independence, confidence, and a lifelong love of learning.",
    ageRange: "4 years – 5 years 6 months",
    color: "bg-sky",
    bgColor: "bg-sky/10",
  },
  {
    image: afterSchoolProgramImage,
    title: "After-School Club",
    description:
      "Designed for children from PP to Class 3, our After-School Club provides homework support, creative enrichment, educational games, reading, and recreational activities in a safe, caring, and engaging environment after school hours.",
    ageRange: "6–10 years (PP – Class 3)",
    color: "bg-coral",
    bgColor: "bg-coral/10",
  },
  {
    image: seasonalProgramImage,
    title: "Seasonal Enrichment Programmes",
    description:
      "Our Summer and Winter Engagement Programmes offer exciting educational experiences through arts, crafts, STEM activities, sports, outdoor exploration, cultural experiences, and team-building activities that keep children actively learning during school holidays.",
    ageRange: "Available during school holidays",
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
                      <span className={`${program.bgColor} ${program.color.replace('bg-', 'text-')} text-xs font-medium px-6 py-1 rounded-full`}>
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
