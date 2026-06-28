import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

import karmaImage from "../../img/teachers/karma.jpeg"
import kezangImage from "../../img/teachers/kezang.jpeg"
import pempemImage from "../../img/teachers/pem.jpeg"
import namgayImage from "../../img/teachers/namgay.jpeg"
import tsheringImage from "../../img/teachers/Tshering.jpeg"
import sherabImage from "../../img/teachers/sherab.jpeg"
import tashiImage from "../../img/teachers/tashi dema.jpeg"
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
  {
    name: "Mrs. Pem Pem Drolma Sherpa",
    role: "Special Educational Needs (SEN) Aide",
    bio: "Mrs. Pem Pem Drolma Sherpa serves as a full-time Special Educational Needs (SEN) Aide at Marpa's Montessori. She provides individualized support to children with diverse learning needs, helping them make meaningful developmental progress through her patient, kind, and inclusive approach. She also assists with daily programmes and activities, working closely with the teaching team to create a safe, nurturing, and inclusive environment for every child.",
    color: "bg-sky",
    image: pempemImage,
  },
  {
    name: "Mrs. Namgay Wangmo",
    role: "Lead Facilitator & Kindergarten Class Teacher",
    bio: "Mrs. Namgay Wangmo is the Lead Facilitator and Kindergarten Class Teacher at Marpa's Montessori. As the centre's longest-serving team member, she is recognized for her warm, inclusive teaching style. Through songs, dance, storytelling, play-based learning, and hands-on activities, she creates engaging learning experiences while mentoring teachers, assistants, and support staff to uphold the centre's high standards of care and education.",
    color: "bg-mint",
    image: namgayImage,
  },
  {
    name: "Mrs. Tshering Zangmo",
    role: "Facilitator & Programme Coordinator",
    bio: "Mrs. Tshering Zangmo is a dedicated educator and Programme Coordinator at Marpa's Montessori. She supports the Kindergarten programme while planning and leading the centre's Summer and Winter Engagement Programmes. With extensive experience as a Special Educational Needs (SEN) Aide, she provides compassionate, individualized support and also leads yoga, dance, and sports activities that promote children's confidence, physical well-being, and overall development.",
    color: "bg-coral",
    image: tsheringImage,
  },
  {
    name: "Mrs. Sherab Wangmo",
    role: "Lead Facilitator & Playgroup Class Teacher",
    bio: "Mrs. Sherab Wangmo is the Lead Facilitator and Playgroup Class Teacher at Marpa's Montessori. She creates a warm, inclusive, and nurturing environment where young children feel safe and encouraged to explore. Through songs, storytelling, sensory play, dance, and hands-on activities, she supports children's holistic development while working closely with fellow educators to provide individualized care and a strong foundation for lifelong learning.",
    color: "bg-rose",
    image: sherabImage,
  },
  {
    name: "Mrs. Tashi Dema",
    role: "Special Educational Needs (SEN) Aide",
    bio: "Mrs. Tashi Dema serves as a Special Educational Needs (SEN) Aide at Marpa's Montessori. She provides individualized support to children with diverse learning needs, helping them participate confidently in daily classroom activities and achieve their developmental goals. She also works alongside Lead Facilitators to deliver engaging programmes and ensure every child experiences quality care, guidance, and an inclusive learning environment.",
    color: "bg-mint",
    image: tashiImage,
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
