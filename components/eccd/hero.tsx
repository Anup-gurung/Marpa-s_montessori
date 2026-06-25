import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

import heroBackground from "../../img/WhatsApp Image 2026-06-23 at 17.52.06.jpeg"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt="Children celebrating at Marpa's Montessori"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/50" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-sunshine/25 animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute top-40 right-20 w-12 h-12 md:w-20 md:h-20 rounded-full bg-rose/20 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-10 h-10 md:w-16 md:h-16 rounded-full bg-mint/25 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 right-1/3 w-14 h-14 md:w-20 md:h-20 rounded-full bg-sky/20 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 left-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-coral/20 animate-bounce" style={{ animationDuration: "5s", animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-4 h-4 text-sunshine" />
              <span className="text-sm font-medium">Welcome to Marpa's Montessori</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              Nurturing Young Minds for a{" "}
              <span className="text-sunshine">Bright Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              We provide a safe, loving, and stimulating environment where children discover the joy of learning through play, creativity, and exploration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 text-lg shadow-lg shadow-black/20"
              >
                <Link href="#enroll">Enroll Now</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg border-2 border-white/70 text-white hover:bg-white hover:text-black bg-white/10 backdrop-blur-sm"
              >
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-sunshine">500+</p>
                <p className="text-white/75 text-sm">Happy Children</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-coral">15+</p>
                <p className="text-white/75 text-sm">Expert Teachers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-mint">10+</p>
                <p className="text-white/75 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Photo Accent Area */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30 aspect-[4/5] max-w-md mx-auto">
              <Image
                src={heroBackground}
                alt="Children celebrating at Marpa's Montessori"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 p-4 text-white">
                <p className="text-sm font-medium">Learning through joy, creativity, and discovery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
