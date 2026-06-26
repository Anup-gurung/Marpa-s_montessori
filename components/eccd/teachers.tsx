import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import karmaImage from "../../img/teachers/karma.jpeg"
import kezangImage from "../../img/teachers/kezang.jpeg"

const teachers = [
  {
    name: "Kezang Wangmo",
    role: "Founder & Centre Director",
    bio: "Kezang Wangmo is the Founder and Centre Director of Marpa's Montessori. She leads the centre's vision, curriculum, and daily operations, ensuring high-quality, inclusive early childhood education. Passionate about every child's growth, she mentors staff, partners with families, and fosters a safe, nurturing environment where children develop academically, socially, emotionally, and independently.",
    color: "bg-sky",
    image: kezangImage,
  },
  {
    name: "Mrs. Karma Sonam",
    role: "Administrator & Accounts Officer | SEN Support Assistant",
    bio: "Mrs. Karma Sonam oversees the administrative and financial operations of Marpa's Montessori, managing admissions, accounts, parent communication, and daily administration. She also supports the Special Educational Needs (SEN) programme, helping create an inclusive and nurturing learning environment where every child receives the care and support they need to thrive.",
    color: "bg-coral",
    image: karmaImage,
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
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={teacher.image}
                      alt={`${teacher.name} portrait`}
                      fill
                      className="object-cover object-center"
                      sizes="112px"
                    />
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
