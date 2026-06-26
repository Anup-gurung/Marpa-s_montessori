import {
  DoorOpen,
  Users,
  BookOpen,
  GraduationCap,
  Heart,
  Trees,
  Trophy,
  Utensils,
  Volume2,
  Hand,
  Smile,
  Music,
  Milk,
  Moon,
  Home,
} from "lucide-react"

const activities = [
  {
    time: "8:30 AM",
    title: "Arrival & Free Play",
    description: "Children arrive, settle in, and enjoy free play with friends.",
    icon: DoorOpen,
    color: "bg-sunshine",
    textColor: "text-foreground",
  },
  {
    time: "9:00 AM",
    title: "Assembly & Circle Time",
    description: "Morning greetings, songs, attendance, and daily discussions.",
    icon: Users,
    color: "bg-sky",
    textColor: "text-white",
  },
  {
    time: "9:30 AM",
    title: "Story Time",
    description: "Interactive storytelling to develop listening and imagination.",
    icon: BookOpen,
    color: "bg-coral",
    textColor: "text-white",
  },
  {
    time: "9:45 AM",
    title: "Learning Activities",
    description: "Fun, age-appropriate educational activities and hands-on learning.",
    icon: GraduationCap,
    color: "bg-rose",
    textColor: "text-white",
  },
  {
    time: "10:50 AM",
    title: "Yoga",
    description: "Mindfulness, stretching, and simple yoga exercises.",
    icon: Heart,
    color: "bg-mint",
    textColor: "text-white",
  },
  {
    time: "11:20 AM",
    title: "Outdoor Play",
    description: "Fresh air, playground fun, and physical exploration.",
    icon: Trees,
    color: "bg-sky",
    textColor: "text-white",
  },
  {
    time: "11:50 AM",
    title: "Structured Sports",
    description: "Team games and sports to build coordination and confidence.",
    icon: Trophy,
    color: "bg-coral",
    textColor: "text-white",
  },
  {
    time: "12:20 PM",
    title: "Lunch Break",
    description: "Healthy lunch followed by relaxation and social interaction.",
    icon: Utensils,
    color: "bg-sunshine",
    textColor: "text-foreground",
  },
  {
    time: "1:30 PM",
    title: "Sound Class",
    description: "Developing phonics, pronunciation, and early language skills.",
    icon: Volume2,
    color: "bg-rose",
    textColor: "text-white",
  },
  {
    time: "2:00 PM",
    title: "Sensory Class",
    description: "Hands-on sensory activities that stimulate creativity and learning.",
    icon: Hand,
    color: "bg-mint",
    textColor: "text-white",
  },
  {
    time: "2:30 PM",
    title: "SEL (Social Emotional Learning)",
    description: "Building emotional awareness, empathy, and social skills.",
    icon: Smile,
    color: "bg-sky",
    textColor: "text-white",
  },
  {
    time: "3:00 PM",
    title: "Dance",
    description: "Music, movement, and dance for fun and physical development.",
    icon: Music,
    color: "bg-coral",
    textColor: "text-white",
  },
  {
    time: "3:30 PM",
    title: "Milk Time",
    description: "A nutritious milk break to recharge for the afternoon.",
    icon: Milk,
    color: "bg-rose",
    textColor: "text-white",
  },
  {
    time: "4:00 PM",
    title: "Resting & Fun Time",
    description: "Quiet relaxation followed by light indoor activities.",
    icon: Moon,
    color: "bg-mint",
    textColor: "text-white",
  },
  {
    time: "4:30 PM",
    title: "Pick-Up Time",
    description: "Children prepare to head home with their parents or guardians.",
    icon: Home,
    color: "bg-sunshine",
    textColor: "text-foreground",
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

       <div className="text-center mb-12 md:mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance pt-10">
            Nap & Rest Policy
          </h2>
          <p className="text-muted-foreground text-lg max-w-6xl mx-auto text-pretty">
            At Marpa Montessori, we recognize that every child has unique rest and sleep needs. Rather than following a fixed nap schedule, we provide children with the opportunity to rest or sleep whenever they feel tired.

We do not force or impose nap time on children. Instead, we create a calm, safe, and comfortable environment where they can choose to rest according to their individual needs. This child-centred approach respects each child’s natural rhythm while promoting their overall well-being, comfort, and healthy development.
          </p>
        </div>
    </section>
  )
}
