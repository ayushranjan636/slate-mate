"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type NavItem = {
  title: string
  href: string
  children?: { title: string; href: string }[]
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Product",
    href: "/product",
    children: [
      { title: "For Schools", href: "/product#schools" },
      { title: "For Parents", href: "/product#parents" },
      { title: "AI Features", href: "/product#ai-features" },
    ],
  },
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "About Us", href: "/about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-xl"
            >
              SlateMate
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => {
              if (item.children) {
                return (
                  <DropdownMenu key={item.title}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 h-9 px-3 text-base font-medium">
                        {item.title} <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.title} asChild>
                          <Link href={child.href} className="cursor-pointer">
                            {child.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-base font-medium transition-colors ${
                    pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.title}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-electric"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button variant="glow" className="hidden md:flex" asChild>
              <Link href="/login">Login</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Simplified Implementation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Menu */}
          <div className="fixed right-0 top-0 h-full w-[280px] bg-background overflow-y-auto">
            <div className="p-6 pt-16">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  if (item.children) {
                    return (
                      <div key={item.title} className="space-y-2">
                        <div className="font-medium">{item.title}</div>
                        <div className="pl-4 border-l border-border space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block py-1 text-muted-foreground hover:text-foreground"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`py-2 text-base font-medium ${
                        pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-8">
                <Button variant="glow" className="w-full" asChild>
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
