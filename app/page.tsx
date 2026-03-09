import { Header } from "@/components/eccd/header"
import { Hero } from "@/components/eccd/hero"
import { About } from "@/components/eccd/about"
import { Programs } from "@/components/eccd/programs"
import { Activities } from "@/components/eccd/activities"
import { Environment } from "@/components/eccd/environment"
import { Teachers } from "@/components/eccd/teachers"
import { Gallery } from "@/components/eccd/gallery"
import { Enrollment } from "@/components/eccd/enrollment"
import { Contact } from "@/components/eccd/contact"
import { Footer } from "@/components/eccd/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Activities />
        <Environment />
        <Teachers />
        <Gallery />
        <Enrollment />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
