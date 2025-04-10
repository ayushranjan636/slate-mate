"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function PilotForm({ triggerButton }: { triggerButton: React.ReactNode }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    students: "",
    interest: "",
    updates: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast({
        title: "Application submitted!",
        description: "We'll be in touch with you shortly about the pilot program.",
      })
      setIsSubmitting(false)
      // Reset form or close dialog
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        students: "",
        interest: "",
        updates: true,
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your application couldn't be submitted. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Join Our Pilot Program</DialogTitle>
          <DialogDescription>
            Get early access to SlateMate and help shape the future of educational technology.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">I am a</Label>
            <Select
              name="role"
              value={formData.role}
              onValueChange={(value) => handleSelectChange("role", value)}
              required
            >
              <SelectTrigger id="role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="parent">Parent</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="school_admin">School Administrator</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="students">Number of Students</Label>
            <Select
              name="students"
              value={formData.students}
              onValueChange={(value) => handleSelectChange("students", value)}
              required
            >
              <SelectTrigger id="students">
                <SelectValue placeholder="Select number of students" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1-3 students</SelectItem>
                <SelectItem value="4-10">4-10 students</SelectItem>
                <SelectItem value="11-30">11-30 students</SelectItem>
                <SelectItem value="31-100">31-100 students</SelectItem>
                <SelectItem value="100+">More than 100 students</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest">What interests you most about SlateMate?</Label>
            <Textarea
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              placeholder="Tell us what features you're most excited about..."
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="updates"
              checked={formData.updates}
              onCheckedChange={(checked) => handleCheckboxChange("updates", checked as boolean)}
            />
            <Label htmlFor="updates" className="text-sm">
              I'd like to receive updates about SlateMate and the pilot program
            </Label>
          </div>

          <DialogFooter className="pt-4">
            <Button type="submit" variant="glow" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
