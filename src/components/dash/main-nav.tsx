'use client'

import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const path = usePathname()
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {items.map(({ href, label }) => (
        <Link key={label} href={href} className={cn("text-sm font-medium transition-colors hover:text-primary", path !== href && "text-muted-foreground")}>
          {label}
        </Link>
      ))}
    </nav>
  )
}

const items  = [
  { href: "/", label: "Overview" },
  { href: "/examples/dashboard", label: "Customers" },
  { href: "/examples/dashboard", label: "Products" },
  { href: "/examples/dashboard", label: "Settings" },
]