import { Card, CardContent } from "@/components/ui/card"

const teachers = [
  {
    name: "Sonam Choden",
    role: "Lead ECCD Teacher",
    bio: "Dedicated to nurturing children through creative learning and emotional support. 8 years of experience in early childhood education.",
    color: "bg-sky",
    initial: "SC",
  },
  {
    name: "Tenzin Wangmo",
    role: "Infant Care Specialist",
    bio: "Passionate about providing loving care and sensory-rich experiences for our youngest learners. Certified in infant CPR and first aid.",
    color: "bg-coral",
    initial: "TW",
  },
  {
    name: "Karma Dema",
    role: "Preschool Teacher",
    bio: "Specializes in early literacy and numeracy through play-based learning. Creates engaging activities that spark curiosity.",
    color: "bg-mint",
    initial: "KD",
  },
  {
    name: "Pema Yangzom",
    role: "Creative Arts Teacher",
    bio: "Brings creativity to life through art, music, and movement. Believes every child is an artist waiting to be discovered.",
    color: "bg-rose",
    initial: "PY",
  },
]

export function Teachers() {
  return (
    <section id="teachers" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-rose/20 text-rose px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Meet Our Caring Teachers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Our dedicated team of qualified educators is committed to providing the best care and education for your children.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <Card 
              key={teacher.name}
              className="border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-0">
                {/* Avatar Section */}
                <div className={`${teacher.color}/20 p-8 flex items-center justify-center`}>
                  <div className={`w-24 h-24 rounded-full ${teacher.color} flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {teacher.initial}
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-1">{teacher.name}</h3>
                  <p className={`text-sm font-medium mb-3`} style={{ color: `var(--${teacher.color.replace('bg-', '')})` }}>
                    {teacher.role}
                  </p>
                  <p className="text-muted-foreground text-sm text-pretty">{teacher.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
