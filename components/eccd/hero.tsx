import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-sunshine/40 animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute top-40 right-20 w-12 h-12 md:w-20 md:h-20 rounded-full bg-rose/30 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-10 h-10 md:w-16 md:h-16 rounded-full bg-mint/40 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 right-1/3 w-14 h-14 md:w-20 md:h-20 rounded-full bg-sky/30 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 left-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-coral/30 animate-bounce" style={{ animationDuration: "5s", animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-sunshine/30 text-foreground px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-coral" />
              <span className="text-sm font-medium">Welcome to Marpa's Montessori</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Nurturing Young Minds for a{" "}
              <span className="text-sky">Bright Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              We provide a safe, loving, and stimulating environment where children discover the joy of learning through play, creativity, and exploration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-coral hover:bg-coral/90 text-white rounded-full px-8 text-lg"
              >
                <Link href="#enroll">Enroll Now</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg border-2 border-sky text-sky hover:bg-sky hover:text-white"
              >
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-sky">500+</p>
                <p className="text-muted-foreground text-sm">Happy Children</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-coral">15+</p>
                <p className="text-muted-foreground text-sm">Expert Teachers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-mint">10+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Illustration Area */}
          <div className="relative">
            <div className="relative bg-sky/10 rounded-3xl p-8 md:p-12">
              {/* Main illustration placeholder - represented with colorful shapes */}
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Central circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-sunshine/50 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-sky/60 flex items-center justify-center">
                      <Heart className="w-16 h-16 md:w-24 md:h-24 text-rose fill-rose/50" />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-coral/80 flex items-center justify-center animate-pulse">
                  <span className="text-2xl md:text-3xl text-white font-bold">A</span>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-mint/80 flex items-center justify-center animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <span className="text-2xl md:text-3xl text-white font-bold">B</span>
                </div>
                <div className="absolute bottom-4 left-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-rose/80 flex items-center justify-center animate-pulse" style={{ animationDelay: "1s" }}>
                  <span className="text-2xl md:text-3xl text-white font-bold">1</span>
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-sky/80 flex items-center justify-center animate-pulse" style={{ animationDelay: "1.5s" }}>
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
