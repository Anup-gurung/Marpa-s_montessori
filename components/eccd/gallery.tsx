
"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import celebrationImage from "../../img/galleryfolder/celebration.jpeg";
import celebration2Image from "../../img/galleryfolder/celebration2.jpeg";
import celebration3Image from "../../img/galleryfolder/celebration3.jpeg";
import celebration4Image from "../../img/galleryfolder/celebtration4.jpeg";
import celebration6Image from "../../img/galleryfolder/celebration6.jpeg";
import classroomImage from "../../img/galleryfolder/classroom.jpeg";
import classroom1Image from "../../img/galleryfolder/classroom1.jpeg";
import classroom2Image from "../../img/galleryfolder/classroom2.jpeg";
import classroom3Image from "../../img/galleryfolder/classroom3.jpeg";
import eventImage from "../../img/galleryfolder/event.jpeg";
import event2Image from "../../img/galleryfolder/event2.jpeg";
import event3Image from "../../img/galleryfolder/event3.jpeg";
import event5Image from "../../img/galleryfolder/event5.jpeg";
import learning1Image from "../../img/galleryfolder/learning1.jpeg";
import learning2Image from "../../img/galleryfolder/learning2.jpeg";
import learning3Image from "../../img/galleryfolder/learning3.jpeg";
import learning5Image from "../../img/galleryfolder/learning5.jpeg";
import outdoorImage from "../../img/galleryfolder/outdoor.jpeg";
import outdoor2Image from "../../img/galleryfolder/outdoor2.jpeg";
import outdoor3Image from "../../img/galleryfolder/outdoor3.jpeg";
import outdoor4Image from "../../img/galleryfolder/outdoor4.jpeg";
import outdoor5Image from "../../img/galleryfolder/outdoor5.jpeg";
import outdoor6Image from "../../img/galleryfolder/outdoor6.jpeg";
import outdoor7Image from "../../img/galleryfolder/outdoor7.jpeg";
import outdoor8Image from "../../img/galleryfolder/outdoor8.jpeg";

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
    title: "Classroom Moment",
    image: classroomImage,
  },
  {
    id: 2,
    category: "Classroom",
    title: "Classroom Activity",
    image: classroom1Image,
  },
  {
    id: 3,
    category: "Classroom",
    title: "Classroom Learning",
    image: classroom2Image,
  },
  {
    id: 4,
    category: "Classroom",
    title: "Classroom Play",
    image: classroom3Image,
  },
  {
    id: 5,
    category: "Outdoor",
    title: "Outdoor Play",
    image: outdoorImage,
  },
  {
    id: 6,
    category: "Outdoor",
    title: "Outdoor Fun",
    image: outdoor2Image,
  },
  {
    id: 7,
    category: "Outdoor",
    title: "Outdoor Activity",
    image: outdoor3Image,
  },
  {
    id: 8,
    category: "Outdoor",
    title: "Outdoor Learning",
    image: outdoor4Image,
  },
  {
    id: 9,
    category: "Outdoor",
    title: "Outdoor Exploration",
    image: outdoor5Image,
  },
  {
    id: 10,
    category: "Outdoor",
    title: "Outdoor Group Time",
    image: outdoor6Image,
  },
  {
    id: 11,
    category: "Outdoor",
    title: "Outdoor Discovery",
    image: outdoor7Image,
  },
  {
    id: 12,
    category: "Outdoor",
    title: "Outdoor Moment",
    image: outdoor8Image,
  },
  {
    id: 13,
    category: "Learning",
    title: "Learning Activity",
    image: learning1Image,
  },
  {
    id: 14,
    category: "Learning",
    title: "Learning Together",
    image: learning2Image,
  },
  {
    id: 15,
    category: "Learning",
    title: "Hands-on Learning",
    image: learning3Image,
  },
  {
    id: 16,
    category: "Learning",
    title: "Learning Moment",
    image: learning5Image,
  },
  {
    id: 17,
    category: "Events",
    title: "School Event",
    image: eventImage,
  },
  {
    id: 18,
    category: "Events",
    title: "Event Activity",
    image: event2Image,
  },
  {
    id: 19,
    category: "Events",
    title: "Event Moment",
    image: event3Image,
  },
  {
    id: 20,
    category: "Events",
    title: "Special Event",
    image: event5Image,
  },
  {
    id: 21,
    category: "Celebrations",
    title: "Celebration",
    image: celebrationImage,
  },
  {
    id: 22,
    category: "Celebrations",
    title: "Celebration Moment",
    image: celebration2Image,
  },
  {
    id: 23,
    category: "Celebrations",
    title: "Celebration Activity",
    image: celebration3Image,
  },
  {
    id: 24,
    category: "Celebrations",
    title: "Special Celebration",
    image: celebration4Image,
  },
  {
    id: 25,
    category: "Celebrations",
    title: "Celebration Day",
    image: celebration6Image,
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
