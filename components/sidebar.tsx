"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, ChevronRight } from "lucide-react"
import { ThemeSwitcher } from "./theme-switcher"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-background z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold">SlateMate</span>
            <div className="flex items-center space-x-2">
              <ThemeSwitcher />
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-auto py-4">
            <nav className="flex flex-col px-4 space-y-1">
              <Link href="/" className="py-3 px-2 hover:bg-muted rounded-md transition-colors" onClick={onClose}>
                Home
              </Link>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="product" className="border-none">
                  <AccordionTrigger className="py-3 px-2 hover:bg-muted rounded-md transition-colors">
                    Product
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-1 pl-4">
                      <Link
                        href="/features"
                        className="py-2 px-2 hover:bg-muted rounded-md transition-colors flex items-center"
                        onClick={onClose}
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Features
                      </Link>
                      <Link
                        href="/pricing"
                        className="py-2 px-2 hover:bg-muted rounded-md transition-colors flex items-center"
                        onClick={onClose}
                      >
                        <ChevronRight className="h-4 w-4 mr-1" />
                        Pricing
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link href="/about" className="py-3 px-2 hover:bg-muted rounded-md transition-colors" onClick={onClose}>
                About Us
              </Link>
            </nav>
          </div>

          <div className="p-4 border-t">
            <Button className="w-full bg-electric hover:bg-electric/90 text-white">Login</Button>
          </div>
        </div>
      </div>
    </>
  )
}
