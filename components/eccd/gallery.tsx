// "use client"

// import { useState } from "react"
// import { X } from "lucide-react"

// const categories = ["All", "Classroom", "Outdoor", "Learning", "Events", "Celebrations"]

// const galleryItems = [
//   { id: 1, category: "Classroom", emoji: "📚", title: "Story Time", color: "bg-sky/20" },
//   { id: 2, category: "Outdoor", emoji: "🌳", title: "Nature Walk", color: "bg-mint/20" },
//   { id: 3, category: "Learning", emoji: "🔢", title: "Math Fun", color: "bg-coral/20" },
//   { id: 4, category: "Events", emoji: "🎭", title: "Drama Day", color: "bg-rose/20" },
//   { id: 5, category: "Celebrations", emoji: "🎂", title: "Birthday Party", color: "bg-sunshine/30" },
//   { id: 6, category: "Classroom", emoji: "🎨", title: "Art Class", color: "bg-coral/20" },
//   { id: 7, category: "Outdoor", emoji: "⚽", title: "Sports Day", color: "bg-mint/20" },
//   { id: 8, category: "Learning", emoji: "🔬", title: "Science Fun", color: "bg-sky/20" },
//   { id: 9, category: "Events", emoji: "🎪", title: "Fun Fair", color: "bg-sunshine/30" },
//   { id: 10, category: "Celebrations", emoji: "🎊", title: "Graduation", color: "bg-rose/20" },
//   { id: 11, category: "Classroom", emoji: "🎵", title: "Music Time", color: "bg-mint/20" },
//   { id: 12, category: "Learning", emoji: "📖", title: "Reading Hour", color: "bg-sky/20" },
// ]

// export function Gallery() {
//   const [activeCategory, setActiveCategory] = useState("All")
//   const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

//   const filteredItems = activeCategory === "All" 
//     ? galleryItems 
//     : galleryItems.filter(item => item.category === activeCategory)

//   return (
//     <section id="gallery" className="py-16 md:py-24 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block bg-sky/20 text-sky px-4 py-1 rounded-full text-sm font-medium mb-4">
//             Gallery
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
//             Moments of Joy & Learning
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
//             Take a glimpse into the wonderful activities and special moments at Marpa's Montessori Center.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-sky text-white"
//                   : "bg-card text-muted-foreground hover:bg-sky/20 hover:text-sky"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filteredItems.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => setSelectedItem(item)}
//               className={`${item.color} rounded-3xl aspect-square flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform duration-300 cursor-pointer group`}
//             >
//               <span className="text-5xl md:text-6xl mb-2 group-hover:scale-110 transition-transform">
//                 {item.emoji}
//               </span>
//               <span className="text-foreground font-medium text-sm md:text-base text-center">
//                 {item.title}
//               </span>
//               <span className="text-muted-foreground text-xs mt-1">{item.category}</span>
//             </button>
//           ))}
//         </div>

//         {/* Lightbox */}
//         {selectedItem && (
//           <div 
//             className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
//             onClick={() => setSelectedItem(null)}
//           >
//             <div 
//               className="bg-card rounded-3xl max-w-lg w-full p-8 relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedItem(null)}
//                 className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
//               >
//                 <X className="w-5 h-5 text-foreground" />
//               </button>
              
//               <div className={`${selectedItem.color} rounded-2xl aspect-video flex items-center justify-center mb-6`}>
//                 <span className="text-8xl">{selectedItem.emoji}</span>
//               </div>
              
//               <h3 className="text-2xl font-bold text-foreground mb-2">{selectedItem.title}</h3>
//               <p className="text-muted-foreground">
//                 A wonderful moment from our {selectedItem.category.toLowerCase()} activities at Marpa's Montessori Center.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const categories = [
  "All",
  "Classroom",
  "Outdoor",
  "Learning",
  "Events",
  "Celebrations",
];

const galleryItems = [
  {
    id: 1,
    category: "Classroom",
    title: "Story Time",
    image: "./img/galleryfolder/clasroom",
  },
  {
    id: 2,
    category: "Outdoor",
    title: "Nature Walk",
    image: "/gallery/outdoor/nature-walk.jpg",
  },
  {
    id: 3,
    category: "Learning",
    title: "Math Fun",
    image: "/gallery/learning/math-fun.jpg",
  },
  {
    id: 4,
    category: "Events",
    title: "Drama Day",
    image: "/gallery/events/drama-day.jpg",
  },
  {
    id: 5,
    category: "Celebrations",
    title: "Birthday Party",
    image: "/gallery/celebrations/birthday-party.jpg",
  },
  {
    id: 6,
    category: "Classroom",
    title: "Art Class",
    image: "/gallery/classroom/art-class.jpg",
  },
  {
    id: 7,
    category: "Outdoor",
    title: "Sports Day",
    image: "/gallery/outdoor/sports-day.jpg",
  },
  {
    id: 8,
    category: "Learning",
    title: "Science Fun",
    image: "/gallery/learning/science-fun.jpg",
  },
  {
    id: 9,
    category: "Events",
    title: "Fun Fair",
    image: "/gallery/events/fun-fair.jpg",
  },
  {
    id: 10,
    category: "Celebrations",
    title: "Graduation",
    image: "/gallery/celebrations/graduation.jpg",
  },
  {
    id: 11,
    category: "Classroom",
    title: "Music Time",
    image: "/gallery/classroom/music-time.jpg",
  },
  {
    id: 12,
    category: "Learning",
    title: "Reading Hour",
    image: "/gallery/learning/reading-hour.jpg",
  },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Gallery
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Moments of Joy & Learning
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into the wonderful activities and special moments at
            Marpa Montessori Center.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition ${
                activeCategory === category
                  ? "bg-sky-500 text-white"
                  : "bg-gray-100 hover:bg-sky-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-5"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-20 bg-white rounded-full p-2 shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-video">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {selectedItem.title}
                </h3>

                <p className="text-muted-foreground mt-2">
                  A memorable moment from our{" "}
                  <strong>{selectedItem.category}</strong> activities at
                  Marpa Montessori Center.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
