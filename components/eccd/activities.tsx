import { Sun, BookOpen, Palette, Cookie, TreePine, BookMarked, Music, Moon } from "lucide-react"

const activities = [
  {
    time: "8:00 AM",
    title: "Morning Welcome",
    description: "Greeting time with songs and warm welcomes",
    icon: Sun,
    color: "bg-sunshine",
    textColor: "text-foreground",
  },
  {
    time: "9:00 AM",
    title: "Learning Activities",
    description: "Age-appropriate educational activities",
    icon: BookOpen,
    color: "bg-sky",
    textColor: "text-white",
  },
  {
    time: "10:00 AM",
    title: "Creative Play",
    description: "Arts, crafts, and imaginative play",
    icon: Palette,
    color: "bg-coral",
    textColor: "text-white",
  },
  {
    time: "10:30 AM",
    title: "Snack Time",
    description: "Healthy snacks and social time",
    icon: Cookie,
    color: "bg-rose",
    textColor: "text-white",
  },
  {
    time: "11:00 AM",
    title: "Outdoor Activities",
    description: "Playground time and physical development",
    icon: TreePine,
    color: "bg-mint",
    textColor: "text-white",
  },
  {
    time: "12:00 PM",
    title: "Storytelling",
    description: "Interactive stories and reading time",
    icon: BookMarked,
    color: "bg-sky",
    textColor: "text-white",
  },
  {
    time: "1:00 PM",
    title: "Music and Dance",
    description: "Songs, movement, and rhythm activities",
    icon: Music,
    color: "bg-coral",
    textColor: "text-white",
  },
  {
    time: "2:00 PM",
    title: "Nap Time",
    description: "Quiet rest time for rejuvenation",
    icon: Moon,
    color: "bg-rose/60",
    textColor: "text-white",
  },
]

export function Activities() {
  return (
    <section id="activities" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-mint/20 text-mint px-4 py-1 rounded-full text-sm font-medium mb-4">
            Daily Schedule
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            A Day at Marpa's Montessori
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Every day is filled with fun, learning, and growth. Here&apos;s what a typical day looks like at our center.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border md:-translate-x-1/2 rounded-full" />
            
            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {activities.map((activity, index) => (
                <div 
                  key={activity.title}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full ${activity.color} flex items-center justify-center shadow-lg`}>
                      <activity.icon className={`w-4 h-4 ${activity.textColor}`} />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}>
                    <div className="bg-background rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow">
                      <span className={`inline-block ${activity.color} ${activity.textColor} text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                        {activity.time}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-1">{activity.title}</h3>
                      <p className="text-muted-foreground text-sm">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
