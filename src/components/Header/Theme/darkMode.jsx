"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react";

///icons
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DarkMode() {
  const { setTheme } = useTheme()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center">
          {
            theme === "dark" ? <FiSun onClick={() => setTheme("light")} className="cursor-pointer" size={20}/> : <FaMoon onClick={() => setTheme("dark")} className="cursor-pointer" size={20}/>
          }
        </div>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
