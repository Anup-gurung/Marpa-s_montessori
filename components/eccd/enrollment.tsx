"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FileText, Calendar, Users, Check, Loader2 } from "lucide-react"

const enrollmentInfo = [
  {
    icon: Users,
    title: "Age Groups",
    items: ["Infants: 0-18 months", "Toddlers: 18 months - 3 years", "Preschool: 3-5 years", "Kindergarten: 5-6 years"],
    color: "bg-sky",
  },
  {
    icon: Calendar,
    title: "Registration Process",
    items: ["Submit inquiry form", "Schedule a visit", "Complete enrollment form", "Submit required documents"],
    color: "bg-coral",
  },
  {
    icon: FileText,
    title: "Required Documents",
    items: ["Birth certificate", "Immunization records", "Parent/Guardian ID", "Emergency contact information"],
    color: "bg-mint",
  },
]

export function Enrollment() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="enroll" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-coral/20 text-coral px-4 py-1 rounded-full text-sm font-medium mb-4">
            Enrollment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Join Our Marpa's Montessori Family
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Ready to give your child the best start in life? Learn about our enrollment process and submit your inquiry today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Enrollment Info Cards */}
          <div className="space-y-6">
            {enrollmentInfo.map((info) => (
              <Card key={info.title} className="border-0 shadow-lg rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className={`${info.color} p-6 flex items-center justify-center`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
                      <ul className="space-y-2">
                        {info.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Check className="w-4 h-4 text-mint flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enrollment Form */}
          <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
            <div className="h-2 bg-coral" />
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Enrollment Inquiry Form</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-mint/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-mint" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">
                    We&apos;ve received your enrollment inquiry. Our team will contact you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-foreground">Parent Name</Label>
                      <Input 
                        id="parentName" 
                        placeholder="Your full name" 
                        required
                        className="rounded-xl border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childName" className="text-foreground">Child Name</Label>
                      <Input 
                        id="childName" 
                        placeholder="Child's full name" 
                        required
                        className="rounded-xl border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="childAge" className="text-foreground">Child Age</Label>
                      <Input 
                        id="childAge" 
                        placeholder="e.g., 3 years" 
                        required
                        className="rounded-xl border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Your phone number" 
                        required
                        className="rounded-xl border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required
                      className="rounded-xl border-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Any questions or special requirements?"
                      rows={4}
                      className="rounded-xl border-border resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-coral hover:bg-coral/90 text-white rounded-full py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Enrollment Request"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
