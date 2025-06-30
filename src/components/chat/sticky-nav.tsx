"use client"

import { useState } from "react"
import { ArrowUp } from "lucide-react"
import { Dialog, DialogContent } from "../ui/dialog"
import { useScroll } from "motion/react"
import clsx from "clsx"
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Link as ScrollLink } from 'react-scroll'
import { GradientWheel } from "../ui/gradient-wheel"
import Assistant from "../assistant"

export default function StickyNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const isScrolled = scrollY.get() > 0

  return (
    <div className="sticky top-[60px] z-50">
      {/* Navigation Bar with glass morphism effect */}
      <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-b dark:border-white/20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left Section - Assistant Trigger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(true)}
                className="group relative flex items-center gap-2 focus:outline-none"
                aria-label="Open assistant"
              >
                <div className="transition-transform group-hover:scale-110">
                  <GradientWheel />
                </div>
                <span className="font-medium text-sm sm:text-base whitespace-nowrap">
                  Ask My Assistant
                </span>
              </button>
            </div>

            {/* Center Section - Subtle Description */}
            <div className="hidden md:flex flex-1 justify-center px-4">
              <span className="text-sm text-gray-600 dark:text-gray-300 truncate max-w-xs">
                Full-stack developer specializing in modern web technologies
              </span>
            </div>

            {/* Right Section - Scroll to Top */}
            <div className="flex items-center">
              <ScrollLink 
                to="header" 
                spy smooth 
                offset={-100}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </ScrollLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Assistant Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <VisuallyHidden>
          <DialogTitle>Digital Assistant</DialogTitle>
          <DialogDescription>
            AI-powered assistant providing information about Sheila&#39;s skills and experience
          </DialogDescription>
        </VisuallyHidden>
        <DialogContent 
          className={clsx(
            "border-0 p-0 overflow-hidden",
            "w-full max-w-3xl",
            "h-[80vh] max-h-[700px]",
            "bg-transparent",
            !isScrolled 
              ? "top-[calc(100%-25rem)]" 
              : "top-[calc(100%-22rem)]"
          )}
        >
          <div className="rounded-2xl border-2 border-teal-500/10 bg-white dark:bg-zinc-900 shadow-xl h-full overflow-hidden">
            <Assistant />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}